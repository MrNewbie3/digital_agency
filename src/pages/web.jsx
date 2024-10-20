import React from "react";
import Templates from "../components/templates/header";
import Nav from "../components/navbar";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import Maps from "../components/maps";
import Footer from "../components/footer";
import WebFeatures from "../components/webFeatures";
import WebStack from "../components/webStack";
import FaQ from "../components/faq";

export default function WebDevelopment() {
  return (
    <>
      <Nav />
      <div className="px-24 bg-white lg:mt-0">
        <Templates
          title={"Apa itu Website Development?"}
          text={
            "A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework of a website. Wireframes are created for the purpose of arranging elements to best accomplish a particular purpose."
          }
          image={"./assets/web.png"}
        >
          <HiOutlineSpeakerphone className="text-blue-main text-2xl" />
        </Templates>
        <WebFeatures />
        <WebStack />
        <FaQ />
        <Maps />
      </div>
      <Footer />
    </>
  );
}
