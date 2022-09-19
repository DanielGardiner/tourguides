import { getSession } from "next-auth/react";

async function redirectIfNoSession({session, redirectDestination = '/'}) {
  if (!session) {
    return { redirect: { destination: redirectDestination } };
  }
}

export default redirectIfNoSession;