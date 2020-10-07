import React from "react";
import VideoSection from "./../components/VideoSection";
import HeroSection2 from "./../components/HeroSection2";
import FeaturesSection2 from "./../components/FeaturesSection2";
import ContactSection from "./../components/ContactSection";


// data
import { singlePageData } from '../util/cms'
const main = singlePageData.main;
const hero2 = singlePageData.hero2;
const features2 = singlePageData.features2;
const comments = singlePageData.comments;

function SinglePage(props) {
  return (
    <>
      <VideoSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title={main.title}
        subtitle={main.subtitle}
        embedUrl={main.video}
      />
      <HeroSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title={hero2.title}
        subtitle={hero2.subtitle}
      />
      <FeaturesSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image={features2.image}
      />
      <ContactSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title={comments.title}
        subtitle={comments.subtitle}
        buttonText={comments.button}
        buttonColor={comments.buttonColor}
        showNameField={false}
        showEmailField={false}
        inputSize="md"
      />
    </>
  );
}

export default SinglePage;
