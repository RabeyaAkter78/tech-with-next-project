/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import React from "react";
import { Collapse, ConfigProvider } from "antd";
import QuickSupport from "../Features/QuickSupport";

function Faq() {
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  const items = [
    {
      key: "1",
      label: "How to setup the theme?",
      children: (
        <p>
          Get your website up and running in no time with our user-friendly
          setup theme. Experience seamless customization options and enjoy a
          stress-free launch with our step-by-step guide. Upgrade your online
          presence with a professional look that's tailored to your brand.
        </p>
      ),
    },
    {
      key: "2",
      label: "Can I change plan or cancel at any time?",
      children: (
        <p>
          We understand that plans can change, and that's why we offer a
          flexible cancelation policy for our customers. If you need to cancel
          your plan, please contact our support team for assistance. We'll do
          our best to make the process as smooth and hassle-free as possible.
        </p>
      ),
    },
    {
      key: "3",
      label: "How to access through cloud?",
      children: (
        <p>
          Access your data anytime, anywhere with our cloud-based solution. No
          more limitations, enjoy seamless access to your information from any
          device with internet connection. Say goodbye to traditional setup,
          embrace the future of tech with us.
        </p>
      ),
    },
    {
      key: "4",
      label: "Can I manage multiple task?",
      children: (
        <p>
          Maximize your productivity and efficiency with our app's ability to
          handle multiple tasks seamlessly. Say goodbye to juggling between
          multiple windows and programs and hello to effortless multitasking.
        </p>
      ),
    },
    {
      key: "5",
      label: "How can I change my password?",
      children: (
        <p>
          Simplify your life with our easy-to-use password change feature.
          Securely update your password in just a few clicks, ensuring maximum
          protection for your data and peace of mind for you. Try it now!
        </p>
      ),
    },
    {
      key: "6",
      label: "How to manage my account?",
      children: (
        <p>
          Manage all your accounts in one place with our streamlined and secure
          account management system. Easily update personal information, change
          passwords, and track account activity. Simplify your life and stay in
          control with our user-friendly platform.
        </p>
      ),
    },
  ];
  return (
    <div className="container mx-auto">
      <SectionTitle Heading={"Frequently Asked Questions"}></SectionTitle>
      <ConfigProvider
        theme={{
          token: {},

          components: {
            Collapse: {
              borderRadiusLG: 0,
            },
          },
        }}
      >
        <div className="p-2">
          <Collapse accordion items={items} />
        </div>
        <div className="p-2">
          <QuickSupport></QuickSupport>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default Faq;
