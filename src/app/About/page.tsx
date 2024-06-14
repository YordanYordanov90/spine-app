import React from "react";
import AboutUsH1 from "../components/AboutUsH1";
import Logos from "../components/Logos";
import OutStory from "../components/OurStory";
import ChooseUs from "../components/ChooseUs";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <>
      <AboutUsH1
        heading="About Us"
        description="At DigitalBoostPro, we're not just a digital marketing agency;
        we're your strategic partner in navigating the dynamic
        landscape of online success."
      />
      <Logos />
      <OutStory />
      <ChooseUs />
      <ContactForm
        header="Get in Touch with DigitalBoostPro"
        location="Old Port Mouseio, Mykonos, Greece"
        phone="+10 (239) 555-0108"
        email="jessica.hanson@example.com"
      />
    </>
  );
};

export default page;
