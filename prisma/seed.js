// import prisma from "../src/server/prismaClient";
// const prisma = require("../src/server/prismaClient");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const locations = [
  {
    country: {
      name: "Ireland",
      cities: [
        {
          name: "Belfast",
        },
        {
          name: "Dublin",
        },
      ],
    },
  },
  {
    country: {
      name: "United Kingdom",
      cities: [
        {
          name: "Bristol",
        },
        {
          name: "London",
        },
      ],
    },
  },
  {
    country: {
      name: "Spain",
      cities: [
        {
          name: "Madrid",
        },
        {
          name: "Alicante",
        },
      ],
    },
  },
  {
    country: {
      name: "Germany",
      cities: [
        {
          name: "Berlin",
        },
        {
          name: "Munich",
        },
      ],
    },
  },
];

async function main() {
  for (const location of locations) {
    const country = location.country;

    const countryItem = await prisma.country.upsert({
      where: { name: country.name },
      update: {
        name: country.name,
      },
      create: {
        name: country.name,
      },
    });

    const cities = country.cities;

    for (const city of cities) {
      await prisma.city.upsert({
        where: { name: city.name },
        update: {
          name: city.name,
          countryId: countryItem.id,
          test: city.test,
        },
        create: {
          name: city.name,
          countryId: countryItem.id,
          test: city.test,
        },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
