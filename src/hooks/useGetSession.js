import { useQuery } from "react-query";

const getSession = async () => {
  const response = await fetch(`/api/auth/session`, {
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
