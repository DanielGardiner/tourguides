import useGetTours from "../hooks/useGetTours";
import Card from "./Card";

export default function ToursGrid() {
  const { data: tours } = useGetTours({ suspense: true });

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {tours?.map((tour) => (
        <Card tour={tour} key={tour.id} />
      ))}
    </div>
  );
}
