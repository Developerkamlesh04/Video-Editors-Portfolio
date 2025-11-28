import React from "react";
import SEO from "../components/SEO";
import Hero from "../home/Hero";
import WorkSection from "../home/WorkSection";
import ContactSection from "../home/ContactSection";
import ServicesSection from "../home/ServicesSection";
import AboutSection from "../home/AboutSection";
import Testimonials from "../home/Testimonials";
import constants from "../utils/constants";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description={constants?.SITE_DESCRIPTION || "Welcome to our portfolio"}
      />
      <Hero />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <Testimonials />
      <ContactSection />
    </>
  );
}
