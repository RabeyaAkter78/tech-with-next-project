import React from "react";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

function ContactForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex justify-center items-center p-5">
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
            width: "800px",
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
            name="telephone"
            rules={[
              {
                required: true,
                message: "Please input your Telephone Number!",
              },
            ]}
          >
            <Input placeholder="Telephone" />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input your Subject!",
              },
            ]}
          >
            <Input placeholder="subject" />
          </Form.Item>
          <TextArea rows={4} placeholder="Message" />
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </ConfigProvider>
    </div>
  );
}

export default ContactForm;
