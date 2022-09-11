import prisma from "../../prismaClient";

export default async function getUsers() {

  const users = await prisma.user.findMany({
    orderBy: {
      email: "desc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  return users;
}
