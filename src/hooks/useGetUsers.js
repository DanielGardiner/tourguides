import { useQuery } from "react-query";

const getUsers = async () => {
  const response = await fetch("/api/user", {
    method: "GET",
  });
  const users = await response.json();
  return users;
};

export default function useGetUsers(options) {
  return useQuery(["users"], getUsers, options);
}
