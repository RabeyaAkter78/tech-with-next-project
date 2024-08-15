import { AllImages } from "@/assets/AllImages";
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import { Card, Col, ConfigProvider, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="bg-neutral-50 py-32 p-5 overflow-x-hidden">
      <div className="container mx-auto ">
        <SectionTitle Heading={"Key Features and Benefits"}></SectionTitle>
        <div className="">
          <ConfigProvider
            theme={{
              token: {},

              components: {
                Card: {
                  colorTextDescription: "rgb(54,53,53)",
                  colorTextHeading: "rgb(0,0,0)",
                  headerFontSize: 30,
                  headerFontSizeSM: 30,
                  fontSizeLG: 20,
                  boxShadowCard:
                    "      0 1px 2px -3px rgba(0, 0, 0, 0.16),      0 3px 6px 0 rgba(0, 0, 0, 0.12),      0 5px 12px 4px rgba(0, 0, 0, 0.09)    ",
                },
              },
            }}
          >
            <Row gutter={[48, 48]} justify="center" className="my-20">
              <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
                <Card
                  hoverable
                  cover={
                    <Image alt="feature images" src={AllImages.feature1} />
                  }
                >
                  <Meta title="Modern Design" />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
                <Card
                  hoverable
                  cover={
                    <Image alt="feature images" src={AllImages.feature2} />
                  }
                >
                  <Meta title="Clean and Elegant" />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
                <Card
                  hoverable
                  cover={
                    <Image alt="feature images" src={AllImages.feature3} />
                  }
                >
                  <Meta title="Great Support" />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
                <Card
                  hoverable
                  cover={
                    <Image alt="feature images" src={AllImages.feature4} />
                  }
                >
                  <Meta title="Easy to customise" />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
                <Card
                  hoverable
                  cover={
                    <Image alt="feature images" src={AllImages.feature5} />
                  }
                >
                  <Meta title="Unlimited Features" />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
                <Card
                  hoverable
                  cover={
                    <Image alt="feature images" src={AllImages.feature6} />
                  }
                >
                  <Meta title="Advanced Options" />
                </Card>
              </Col>
            </Row>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default Features;
