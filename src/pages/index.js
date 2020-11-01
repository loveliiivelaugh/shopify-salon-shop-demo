import React from "react";
import HeroSection from "./../components/HeroSection";
import HeroSection2 from "./../components/HeroSection2";
import CtaSection from "./../components/CtaSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import FeaturesSection from "./../components/FeaturesSection";
import StatsSection from "./../components/StatsSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import { useRouter } from "./../util/router.js";

// data
import { indexPageData } from '../util/cms';

const data = indexPageData

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        bg="primary1"
        textColor="light"
        size="lg"
        bgImage={data.homePage.banner.image}
        bgImageOpacity={1}
        // title="We Create And Renovate Hair Style Trends"
        title={data.homePage.banner.title}
        subtitle={data.homePage.banner.subtitle}
        buttonText={data.homePage.banner.button}
        buttonColor="primary4"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <HeroSection2
        bg="primary4"
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title={data.homePage.about.title}
        subtitle={data.homePage.about.subtitle}
        button={data.homePage.about.button}
      />
      <CtaSection
        bg="primary3"
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title={data.homePage.cta.title}
        subtitle={data.homePage.cta.subtitle}
        buttonText={data.homePage.cta.button}
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <ContentCardsSection
        bg="primary1"
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title={data.homePage.services.title}
        subtitle={data.homePage.services.subtitle}
      />
      {/* <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      /> */}
      <StatsSection
        bg="primary4"
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
      />
      <TestimonialsSection
        bg="primary1"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      <NewsletterSection
        bg="primary4"
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title={data.homePage.newsletter.title}
        subtitle={data.homePage.newsletter.subtitle}
        buttonText={data.homePage.newsletter.buttonText}
        buttonColor="primary2"
        inputPlaceholder={data.homePage.newsletter.inputPlaceholder}
        subscribedMessage={data.homePage.newsletter.subscribedMessage}
      />
    </>
  );
}

export default IndexPage;
