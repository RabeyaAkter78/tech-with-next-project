import { AllImages } from "@/assets/AllImages";
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import { Button, Card, Col, ConfigProvider, Image, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
function Pricing() {
  return (
    <div className="container mx-auto">
      <SectionTitle Heading={"Choose a plan to fit your needs"}></SectionTitle>
      <div className="">
        <ConfigProvider
          theme={{
            token: {},

            components: {
              Card: {
                colorTextDescription: "rgb(112,109,109)",
                colorTextHeading: "rgb(57,56,56)",
                fontHeight: 0,
                fontSize: 28,
                marginXS: 0,
                headerFontSize: 30,
                headerFontSizeSM: 30,
                fontSizeLG: 0,
                boxShadowCard:
                  "      0 1px 2px -3px rgba(0, 0, 0, 0.16),      0 3px 6px 0 rgba(0, 0, 0, 0.12),      0 5px 12px 4px rgba(0, 0, 0, 0.09)    ",
                borderRadiusLG: 0,
              },
            },
          }}
        >
          <div className="border-0 border-b-2 ">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-center items-center my-20 p-5">
              <div>
                <Card title="Basic" className="md:w-96 text-center ">
                  <h1>£59.99</h1>
                  <p>5 GB of space</p>
                  <p>5 user</p>
                  <p>24/7 support</p>
                  <p>Safe, reliable backup</p>
                  <p>Access from anywhere</p>
                  <Button type="primary">
                    <FaTelegramPlane className="text-white h-10 w-5" /> Get
                    Started
                  </Button>
                </Card>
              </div>
              <div className="-mt-5">
                <Card title="Basic" className="md:w-96 text-center">
                  <h1>£99.99</h1>
                  <p>Unlimited space</p>
                  <p>15 user</p>
                  <p>24/7 support</p>
                  <p>Safe, reliable backup</p>
                  <p>Access from anywhere</p>
                  <Button type="primary">
                    <FaTelegramPlane className="text-white h-10 w-5" /> Get
                    Started
                  </Button>
                </Card>
              </div>
              <div>
                <Card title="Basic" className="md:w-96 text-center">
                  <h1>£29.99</h1>
                  <p>1 GB of space</p>
                  <p>1 user</p>
                  <p>24/7 support</p>
                  <p>Safe, reliable backup</p>
                  <p>Access from anywhere</p>
                  <Button type="primary">
                    <FaTelegramPlane className="text-white h-10 w-5" /> Get
                    Started
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default Pricing;
