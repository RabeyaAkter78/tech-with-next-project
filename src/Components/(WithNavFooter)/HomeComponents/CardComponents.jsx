import { AllImages } from "@/assets/AllImages";
import { Card, Col, ConfigProvider, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import { IoIosDesktop } from "react-icons/io";
import { ImDatabase } from "react-icons/im";
import { FaChartPie } from "react-icons/fa";
function CardComponents() {
  return (
    <div className="">
      <div className="w-full border-0 border-b-2 justify-between items-center">
        <ConfigProvider
          theme={{
            token: {},

            components: {
              Card: {
                colorTextDescription: "rgb(54,53,53)",
                colorTextHeading: "rgb(0,0,0)",
                fontSize: 15,
                marginXS: 0,
                boxShadowCard: "    0",
                boxShadowTertiary: "    0",
                fontSizeLG: 25,
              },
            },
          }}
        >
          <Row gutter={[48, 48]} justify="center" className="my-20">
            <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
              <Card
                bordered={false}
                style={{
                  textAlign: "center",
                }}
                cover={<FaChartPie className="w-5 h-10 text-blue-500" />}
              >
                <Meta
                  title="High Performance"
                  description="Elevate your game with high-performance technology. Enjoy seamless, efficient and powerful experiences."
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
              <Card
                bordered={false}
                style={{
                  textAlign: "center",
                }}
                cover={<IoIosDesktop className="w-5 h-10 text-blue-500" />}
              >
                <Meta
                  title="Flat Design"
                  description="Simplify your aesthetic with flat design. Clean, modern, and minimal design elements for a fresh look."
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={12} lg={8} xl={8} xxl={8}>
              <Card
                bordered={false}
                style={{
                  textAlign: "center",
                }}
                cover={<ImDatabase className="w-5 h-10 text-blue-500" />}
              >
                <Meta
                  title="Simplified Workflow"
                  description="Streamline your work with our intuitive and efficient workflow solution. Get more done, faster and with ease."
                />
              </Card>
            </Col>
          </Row>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default CardComponents;
