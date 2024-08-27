/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import Link from "next/link";
import SectionTitle from "@/Components/Shared/SectionTitle/SectionTitle";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
function SignUp() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const router = useRouter();
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // console.log(formData);
  const { data: session } = useSession();
  const [form] = Form.useForm();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onFinish = async () => {
    const { name, email, password } = formData;

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { user } = await resUserExists.json();
      if (user) {
        setError("User Already Exist.");
        return;
      }

      const res = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      console.log(res, "res");

      if (res.ok) {
        form.resetFields();
        router.push("/sign-in");
      } else {
        console.log("Sign up failed");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container mx-auto mt-20">
      <SectionTitle Heading="Sign up" />
      <div className="flex justify-center items-center my-8">
        <Upload
          name="avatar"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
      </div>
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
              name="name"
              rules={[
                { required: true, message: "Please input your Full Name!" },
              ]}
            >
              <Input
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please input your Confirm Password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ span: 16 }}
            >
              <Checkbox>Remember Me</Checkbox>

              <p className="text-center mt-2 mb-5 font-semibold">
                Already have an Account?
                <span className="underline ml-2">
                  <Link href="/sign-in">Sign In</Link>
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
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <div className="container mx-auto my-10 text-center">
            <div className="space-x-4">
              <Button onClick={() => signIn("github")}>
                <FaGithub /> Sign in with GitHub
              </Button>
              <Button onClick={() => signIn("google")}>
                <FaGoogle /> Sign in with Google
              </Button>
            </div>
          </div>
        </ConfigProvider>
      </div>
    </div>
  );
}

export default SignUp;
