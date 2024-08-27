/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import { useRouter } from "next/navigation";

function SignIn() {
  const [error, setError] = useState("");
  const { data: session } = useSession();
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values) => {
    const { email, password } = values;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: router.query?.callbackUrl || "/",
        // Redirect to the intend url
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace(res.url || "/");
    } catch (error) {
      console.log("Sign in error:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };

  return (
    <div className="container mx-auto">
      <SectionTitle Heading="Sign In to Your Account" />
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
            form={form}
            name="basic"
            labelCol={{ xs: 24, sm: 24, md: 24 }}
            wrapperCol={{ xs: 24, sm: 24, md: 24 }}
            style={{ maxWidth: "100%", width: "400px", margin: "0 auto" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input placeholder="Password" type="password" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ span: 16 }}
            >
              <Checkbox>Remember Me</Checkbox>
              <p className="text-center mt-2 mb-5 font-semibold">
                Don't have an Account?
                <span className="underline ml-2">
                  <Link href="/sign-up">Sign Up</Link>
                </span>
              </p>
            </Form.Item>

            {error && (
              <p className="text-xl font-bold text-red-500 text-center">
                {error}
              </p>
            )}

            <Form.Item wrapperCol={{ span: 16 }}>
              <Button
                style={{ justifyContent: "center", alignItems: "center" }}
                type="primary"
                htmlType="submit"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>

          <div className="container mx-auto my-10 text-center">
            <div className="space-x-4">
              <Button
                onClick={() =>
                  signIn("github", {
                    callbackUrl: router.query?.callbackUrl || "/",
                  })
                }
              >
                <FaGithub /> Sign in with GitHub
              </Button>
              <Button
                onClick={() =>
                  signIn("google", {
                    callbackUrl: router.query?.callbackUrl || "/",
                  })
                }
              >
                <FaGoogle /> Sign in with Google
              </Button>
            </div>
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default SignIn;
