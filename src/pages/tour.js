import { getSession } from "next-auth/react";
import Layout from "../components/Layout";
import tourService from "../server/services/tour";
import { userRoles } from "../constants";
import Image from "next/image";

export async function getServerSideProps({ req, res, query }) {
  try {
    const session = await getSession({ req });

    const { id } = query;

    const idInt = parseInt(id, 10);

    const tour = await tourService.getTour(idInt);

    const canViewProtectedSteps = [
      userRoles.PREMIUM_MEMBER,
      userRoles.CONTRIBUTOR,
      userRoles.ADMIN,
      userRoles.SUPER_ADMIN,
    ].includes(session?.role);

    if (!canViewProtectedSteps) {
      tour.steps.filter((step) => {
        step.audioLink = step.isFree ? step.audioLink : null;
        return step;
      });
    }

    return {
      props: {
        session,
        tour,
      },
    };
  } catch (e) {
    console.error(e);

    // If error redirect user to homepage
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}

export default function TourPage({ session, tour }) {
  return (
    <Layout session={session}>
      <h1 className="text-3xl font-bold text-center mb-8">{tour.name}</h1>
      <p className="my-3 max-w-xl mx-auto">{tour.descriptionShort}</p>
      <div>
        {tour?.steps?.map(
          ({ id, name, description, audioLink, imageLink }, index) => (
            <div className="mb-10 last:mb-0" key={id}>
              <h6 className="text-xl mb-3">Step {index + 1} | {name}</h6>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-1">
                  {audioLink ? (
                    <iframe
                      width="100%"
                      height="166"
                      scrolling="no"
                      frameBorder="no"
                      allow="autoplay"
                      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${audioLink}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                    />
                  ) : (
                    <div className="h-[166px] w-full bg-gray-200 flex justify-center items-center">
                      <p>Locked</p>
                    </div>
                  )}

                  <p className="mt-6">{description}</p>
                </div>
                <div className="relative max-h-72">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/1/12/Bristol_Temple_Meads_station_%286466232797%29.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />

                </div>
              </div>
            </div>
          )
        )}
      </div>
    </Layout>
  );
}
