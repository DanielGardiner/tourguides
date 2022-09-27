import { Suspense } from "react";
import Layout from "../components/Layout";
import ToursGrid from "../components/ToursGrid";

export default function ToursPage() {
  return (
    <Layout>
        <ToursGrid />
    </Layout>
  );
}
