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

const dummyTours = [
  {
    name: "Great Tour",
    descriptionShort: "Egestas purus viverra accumsan in nisl nisi scelerisque eu. Quam viverra orci sagittis eu volutpat. Sed vulputate odio ut enim. Suspendisse potenti nullam ac tortor vitae purus faucibus.",
    imageLink: "https://a.cdn-hotels.com/gdcs/production72/d3/a335d920-1a22-4f74-95be-e945479a8d8c.jpg",
  },
  {
    name: "Another Fun Tour",
    descriptionShort: "Consectetur lorem donec massa sapien faucibus et. Tempus imperdiet nulla malesuada pellentesque elit. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus.",
    imageLink: "https://a.cdn-hotels.com/gdcs/production72/d3/a335d920-1a22-4f74-95be-e945479a8d8c.jpg",
  },
  {
    name: "Old City Tour",
    descriptionShort: "Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing.",
    imageLink: "https://a.cdn-hotels.com/gdcs/production72/d3/a335d920-1a22-4f74-95be-e945479a8d8c.jpg",
  },
  {
    name: "Amazing Tour",
    descriptionShort: "Non consectetur a erat nam at lectus. Nisl pretium fusce id velit ut tortor pretium viverra. Ac feugiat sed lectus vestibulum mattis.",
    imageLink: "https://a.cdn-hotels.com/gdcs/production72/d3/a335d920-1a22-4f74-95be-e945479a8d8c.jpg",
  },
  {
    name: "Fun Fun Tour",
    descriptionShort: "Nisi lacus sed viverra tellus in hac habitasse. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Viverra maecenas accumsan lacus vel facilisis. Bibendum arcu vitae elementum curabitur vitae nunc sed. Consequat nisl vel pretium lectus quam id leo in.",
    imageLink: "https://a.cdn-hotels.com/gdcs/production72/d3/a335d920-1a22-4f74-95be-e945479a8d8c.jpg",
  },
  {
    name: "See New Things",
    descriptionShort: "Erat imperdiet sed euismod nisi porta. Semper feugiat nibh sed pulvinar proin. Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    imageLink: "https://a.cdn-hotels.com/gdcs/production72/d3/a335d920-1a22-4f74-95be-e945479a8d8c.jpg",
  },
  {
    name: "Beer Tour",
    descriptionShort: "Neque laoreet suspendisse interdum consectetur.",
    imageLink: "https://a.cdn-hotels.com/gdcs/production72/d3/a335d920-1a22-4f74-95be-e945479a8d8c.jpg",
  },
  {
    name: "Art Tour",
    descriptionShort: "Nisl vel pretium lectus quam id leo. Tellus elementum sagittis vitae et leo duis. Est lorem ipsum dolor sit amet consectetur adipiscing.",
    imageLink: "https://a.cdn-hotels.com/gdcs/production72/d3/a335d920-1a22-4f74-95be-e945479a8d8c.jpg",
  },
]

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



  // Add dummy tours 
  // - append city id onto each dummy tour
  const allCities = await prisma.city.findMany()
  const allCityIDs = allCities?.map(c => c.id)
  const dummyToursWithCity = dummyTours?.map((d) => {
    const randomCityId = allCityIDs[Math.floor(Math.random()*allCityIDs.length)];
    d.cityId = randomCityId
    return d
  })
  // - add to database
  await prisma.tour.createMany({
    data: dummyToursWithCity,
    skipDuplicates: true,
  })
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
