import React from "react";
import FeaturesSection from "./../components/FeaturesSection";
import TestimonialsSection from "./../components/TestimonialsSection";


// data
import { servicesPageData } from '../util/cms'
const data = servicesPageData

function ServicesPage(props) {
  return (
    <>
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title={data.main.title}
        subtitle={data.main.subtitle}
        items={data.features}
      />
      <TestimonialsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
    </>
  );
}

export default ServicesPage;
