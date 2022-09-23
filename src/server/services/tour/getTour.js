import prisma from "../../prismaClient";

export default async function getTours(tourId) {
  const tour = await prisma.tour.findUnique({
    where: {
      id: tourId,
    },
    select: {
      id: true,
      name: true,
      descriptionShort: true,
      city: {
        select: {
          id: true,
          name: true,
        }
      },
      steps: {
        orderBy: {
          weight: "asc",
        },
        select: {
          id: true,
          name: true,
          description: true,
          isFree: true,
          audioLink: true,
          imageLink: true,
        }
      },
    }
  });

  return tour;
}
