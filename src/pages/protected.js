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
    props: {},
  };
}

export default function ProtectedPage({ tours }) {
  return (
    <Layout>
      <h1>Protected Page</h1>
    </Layout>
  );
}
