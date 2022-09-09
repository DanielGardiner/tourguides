import { getSession } from "next-auth/react";
import prisma from "../../../server/prismaClient";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unathorised" });
  }

  const { id, role } = req?.body;

  console.log('%c [qq]: id ', 'background: #fbff00; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;', '\n', id, '\n\n');

  const updateUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      role
    },
  })


  // return res.status(200).json('');
  return res.status(200).json(updateUser);
}
