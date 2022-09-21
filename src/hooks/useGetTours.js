import { useQuery } from "react-query";

const getTours = async () => {
  const response = await fetch("/api/tour", {
    method: "GET",
  });
  const tours = await response.json();
  return tours;
};

export default function useGetUsers(options) {
  return useQuery(["tours"], getTours, options);
}
