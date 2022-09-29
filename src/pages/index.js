import Intro from "./../components/Intro";
import Head from "next/head";
import Layout from "../components/Layout";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tour guides</title>
        <meta name="description" content="Fun tours" />
        <link rel="icon" href="/icons/travel-icon.svg" />
      </Head>
      <Intro />
    </>
  );
}
