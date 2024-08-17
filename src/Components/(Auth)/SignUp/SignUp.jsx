/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import Link from "next/link";
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";

function SignUp() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container mx-auto my-32">
      <SectionTitle Heading="SignUp"></SectionTitle>
      <div className="p-5">
        <ConfigProvider
          theme={{
            components: {
              Form: {
                itemMarginBottom: 20,
              },
              Input: {
                borderRadius: 0,
              },
            },
          }}
        >
          <Form
            name="basic"
            labelCol={{
              xs: 24,
              sm: 24,
              md: 24,
            }}
            wrapperCol={{
              xs: 24,
              sm: 24,
              md: 24,
            }}
            style={{
              maxWidth: "100%",
              width: "400px",
              margin: "0 auto",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Full Name!",
                },
              ]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="confirm-password"
              rules={[
                {
                  required: true,
                  message: "Please input your Confirm-Password!",
                },
              ]}
            >
              <Input placeholder="Confirm-Password" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                span: 16,
              }}
            >
              <Checkbox>Remember Me</Checkbox>
              <p className="text-center mt-2 mb-5 font-semibold">
                Already have an Account?
                <span className="underline">
                  <Link href="/sign-in">SignIn</Link>
                </span>
              </p>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 16,
              }}
            >
              <Button
                style={{ justifyContent: "center", alignItems: "center" }}
                type="primary"
                htmlType="submit"
              >
                SignIn
              </Button>
            </Form.Item>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default SignUp;
