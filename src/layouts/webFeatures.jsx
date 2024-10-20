import React, { useState } from "react";
import FeatureCard from "../components/templates/learnMoreCard";
import { useLocation } from "react-router-dom";
import FooterWebFeatures from "../components/footerWebFeatures";
import NavbarWebFeatures from "../components/navbarWebFeatures";

export default function WebFeaturesLayout() {
  const location = useLocation();
  const data = [
    {
      features: "Landing Page",
      description: "IC Digital offers attractive landing pages with features such as responsive design that adapts to various devices, simple and intuitive navigation, and speed optimisation for a smooth user experience.",
      children: [
        {
          title: "Simple & Responsive Design",
          description: "Performs perfectly on desktops, tablets and smartphones.",
        },
        {
          title: "Basic SEO Optimisation",
          description: "Simple SEO settings to increase visibility on search engines.",
        },
        {
          title: "Contact Form",
          description: "Features to collect information from visitors.",
        },
        {
          title: "Tombol Call-to-Action (CTA)",
          description: "Buttons that attract visitors to interact, such as 'Contact Us' or 'Register Now'.",
        },
        {
          title: "Hosting & Domain (1 Tahun)",
          description: "Free .com domain for 1 year as well as a basic hosting plan.",
        },
        {
          title: "Lightweight Animation",
          description: "Smooth transitions to enhance user experience.",
        },
      ],
    },
    {
      features: "Company Profile",
      description:
        "Service creates a professional, responsive website showcasing key company details like vision, services, portfolio, and contact information, designed to boost credibility and provide easy access for potential clients. Contains 5-10 Pages",
      children: [
        {
          title: "Homepage",
          description: "A stunning design to introduce a business/brand.",
        },
        {
          title: "About Us Page",
          description: "Share the company’s history and vision and mission.",
        },
        {
          title: "Project Gallery",
          description: "Display a portfolio of completed projects or products.",
        },
        {
          title: "Services",
          description: "Describe the services offered, with a full description.",
        },
        {
          title: "Simple & Responsive Design",
          description: "Customize the display on various devices.",
        },
        {
          title: "Business Email",
          description: "Make your company more professional with business email.",
        },
        {
          title: "Hosting & Domain",
          description: "Provides space to store applications online. Easy access to your app through a memorable domain address for 1 year.",
        },
        {
          title: "Social Media Integration",
          description: "Links to business social media accounts.",
        },
        {
          title: "Google Analytics",
          description: "Basic settings for tracking website performance.",
        },
        {
          title: "Contact",
          description: "Easily accessible forms or contact details.",
        },
        {
          title: "Basic SEO Optimisation",
          description: "Basic SEO settings to improve search rankings.",
        },
      ],
    },
    {
      features: "Advanced Development",
      description: "Develop simple web applications tailored to clients’ specific needs, such as reservation systems, inventory management, or internal business applications.",
      children: [
        {
          title: "Responsive Design",
          description: "The app will be optimized to perform well on various devices, including desktop and mobile.",
        },
        {
          title: "Database Terintegrasi",
          description: "Efficient and secure data storage to support application functions.",
        },
        {
          title: "Friendly User Interface",
          description: "Intuitive and easy-to-use interface design for better user experience.",
        },
        {
          title: "Safety Features",
          description: "Implementation of security features to protect sensitive data and prevent unauthorized access.",
        },
        {
          title: "Hosting dan Domain",
          description: "Provides space to store applications online. Easy access to your app through a memorable domain address for 1 year.",
        },
        {
          title: "API Integration",
          description: "Ability to connect with external services if required.",
        },
        {
          title: "Training and Support",
          description: "Provide basic training and post-launch technical support to ensure clients can operate the application properly.",
        },
        {
          title: "Free SSL",
          description: "Guarantee the security of data transmitted through the app.",
        },
        {
          title: "User Documentation",
          description: "Provide complete documentation on application usage and maintenance.",
        },
      ],
    },
  ];
  const currentPath = location.pathname
    .split("/")[2]
    .split("-") // Step 1: Split by hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Step 2: Capitalize first letter
    .join(" ");
  let index = null;

  data.map((value, i) => {
    if (value.features === currentPath) {
      return (index = i);
    }
  });

  return (
    <>
      <NavbarWebFeatures />
      <div className=" h-fit text-primary-text">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-main">{data[index].features}</h2>
          <p className="lg:text-lg mt-2 lg:max-w-2xl text-center text-primary-grey">{data[index].description}</p>
        </div>

        <div className="card-component flex flex-row flex-wrap gap-7 my-10 justify-center">
          {data[index].children.map((value, idx) => (
            <FeatureCard description={value.description} title={value.title} key={idx} />
          ))}
        </div>
      </div>
      <FooterWebFeatures />
    </>
  );
}
