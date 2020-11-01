import React from "react";
import AboutFeaturesSection from "./../components/AboutFeaturesSection";
import StatsSection from "./../components/StatsSection";
import TeamBiosSection from "./../components/TeamBiosSection";
import CtaSection from "./../components/CtaSection";
import { useRouter } from "./../util/router.js";


// data
import { aboutPageData } from '../util/cms';

// ? AboutFeaturesSection data
const mainData = aboutPageData.aboutPage.main;
const featuresData = aboutPageData.aboutPage.features;

// ? bios data
const bios = aboutPageData.aboutPage.bios.person1;

// ? call to action ( cta ) data
const cta = aboutPageData.aboutPage.cta;

// ? stats data
const stats = aboutPageData.aboutPage.stats;


function AboutPage(props) {
  const router = useRouter();

  return (
    <>
      <AboutFeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title={mainData.title}
        subtitle=""
        items={featuresData}
      />
      
      {/* <HeroSection2
        bg="white"
        textColor="dark"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      /> */}
      <StatsSection
        bg="primary4"
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={stats.bgImageOpacity}
      />
      <TeamBiosSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title={bios.title}
        subtitle=""
        items={bios}
      />
      <CtaSection
        bg="primary4"
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.button}
        buttonColor="primary2"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default AboutPage;
