import { getSession } from "next-auth/react";
import Layout from "../components/Layout";
import tourService from "../server/services/tour";

import useGetTours from "../hooks/useGetTours";

import useUpdateUser from "../hooks/useUpdateUser";
import { checkSession } from "../server/services/auth";

export async function getServerSideProps({ req, res }) {
  try {
    const session = await getSession({ req });

    const tours = await tourService.getTours();


    return {
      props: {
        session,
        tours,
      },
    };
  } catch (e) {
    console.error(e);

    // If error redirect user to homepage
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}

export default function ToursPage({ session, tours: initialTours }) {
  const { data: tours } = useGetTours({ initialTours });

  return (
    <Layout session={session}>
      <pre>
        {JSON.stringify(tours, null, 2)}
      </pre>
    </Layout>
  );
}
