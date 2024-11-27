import React from "react";
import { Banner, Benefits, Blogs, Events, RunningClub, Team, } from "../../../components";
import { ContactUsPage } from "../ContactUsPage";

const LandingPage = () => {
  return (
    <div>

      <Banner />
      <Benefits />
      <Events />
      <Team />
      <RunningClub />
      <Blogs />
      <ContactUsPage />
    </div>
  );
};

export default LandingPage;
