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

const dummySteps = [
  {
    description: "Eu consequat ac felis donec et odio pellentesque. Posuere sollicitudin aliquam ultrices sagittis. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Mauris ultrices eros in cursus turpis. Elit eget gravida cum sociis natoque. Aliquet bibendum enim facilisis gravida neque convallis. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. At imperdiet dui accumsan sit amet nulla. In aliquam sem fringilla ut morbi. Diam sollicitudin tempor id eu nisl nunc mi. Tincidunt vitae semper quis lectus nulla at. Nisl rhoncus mattis rhoncus urna neque viverra. Ultricies integer quis auctor elit. Vitae purus faucibus ornare suspendisse sed. Morbi leo urna molestie at elementum. Aliquam eleifend mi in nulla. Duis at tellus at urna condimentum mattis pellentesque. Convallis posuere morbi leo urna molestie at elementum. Massa sed elementum tempus egestas sed. Magnis dis parturient montes nascetur ridiculus mus. In hendrerit gravida rutrum quisque non. Nunc sed augue lacus viverra vitae congue eu. In nibh mauris cursus mattis. Aliquet lectus proin nibh nisl. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Lectus mauris ultrices eros in cursus turpis massa. Metus dictum at tempor commodo ullamcorper a. Sit amet risus nullam eget. Elit at imperdiet dui accumsan sit. Ullamcorper a lacus vestibulum sed arcu. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum.",
    isFree: true,
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/1/12/Bristol_Temple_Meads_station_%286466232797%29.jpg",
    audioLink: "https://soundcloud.com/mistatrick/you-remixed-mista-trick-mega-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    description: "Egestas purus viverra accumsan in nisl nisi scelerisque eu. Quam viverra orci sagittis eu volutpat. Sed vulputate odio ut enim. Suspendisse potenti nullam ac tortor vitae purus faucibus. Vel risus commodo viverra maecenas. Purus in mollis nunc sed. Aliquam id diam maecenas ultricies mi eget. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Pretium nibh ipsum consequat nisl vel pretium lectus quam.",
    isFree: true,
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/1/12/Bristol_Temple_Meads_station_%286466232797%29.jpg",
    audioLink: "https://soundcloud.com/mistatrick/you-remixed-mista-trick-mega-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    description: "Vel risus commodo viverra maecenas. Purus in mollis nunc sed. Aliquam id diam maecenas ultricies mi eget. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Quam viverra orci sagittis eu volutpat. Sed vulputate odio ut enim. Suspendisse potenti nullam ac tortor vitae purus faucibus.",
    isFree: false,
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/1/12/Bristol_Temple_Meads_station_%286466232797%29.jpg",
    audioLink: "https://soundcloud.com/mistatrick/you-remixed-mista-trick-mega-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    description: "Lorem dolor sed viverra ipsum nunc aliquet bibendum. Id faucibus nisl tincidunt eget nullam non. Nibh mauris cursus mattis molestie. Dictumst vestibulum rhoncus est pellentesque elit. Etiam sit amet nisl purus in mollis. Tristique senectus et netus et malesuada fames. Gravida in fermentum et sollicitudin ac. Nullam non nisi est sit amet. Ultricies integer quis auctor elit sed vulputate mi. Tincidunt arcu non sodales neque sodales ut etiam. Eros donec ac odio tempor orci dapibus ultrices in. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Amet consectetur adipiscing elit pellentesque. Neque aliquam vestibulum morbi blandit cursus risus. Enim ut tellus elementum sagittis. Vel turpis nunc eget lorem dolor sed viverra. Elementum sagittis vitae et leo. Libero enim sed faucibus turpis in eu mi bibendum neque. Vulputate eu scelerisque felis imperdiet proin. Id cursus metus aliquam eleifend mi in. Cras ornare arcu dui vivamus arcu. Tortor id aliquet lectus proin nibh. Morbi tristique senectus et netus et malesuada. Diam maecenas ultricies mi eget mauris pharetra et. Feugiat in ante metus dictum at tempor commodo ullamcorper. Vivamus at augue eget arcu dictum varius duis at consectetur. Nibh ipsum consequat nisl vel. Purus in mollis nunc sed id. Arcu dictum varius duis at consectetur lorem donec massa sapien. Enim tortor at auctor urna nunc id cursus metus aliquam. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Convallis posuere morbi leo urna molestie. Consequat id porta nibh venenatis. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Magna sit amet purus gravida quis blandit turpis cursus. Blandit massa enim nec dui. Iaculis at erat pellentesque adipiscing commodo elit. In massa tempor nec feugiat nisl pretium fusce id. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Rutrum quisque non tellus orci. Vulputate odio ut enim blandit volutpat maecenas. Integer enim neque volutpat ac tincidunt. Amet risus nullam eget felis eget nunc. Tortor condimentum lacinia quis vel eros donec ac odio. Fermentum dui faucibus in ornare quam. Fusce id velit ut tortor pretium viverra suspendisse potenti.",
    isFree: false,
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/1/12/Bristol_Temple_Meads_station_%286466232797%29.jpg",
    audioLink: "https://soundcloud.com/mistatrick/you-remixed-mista-trick-mega-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    description: "Ut morbi tincidunt augue interdum velit euismod. Egestas erat imperdiet sed euismod nisi. Ut etiam sit amet nisl purus in. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Metus aliquam eleifend mi in nulla posuere sollicitudin. Morbi tempus iaculis urna id volutpat. Massa sed elementum tempus egestas sed sed risus pretium. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Consequat id porta nibh venenatis cras sed. Imperdiet proin fermentum leo vel. Dolor magna eget est lorem ipsum dolor sit amet. In iaculis nunc sed augue lacus viverra vitae congue eu. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Lorem ipsum dolor sit amet consectetur adipiscing elit. Laoreet non curabitur gravida arcu. Elementum sagittis vitae et leo duis ut diam. Platea dictumst vestibulum rhoncus est pellentesque. Eleifend mi in nulla posuere sollicitudin aliquam ultrices.",
    isFree: false,
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/1/12/Bristol_Temple_Meads_station_%286466232797%29.jpg",
    audioLink: "https://soundcloud.com/mistatrick/you-remixed-mista-trick-mega-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    description: "Non curabitur gravida arcu ac tortor dignissim convallis aenean. Sed augue lacus viverra vitae congue eu consequat ac felis. Ut pharetra sit amet aliquam id diam maecenas ultricies. Egestas dui id ornare arcu odio. Nisi porta lorem mollis aliquam. Sed libero enim sed faucibus turpis in eu mi. Sem et tortor consequat id porta nibh. Commodo nulla facilisi nullam vehicula. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Bibendum est ultricies integer quis auctor. Enim blandit volutpat maecenas volutpat. Facilisis volutpat est velit egestas dui id ornare arcu odio. Lorem ipsum dolor sit amet consectetur adipiscing.",
    isFree: false,
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/1/12/Bristol_Temple_Meads_station_%286466232797%29.jpg",
    audioLink: "https://soundcloud.com/mistatrick/you-remixed-mista-trick-mega-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    description: "Faucibus ornare suspendisse sed nisi lacus sed. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Quis varius quam quisque id diam vel quam elementum. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Consectetur adipiscing elit duis tristique sollicitudin. Ac ut consequat semper viverra. Felis bibendum ut tristique et. Turpis egestas integer eget aliquet nibh. Arcu bibendum at varius vel pharetra vel turpis. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Ornare lectus sit amet est placerat in egestas erat imperdiet. Egestas tellus rutrum tellus pellentesque eu tincidunt. Posuere urna nec tincidunt praesent semper feugiat nibh. Nibh mauris cursus mattis molestie a iaculis. Sem nulla pharetra diam sit amet nisl. Fermentum dui faucibus in ornare quam viverra. Amet volutpat consequat mauris nunc congue nisi. Morbi tempus iaculis urna id.",
    isFree: false,
    imageLink: "https://upload.wikimedia.org/wikipedia/commons/1/12/Bristol_Temple_Meads_station_%286466232797%29.jpg",
    audioLink: "https://soundcloud.com/mistatrick/you-remixed-mista-trick-mega-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
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

  // Add dummy steps 
  // - append tour id onto each dummy step
  const allTours = await prisma.city.findMany()
  const allTourIDs = allTours?.map(c => c.id)
  const dummyStepsWithTour = dummySteps?.map((s) => {
    const randomTourId = allTourIDs[Math.floor(Math.random()*allTourIDs.length)];
    s.tourId = randomTourId
    return s
  })
  // - add weight to step
  let stepsWithTourAndWeight = []
  allTourIDs?.map((tourId) => {
    temp = dummyStepsWithTour?.filter((sT) => sT.tourId === tourId)?.map((sT, index) => {
      sT.weight = index + 1
      return sT
    })
    stepsWithTourAndWeight = [...stepsWithTourAndWeight, ...temp]
  })
  // - add to database
  await prisma.step.createMany({
    data: stepsWithTourAndWeight,
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
