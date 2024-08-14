import { AllImages } from "@/assets/AllImages";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";

function CardComponents() {
  return (
    <div className="">
      <div className="  ">
        <Row gutter={[4, 4]} justify="center" className="my-20">
          <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
            <Card
              hoverable
              cover={<Image alt="example" src={AllImages.card1} />}
            >
              <Meta
                title="High Performance"
                description="Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences."
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
            <Card
              hoverable
              cover={<Image alt="example" src={AllImages.card2} />}
            >
              <Meta
                title="Flat Design"
                description="Simplify your aesthetic with flat design. Clean, modern, and minimal design elements for a fresh look."
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
            <Card
              hoverable
              cover={<Image alt="example" src={AllImages.card3} />}
            >
              <Meta
                title="Simplified Workflow"
                description="Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease."
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CardComponents;
