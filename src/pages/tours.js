import { Suspense } from "react";
import Layout from "../components/Layout";
import LoadingSpinner from "../components/LoadingSpinner";
import ToursGrid from "../components/ToursGrid";

export default function ToursPage() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <ToursGrid />
      </Suspense>
    </Layout>
  );
}
