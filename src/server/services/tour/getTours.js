import prisma from "../../prismaClient";

export default async function getTours() {

  const tours = await prisma.tour.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      descriptionShort: true,
      city: true,
    }
  });

  return tours;
}
