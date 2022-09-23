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
};

const countries = [
  {
    name: "Ireland",
    cities: [cities.BELFAST, cities.DUBLIN],
  },
  {
    name: "United Kingdom",
    cities: [cities.BRISTOL, cities.LONDON],
  },
  {
    name: "Spain",
    cities: [cities.MADRID, cities.ALICANTE],
  },
  {
    name: "Germany",
    cities: [cities.BERLIN, cities.MUNICH],
  },
];

async function main() {

  // Loop over all countries and upsert into the database
  for (const country of countries) {
    const countryItem = await prisma.country.upsert({
      where: { name: country.name },
      update: {
        name: country.name,
      },
      create: {
        name: country.name,
      },
    });

    // Loop over all cities within the country and upsert into the database
    const cities = country.cities;
    for (const city of cities) {
      await prisma.city.upsert({
        where: { name: city.name },
        update: {
          name: city.name,
          countryId: countryItem.id,
        },
        create: {
          name: city.name,
          countryId: countryItem.id,
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
