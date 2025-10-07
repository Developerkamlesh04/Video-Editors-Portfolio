import React from "react";
import SEO from "../components/SEO";
import WorkSection from "../home/WorkSection";



export default function Work() {
  return (
    <>
      <SEO title="Work" description="Portfolio and selected projects" />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-6">Portfolio</h1>
        <WorkSection />
      </div>
    </>
  );
}
