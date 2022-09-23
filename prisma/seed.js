// import prisma from "../src/server/prismaClient";
// const prisma = require("../src/server/prismaClient");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const cities = {
  BELFAST: {
    name: "Belfast",
  },
  DUBLIN: {
    name: "Dublin",
  },
  BRISTOL: {
    name: "Bristol",
  },
  LONDON: {
    name: "London",
  },
  MADRID: {
    name: "Madrid",
  },
  ALICANTE: {
    name: "Alicante",
  },
  BERLIN: {
    name: "Berlin",
  },
  MUNICH: {
    name: "Munich",
  },
}

const locations = [
  {
    country: {
      name: "Ireland",
      cities: [cities.BELFAST, cities.DUBLIN]
    },
  },
  {
    country: {
      name: "United Kingdom",
      cities: [cities.BRISTOL, cities.LONDON]
    },
  },
  {
    country: {
      name: "Spain",
      cities: [cities.MADRID, cities.ALICANTE],
    },
  },
  {
    country: {
      name: "Germany",
      cities: [cities.BERLIN, cities.MUNICH],
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
