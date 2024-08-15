import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import { Button } from "antd";
import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

function HowItWorks() {
  return (
    <div className="my-32 py-10 bg-fixed bg-parallax bg-cover ">
      <div className="container mx-auto text-white">
        <SectionTitle Heading={"How it works"}></SectionTitle>
        <div className="flex justify-center items-center h-96">
          <Button
            type="link"
            href="https://youtu.be/tUP5S4YdEJo?si=oUhfasmDj1k5eNiP"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
            <IoPlayCircleOutline className="h-32 w-32 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
