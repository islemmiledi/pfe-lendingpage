import React from "react";

import Main from "./main";
import FooterS from "../FooterS";
import Cont from "./cont";
import ContactDetails from "./contactdetails";
import HeaderSalle from "../headersalle";

const Contact = () => {
  return (
    <>
      <HeaderSalle />
      <Cont />
      <ContactDetails />

      <Main />
      <FooterS />
    </>
  );
};

export default Contact;
