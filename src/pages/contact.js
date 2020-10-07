import React from "react";
import ContactSection from "./../components/ContactSection";

// data
import { contactPageData } from '../util/cms';
const data = contactPageData.main;


function ContactPage() {
  return (
    <ContactSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title={data.title}
      subtitle={data.subtitle}
      buttonText={data.button}
      buttonColor="primary"
      showNameField={true}
      showEmailField={true}
      inputSize="md"
    />
  );
}

export default ContactPage;
