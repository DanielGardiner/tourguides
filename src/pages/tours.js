import { getSession, useSession } from "next-auth/react";
import Layout from "../components/Layout";
import tourService from "../server/services/tour";
import useGetTours from "../hooks/useGetTours";
import Card from "../components/Card";
import useGetSession from "../hooks/useGetSession";
import LoadingSpinner from "../components/LoadingSpinner";

export default function ToursPage() {
  // const session = useSession()
  const { data: session, isLoading: isSessionLoading } = useGetSession();
  const { data: tours, isLoading: isToursLoading } = useGetTours();

  return (
    <Layout>
      {isSessionLoading || isToursLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {tours?.map((tour) => (
            <Card tour={tour} key={tour.id} />
          ))}
        </div>
      )}
    </Layout>
  );
}
