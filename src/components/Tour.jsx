import Image from "next/image";
import useGetTour from "../hooks/useGetTour";
import LoadingSpinner from "./LoadingSpinner";
import LockIcon from "/public/icons/lock-icon.png";


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
                    <div className="h-[166px] w-full bg-gray-200 flex justify-center items-center relative">
                      <Image
                        src={LockIcon}
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p className="ml-1">Locked</p>
                    </div>
                  )}

                  <p className="mt-6">{description}</p>
                </div>
                <div className="relative max-h-72">
                  <Image
                    src="https://images.unsplash.com/photo-1502732728614-8329a1bf1415?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
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
