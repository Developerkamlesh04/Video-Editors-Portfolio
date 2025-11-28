import React from "react";
import SEO from "../components/SEO";
import ContactSection from "../home/ContactSection";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact for projects and collaborations"
      />
      <ContactSection />
    </>
  );
}
