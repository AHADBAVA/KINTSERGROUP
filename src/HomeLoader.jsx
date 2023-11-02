import React from 'react';
import Milestone from './OurMileStone';
import HomeMain from './HomePage'
import HomeAboutUs from './HomeAbout';
import HomeWhereWe from './HomeWhereWe';
import HomeOurClients from './HomeOurClients';
import HomeCareersAtKinster from './HomeCareerKinster';
import HomeBusiness from './HomeBusiness';
import HomeScam from './HomeScam';
function HomeLoader() {
  return (
    <div>
      <HomeMain/>
      <Milestone />
      <HomeAboutUs/>
      <HomeWhereWe/>
      <HomeOurClients/>
      <HomeCareersAtKinster/>
      <HomeBusiness/>
      <HomeScam/>
    </div>
  );
}

export default HomeLoader;
