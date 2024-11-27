import React from "react";
import { Banner, Benefits, Blogs, Events, RunningClub, RunningCommunity, Team, Tutorial } from "../../../components";
import { ContactUsPage } from "../ContactUsPage";

const LandingPage = () => {
  return (
    <div>

      <Banner />
      <RunningCommunity />
      <Tutorial />
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
