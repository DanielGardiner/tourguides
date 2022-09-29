import prisma from "../server/prismaClient";
import { getSession } from "next-auth/react";
import Layout from "../components/Layout";
import { userRoles } from "../constants";
import userService from "../server/services/user";
import useGetUsers from "../hooks/useGetUsers";
import useUpdateUser from "../hooks/useUpdateUser";
import { checkSession } from "../server/services/auth";
import useGetSession from "../hooks/useGetSession";

export default function UsersTable() {
  const { data: users } = useGetUsers();

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