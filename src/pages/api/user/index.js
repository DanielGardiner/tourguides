import { getSession } from "next-auth/react";
import getUsers from "../../../server/endpoints/user/getUsers";
import prisma from "../../../server/prismaClient";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unathorised" });
  }

  const users = await getUsers();

  return res.status(200).json(users);
}
