import { AllImages } from "@/assets/AllImages";
import { Button, Carousel, ConfigProvider } from "antd";
import Image from "next/image";
import React from "react";
// import img from "/public/bg-hero.jpg";

function Banner() {
  return (
    <div className="relative container mx-auto ">
      <div className=" w-full">
        <div className="container mx-auto ">
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#00b96b",
                borderRadius: 2,

                // Alias Token
                colorBgContainer: "#f6ffed",
              },

              components: {
                Carousel: {
                  marginXXS: 10,
                  fontSize: 14,
                  colorBgContainer: "rgb(30,28,28)",
                  colorText: "rgba(21,21,21,0.88)",
                },
                Button: {
                  contentFontSize: 20,
                  paddingBlock: 10,
                  borderRadius: 5,
                },
              },
            }}
          >
            <Carousel>
              <div className="relative w-full h-screen flex justify-center items-center">
                <Image
                  className="absolute top-0 left-0 w-full h-screen object-cover"
                  src={AllImages.heroImg}
                  alt="Background img"
                  width={0}
                  height={0}
                />

                <div className="relative p-5 lg:w-[75%] text-start py-32 lg:p-52">
                  <h1 className="lg:text-5xl md:text-4xl text-xl font-bold mb-4">
                    Web and mobile payment built for developers
                  </h1>
                  <p className="mb-6">
                    Our innovative web and mobile payment solutions make
                    transactions fast, secure, and effortless for both you and
                    your customers. Say goodbye to the hassle of traditional
                    payment methods and embrace the future of seamless payments.
                  </p>
                  <div className="flex gap-4 items-center justify-center md:justify-start ">
                    <Button type="primary">Learn More</Button>
                    <Button type="primary">Join Us</Button>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-screen flex justify-center items-center">
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={AllImages.heroImg}
                  alt="Background img"
                  width={0}
                  height={0}
                />

                <div className="relative text-center py-32 lg:p-52">
                  <h1 className="lg:text-6xl md:text-4xl text-xl font-bold mb-4">
                    Web and mobile payment built for developers
                  </h1>
                  <p className="mb-6">
                    Our innovative web and mobile payment solutions make
                    transactions fast, secure, and effortless for both you and
                    your customers. Say goodbye to the hassle of traditional
                    payment methods and embrace the future of seamless payments.
                  </p>
                  <Button type="primary">Learn More</Button>
                  <Button type="primary" className="ml-2">
                    Join Us
                  </Button>
                </div>
              </div>
              <div className="relative w-full h-screen flex justify-center items-center">
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={AllImages.heroImg}
                  alt="Background img"
                  width={0}
                  height={0}
                />

                <div className="relative text-center py-32 lg:p-52">
                  <h1 className="lg:text-6xl md:text-4xl text-xl font-bold mb-4">
                    Web and mobile payment built for developers
                  </h1>
                  <p className="mb-6">
                    Our innovative web and mobile payment solutions make
                    transactions fast, secure, and effortless for both you and
                    your customers. Say goodbye to the hassle of traditional
                    payment methods and embrace the future of seamless payments.
                  </p>
                  <Button type="primary">Learn More</Button>
                  <Button type="primary" className="ml-2">
                    Join Us
                  </Button>
                </div>
              </div>
            </Carousel>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}

export default Banner;
