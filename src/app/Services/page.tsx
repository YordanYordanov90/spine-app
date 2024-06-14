import React from "react";
import AboutUsH1 from "../components/AboutUsH1";
import Logos from '../components/Logos';
import FAQ from '../components/FAQ';

const page = () => {
  return (
    <>
      <AboutUsH1
        heading="Our services make your Business easier"
        description="At DigitalBoostPro, we're committed to delivering exceptional Digital Product solutions tailored to meet your unique needs. Our diverse range of services is designed to problems solve, optimize processes, etc."
      />
      <Logos />
      <FAQ />
    </>
  );
};

export default page;
