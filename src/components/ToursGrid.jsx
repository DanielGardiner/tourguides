import useGetTours from "../hooks/useGetTours";
import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";

export default function ToursGrid() {
  const { data: tours, isLoading } = useGetTours({suspense: true});

  if(isLoading) return <LoadingSpinner />

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {tours?.map((tour) => (
        <Card tour={tour} key={tour.id} />
      ))}
    </div>
  );
}
