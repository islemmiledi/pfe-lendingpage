// src/components/AboutUs/aboutus.js
import React from "react";
import Main from "./main"; // Make sure the import matches the filename and path
import Half from "./main1"; // Make sure the import matches the filename and path
import HeaderSalle from "../headersalle";
import FooterS from "../FooterS";

const AboutUs = () => {
  return (
    <>
      <HeaderSalle />
      <Main />
      <Half />
      <FooterS />
    </>
  );
};

export default AboutUs;
