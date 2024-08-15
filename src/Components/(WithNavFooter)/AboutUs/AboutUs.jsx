/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import React from "react";
import CardComponents from "../HomeComponents/CardComponents";

const AboutUs = () => {
  return (
    <div className="container mx-auto mt-36 mb-20">
      <SectionTitle Heading={"About Us"}></SectionTitle>
      <div className="mt-24 mb-20 text-center ">
        <p>
          Technology has revolutionized the way we live and work, providing us
          with new and innovative ways to solve problems, improve efficiency,
          and make our lives easier. From artificial intelligence to cloud
          computing, the rapid advancements in technology are changing the way
          we interact with the world around us. As we continue to push the
          boundaries of what is possible, we can expect new and exciting
          developments that will further shape the future of our world. Whether
          it's in healthcare, education, or any other industry, technology has
          the power to make a positive impact and create a better future for all
          of us.
        </p>
      </div>
      <div>
        <CardComponents></CardComponents>
      </div>
    </div>
  );
};

export default AboutUs;
