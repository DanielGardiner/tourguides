import prisma from "../server/prismaClient";
import { getSession } from "next-auth/react";
import Layout from "../components/Layout";
import { userRoles } from "../constants";
import userService from "../server/services/user";
import useGetUsers from "../hooks/useGetUsers";
import useUpdateUser from "../hooks/useUpdateUser";
import { checkSession } from "../server/services/auth";

export async function getServerSideProps({ req, res }) {
  try {
    const session = await getSession({ req });
    checkSession({
      session,
      hasRole: [userRoles.ADMIN, userRoles.SUPER_ADMIN],
    });

    // NOTE: this blocks the page from rendering so the first thing the user sees is the page witht the dynamic content already rendered
    // i.e. without a loading spinner flash, if however this request takes a while to resolve its better to just
    // show the page with a loading spinner
    const users = await userService.getUsers();

    return {
      props: {
        session,
        users,
      },
    };
  } catch (e) {
    console.error(e);

    // If error redirect user to homepage
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}

export default function UsersPage({ session, users: initialUsers }) {
  const { data: users } = useGetUsers({ initialUsers: initialUsers });

  const updateUserMutation = useUpdateUser();

  const handleRoleChange = (event, user) => {
    const newUser = { ...user, role: event.target.value };
    updateUserMutation.mutate(newUser);
  };

  return (
    <>
      {users?.map((user) => {
        const { id, name, email, role } = user;
        return (
          <div key={id} className="flex mt-4 first:mt-0">
            <div className="mr-4">{name}</div>
            <div className="mr-4">{email}</div>
            <div className="mr-4 p-2 border-[1px] border-gray-600 rounded-md shadow-sm">
              {role}
            </div>
            <select
              className="mr-4 p-2 bg-red-600 text-white rounded-md shadow-sm"
              onChange={(event) => handleRoleChange(event, user)}
              disabled={updateUserMutation.isLoading}
            >
              {Object.values(userRoles)?.map((roleOption) => (
                <option
                  value={roleOption}
                  key={roleOption}
                  selected={roleOption === role}
                  className="bg-red-800"
                >
                  {roleOption}
                </option>
              ))}
            </select>
          </div>
        );
      })}
    </>
  );
}
