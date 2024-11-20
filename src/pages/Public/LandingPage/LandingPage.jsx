import React from "react";
import { ExampleComp } from "../../../components";

const LandingPage = () => {
  return (
    <div>
      <h2>This is the main landing page</h2>
      <ExampleComp />
      <Banner />
      <Tutorial />
      <Benefits />
      <Events />
      <Team />
      <Footer />
    </div>
  );
};

export default LandingPage;
