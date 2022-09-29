import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { endpoints } from "../constants";

const url = endpoints.session;

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

export default function useGetSession({
  required = false,
  redirectTo = "/",
  ...rest
} = {}) {
  const router = useRouter();

  return useQuery(["session"], getSession, {
    onSettled: (data) => {
      if (required && data === null) {
        router.push(redirectTo);
      }
      return true;
    },
    ...rest,
  });
}
