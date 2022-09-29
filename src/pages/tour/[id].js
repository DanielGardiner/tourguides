import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import useGetTour from "../../hooks/useGetTour";
import LoadingSpinner from "../../components/LoadingSpinner";
import Tour from "../../components/Tour";
import { Suspense } from "react";

export default function TourPage() {
  const { query, isReady } = useRouter();
  const { id } = query;

  return <>{isReady ? <Tour tourId={id} /> : <LoadingSpinner />}</>;
}
