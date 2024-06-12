import React from "react";
import Main from "./main";
import Header from "../header";
import Footer from "../Footer";
// import CounterSection from "./countersection";
import TabsRender from "../tabs/Tabs";

const NosSalle = () => {
  return (
    <>
      <Header />
      <div className="mt-20">
        <TabsRender />
      </div>
      {/* <Main /> */}

      {/* <CounterSection /> */}
      <Footer />
    </>
  );
};

export default NosSalle;
