import React from "react";
import { Banner, Benefits, Blogs, Events, ExampleComp, Footer, Team, Tutorial } from "../../../components";

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
      <Blogs />
      <Footer />
    </div>
  );
};

export default LandingPage;
