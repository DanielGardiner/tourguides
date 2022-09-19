import prisma from "../server/prismaClient";
import { getSession } from "next-auth/react";
import Layout from "../components/Layout";
import { userRoles } from "../constants";
import userService from "../server/services/user";
import useGetUsers from "../hooks/useGetUsers";
import useUpdateUser from "../hooks/useUpdateUser";

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });
  if (!session) return { redirect: { destination: '/' } }

  await redirectIfNoSession({session})
  await checkSessionRole({req, role: [userRoles.ADMIN, userRoles.SUPER_ADMIN]})

  // await redirectIfNoSession({session})
  // await checkSessionRole({req, role: [userRoles.ADMIN, userRoles.SUPER_ADMIN]})


  const isAdmin = [userRoles.ADMIN, userRoles.SUPER_ADMIN].includes(
    session?.role
  );
  if (!session || !isAdmin) {
    return { redirect: { destination: "/" } };
  }

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
}

export default function UsersPage({ session, users: initialUsers }) {
  const { data: users } = useGetUsers({ initialUsers: initialUsers });

  const updateUserMutation = useUpdateUser();

  return (
    <Layout session={session}>
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
              onChange={(e) => {
                const newUser = { ...user, role: e.target.value };
                updateUserMutation.mutate(newUser);
              }}
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
    </Layout>
  );
}
