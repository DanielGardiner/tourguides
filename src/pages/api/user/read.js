import { getSession } from "next-auth/react";
import prisma from "../../../server/prismaClient";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unathorised" });
  }

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  return res.status(200).json(users);
}
