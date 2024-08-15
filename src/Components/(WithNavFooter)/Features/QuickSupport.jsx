/* eslint-disable react/no-unescaped-entities */
import { Button, ConfigProvider } from "antd";
import React from "react";
import { MdEmail } from "react-icons/md";
function QuickSupport() {
  return (
    <div className="my-20 text-center">
      <ConfigProvider
        theme={{
          token: {},

          components: {
            Button: {
              borderRadius: 0,
            },
          },
        }}
      >
        <h1 className="text-xl font-bold my-5">Want quick support?</h1>
        <p>
          Get quick support 24/7 with our dedicated customer service team. We're
          here to help you manage your account, answer any questions, and
          resolve any issues. Trust us to make your experience stress-free and
          enjoyable
        </p>
        <Button type="primary">
          <MdEmail className="text-white h-10 w-5" /> Email Your Question
        </Button>
      </ConfigProvider>
    </div>
  );
}

export default QuickSupport;
