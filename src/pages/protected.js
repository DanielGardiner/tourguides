import { getSession } from "next-auth/react";
import Layout from "../components/Layout";

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session
    },
  };
}

export default function ProtectedPage({ tours, session }) {
  return (
    <Layout session={session}>
      <h1>Protected Page</h1>
    </Layout>
  );
}
