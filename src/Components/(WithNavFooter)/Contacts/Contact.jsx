"use client";
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="container mx-auto my-32">
      <SectionTitle Heading={"Get in Touch"}></SectionTitle>
      <div className=" my-32">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default Contact;
