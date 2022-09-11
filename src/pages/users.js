import prisma from "../server/prismaClient";
import { getSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/Layout";
import { userRoles } from "../constants.js";
import getUsersDb from "../server/endpoints/user/getUsers";
import useGetUsers from "../hooks/useGetUsers";
import useUpdateUser from "../hooks/useUpdateUser";

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });
  if (!session) {
    return { redirect: { destination: "/" } };
  }

  // NOTE: this blocks the page from rendering so the first thing the user sees is the page witht the dynamic content already rendered
  // i.e. without a loading spinner flash, if however this request takes a while to resolve its better to just
  // show the page with a loading spinner
  const users = await getUsersDb();

  return {
    props: {
      session,
      users,
    },
  };
}

export default function UsersPage({ users: initialUsers }) {
  const { data: users } = useGetUsers({ initialUsers: initialUsers });

  const updateUserMutation = useUpdateUser();

  return (
    <Layout>
      {users?.map((user) => {
        const { id, name, email, role } = user;
        return (
          <div key={id} className="flex mt-4 first:mt-0">
            <div className="mr-4">{name}</div>
            <div className="mr-4">{email}</div>
            <div className="mr-4 p-2 border-[1px] border-gray-600 rounded-md shadow-sm">
              {role}
            </div>
            {role === userRoles.MEMBER && (
              <button
                className="mr-4 p-2 bg-red-600 text-white rounded-md shadow-sm"
                onClick={() => updateUserMutation.mutate(user)}
                disabled={updateUserMutation.isLoading}
              >
                Promote to contributor
              </button>
            )}
          </div>
        );
      })}
    </Layout>
  );
}
