import { getSession } from "next-auth/react";
import Layout from "../../components/Layout";
import { checkNoSession } from "../../server/services/auth";

export async function getServerSideProps({ req, res }) {
  try {
    const session = await getSession({ req });
    checkNoSession({ session });

    return {
      props: {
        session,
      },
    };
  } catch (e) {
    console.error(e);

    return {
      redirect: {
        destination: "/",
      },
    };
  }
}
export default function VerifyPage({ tours, session }) {
  return (
    <Layout session={session}>
      <h1>Go look at your email</h1>
    </Layout>
  );
}
