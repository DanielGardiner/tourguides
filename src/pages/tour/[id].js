import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import useGetTour from "../../hooks/useGetTour";
import LoadingSpinner from "../../components/LoadingSpinner";
import Tour from "../../components/Tour";
import { Suspense } from "react";

export default function TourPage() {
  const { query } = useRouter();
  const { id } = query;

  if(!id) return <LoadingSpinner />

  return <Tour tourId={id} />
}
