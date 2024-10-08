import { AllImages } from "@/assets/AllImages";
import { Button, Carousel, ConfigProvider } from "antd";
import Image from "next/image";
import React from "react";
// import img from "/public/bg-hero.jpg";

function Banner() {
  return (
    <div className="relative ">
      <div className="p-2">
        <div className="">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#00b96b",
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
                  borderRadius: 2,
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

                <div className="relative p-5 lg:w-[70%] text-start py-32 lg:p-52">
                  <h1 className="lg:text-5xl md:text-4xl text-xl font-bold md:mb-10">
                    Web and mobile payment built for developers
                  </h1>
                  <p className="mb-10">
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
                  className="absolute top-0 left-0 w-full h-screen object-cover"
                  src={AllImages.heroImg}
                  alt="Background img"
                  width={0}
                  height={0}
                />

                <div className="relative p-5 lg:w-[70%] text-start py-32 lg:p-52">
                  <h1 className="lg:text-5xl md:text-4xl text-xl font-bold md:mb-10">
                    Web and mobile payment built for developers
                  </h1>
                  <p className="mb-10">
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
                  className="absolute top-0 left-0 w-full h-screen object-cover"
                  src={AllImages.heroImg}
                  alt="Background img"
                  width={0}
                  height={0}
                />

                <div className="relative p-5 lg:w-[70%] text-start py-32 lg:p-52">
                  <h1 className="lg:text-5xl md:text-4xl text-xl font-bold md:mb-10">
                    Web and mobile payment built for developers
                  </h1>
                  <p className="mb-10">
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
            </Carousel>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}

export default Banner;
