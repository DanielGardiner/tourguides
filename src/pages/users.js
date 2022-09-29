import prisma from "../server/prismaClient";
import { getSession } from "next-auth/react";
import Layout from "../components/Layout";
import { userRoles } from "../constants";
import userService from "../server/services/user";
import useGetUsers from "../hooks/useGetUsers";
import useUpdateUser from "../hooks/useUpdateUser";
import { checkSession } from "../server/services/auth";
import useGetSession from "../hooks/useGetSession";
import UsersTable from "../components/UsersTable";

export default function UsersPage() {
  const { data: session } = useGetSession({ required: true });
  return <>{session && <UsersTable />}</>;
}
