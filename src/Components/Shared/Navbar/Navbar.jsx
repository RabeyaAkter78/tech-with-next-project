"use client";

import { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { Button, ConfigProvider, Drawer, Tooltip } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { AllImages } from "@/assets/AllImages";
const NavBar = () => {
  const { data: session } = useSession();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const path = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const labels = [
    { name: "Features", link: "/features" },
    { name: "About Us", link: "/about-us" },
    { name: "How it works", link: "/how-it-works" },
    { name: "FAQ", link: "/faq" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact-us" },
  ];

  const handleMobileMenuClick = () => {
    setDrawerVisible(!drawerVisible);
  };

  const select = (index) => {
    setSelected(index);
    if (isMobile) {
      setDrawerVisible(false);
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBorderColor: "rgb(255,255,255)",
            defaultHoverBorderColor: "rgb(255,255,255)",
            defaultHoverColor: "rgb(0,0,0)",
            defaultShadow: "0",
          },
          Drawer: {
            colorText: "rgb(0,0,0)",
          },
          Button: {
            contentFontSize: 20,
            paddingBlock: 10,
            borderRadius: 2,
          },
        },
      }}
    >
      <div className="fixed top-0 left-0 w-[100%] z-40 bg-slate-100">
        <div className="container mx-auto flex items-center justify-center py-4 px-6 lg:px-8">
          <div className="flex items-center w-full">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                className="lg:h-11 h-16 w-auto rounded-full"
              />
            </Link>

            <div className="lg:hidden ml-auto">
              <Button
                icon={<RxHamburgerMenu />}
                onClick={handleMobileMenuClick}
              />
            </div>

            <div className="hidden lg:flex ml-auto space-x-4">
              {labels.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button
                    className={`px-4 font-medium text-lg ${
                      selected === index
                        ? "border-0 border-b-2 border-green-700"
                        : ""
                    }`}
                    onClick={() => select(index)}
                  >
                    {item.name}
                  </button>
                </Link>
              ))}
              {/* Sign in sign out */}
              {!session ? (
                <Link href="/sign-in">
                  <Button className="px-4 font-medium text-lg">SignIn</Button>
                </Link>
              ) : (
                <Tooltip title={session.user?.name}>
                  <div className="flex items-center space-x-2">
                    <Image
                      height={5}
                      width={5}
                      src={session.user?.image || AllImages.UserImg}
                      alt="user Image"
                      className="h-10 w-10 border border-neutral-500 rounded-full cursor-pointer"
                      onClick={() => signOut()}
                    />
                    <span
                      className="font-medium text-lg cursor-pointer"
                      onClick={() => signOut()}
                    >
                      Logout
                    </span>
                  </div>
                </Tooltip>
              )}

              {/* {!session ? (
                <Link href="/sign-in">
                  <button className="px-4 font-medium text-lg">SignIn</button>
                </Link>
              ) : (
                <Tooltip title={session.user.name}>
                  <div className="flex items-center space-x-2">
                    <Image
                      src={session.user.image || userImage}
                      alt="User Image"
                      className="h-10 w-10 rounded-full cursor-pointer"
                      onClick={() => signOut()}
                    />
                    <span className="font-medium text-lg cursor-pointer" onClick={() => signOut()}>
                      Logout
                    </span>
                  </div>
                </Tooltip>
              )} */}
            </div>
          </div>
        </div>

        {/* Drawer component */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center space-y-2 w-full">
              {labels.map((item, index) => (
                <Link href={item.link} key={index}>
                  <button
                    className={`px-4 font-medium text-lg ${
                      selected === index
                        ? "border-0 border-b-2 border-green-700"
                        : "border-b"
                    }`}
                    onClick={() => select(index)}
                  >
                    {item.name}
                  </button>
                </Link>
              ))}
              {!session ? (
                <Link href="sign-in">
                  <Button className="px-4 font-medium text-lg">SignIn</Button>
                </Link>
              ) : (
                <Tooltip title={session.user?.name}>
                  <div className="flex items-center space-x-2">
                    <Image
                      height={5}
                      width={5}
                      src={session.user?.image ||AllImages.UserImg}
                      alt="User Image"
                      className="h-10 w-10 border border-neutral-500 rounded-full cursor-pointer"
                      onClick={() => signOut()}
                    />
                    <span
                      className="font-medium text-lg cursor-pointer"
                      onClick={() => signOut()}
                    >
                      LogOut
                    </span>
                  </div>
                </Tooltip>
              )}
            </div>
          </div>
        </Drawer>
      </div>
    </ConfigProvider>
  );
};

export default NavBar;
