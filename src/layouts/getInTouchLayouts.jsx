import React from "react";
import Nav from "../components/navbar";
import Maps from "../components/maps";
import Footer from "../components/footer";
import GetInTouchComps from "../components/getInTouchComps";

export default function GetInTouchLayouts() {
  return (
    <>
      <Nav />
      <GetInTouchComps />
      <Maps />
      <Footer />
    </>
  );
}
