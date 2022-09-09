import prisma from "../server/prismaClient";
import { getSession, signIn, signOut } from "next-auth/react";
import Layout from "../components/Layout";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  return {
    props: {
      session,
      users,
    },
  };
}

const getUsers = async () => {
  const response = await fetch("/api/user/read", {
    method: "GET",
  });
  const users = await response.json();
  return users;
};

const updateUser = async (user) => {
  await fetch("/api/user/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: user?.id,
      role: "contributor",
    }),
  });
};

export default function UsersPage({ users: initialUsers }) {
  const { data: users } =
    useQuery(["users"], getUsers, {
      initialData: initialUsers,
    }) || [];

  const queryClient = useQueryClient();

  const updateUserMutation = useMutation((user) => updateUser(user), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

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
            {role !== "contributor" && (
              <button
                className="mr-4 p-2 bg-red-600 text-white rounded-md shadow-sm"
                onClick={() => updateUserMutation.mutate(user)}
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
