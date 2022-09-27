import { useQuery } from "react-query";
import { endpoints } from "../constants";

const url = endpoints.session

const getSession = async () => {
  const response = await fetch(url, {
    method: "GET",
  });
  const session = await response.json();
  if (Object.keys(session).length) {
    return session;
  }
  return null;
};

export default function useGetSession(options) {
  return useQuery(["session"], getSession, options);
}
