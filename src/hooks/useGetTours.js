import { useQuery } from "react-query";
import { endpoints } from "../constants";

const url = endpoints.getTours;

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

const getTours = async () => {
  // await sleep(4000);
  const response = await fetch(url, {
    method: "GET",
  });
  const tours = await response.json();
  return tours;
};

export default function useGetUsers(options) {
  return useQuery(["tours"], getTours, options);
}
