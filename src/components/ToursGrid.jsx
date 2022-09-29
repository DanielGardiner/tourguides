import useGetTours from "../hooks/useGetTours";
import Card from "./Card";

export default function ToursGrid({ count = null }) {
  const { data: _tours } = useGetTours({ suspense: true });

  const tours = count === null ? _tours : _tours.slice(0, count)

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {tours?.map((tour) => (
        <Card tour={tour} key={tour.id} />
      ))}
    </div>
  );
}
