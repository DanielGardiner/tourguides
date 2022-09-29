import { useQuery } from "react-query";
import { endpoints } from "../constants";

const url = endpoints.getTour;

const getTour = async (tourId) => {
  const response = await fetch(url.replace(":id", tourId), {
    method: "GET",
  });
  const tour = await response.json();
  return tour;
};

export default function useGetUser(tourId, options) {
  return useQuery(["tour", tourId], () => getTour(tourId), options);
}
