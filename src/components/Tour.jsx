import Image from "next/image";
import useGetTour from "../hooks/useGetTour";
import LoadingSpinner from "./LoadingSpinner";

export default function Tour({ tourId }) {
  const { data: tour, isLoading } = useGetTour(tourId)

  if (isLoading) return <LoadingSpinner />

  return (
    <>
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
    </>
  );
}
