import { useQuery } from "react-query";

const getTour = async (tourId) => {
  const response = await fetch(`/api/tour/${tourId}`, {
    method: "GET",
  });
  const tour = await response.json();
  return tour;
};

export default function useGetUser(tourId, options) {
  return useQuery(["tour", tourId], getTour, options);
}
