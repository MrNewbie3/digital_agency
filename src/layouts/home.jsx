import React from "react";
import Nav from "../components/navbar";
import Hero from "../components/hero";
import Business from "../components/business";
import Customers from "../components/customers";
import Features from "../components/features";
import Portfolio from "../components/portfolio";
import Maps from "../components/maps";
import Footer from "../components/footer";

function HomeComps() {
  return (
    <>
      <Nav />
      <div className="bg-white min-h-screen text-primary-text">
        <Hero />
        <Business />
        <Customers />
        <Features />
        <Portfolio />
        <Maps />
      </div>
      <Footer />
    </>
  );
}

export default HomeComps;
