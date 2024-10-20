import React from "react";
import Nav from "../components/navbar";
import Business from "../components/business";
import Footer from "../components/footer";
import Vision from "../components/vision";
import CoreValues from "../components/corevalue";
import TeamMembers from "../components/members";
import Maps from "../components/maps";
import Portfolio from "../components/portfolio";
import ExplorePortfolio from "../components/exploreUs";
import WebDevAboutUs from "../components/webDevAboutUs";

export default function AboutComps() {
  return (
    <>
      <Nav />
      <div className="bg-white min-h-screen text-primary-grey flex flex-col gap-10">
        <Business />
        <Vision />
        <CoreValues />
        <TeamMembers />
        <ExplorePortfolio />
        <WebDevAboutUs />
        <Portfolio />
        <Maps />
      </div>
      <Footer />
    </>
  );
}
