import React from "react";
import { Banner, Benefits, Blogs, Events, ExampleComp, Footer, JoinClub, RunningClub, RunningCommunity, Team, Tutorial } from "../../../components";

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
      <JoinClub />
    </div>
  );
};

export default LandingPage;
