import React from "react";
import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";

function ContactForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {},

          components: {
            Card: {
              colorTextDescription: "rgb(112,109,109)",
              colorTextHeading: "rgb(57,56,56)",
              fontHeight: 0,
              fontSize: 28,
              marginXS: 0,
              headerFontSize: 30,
              headerFontSizeSM: 30,
              fontSizeLG: 0,
              boxShadowCard:
                "      0 1px 2px -3px rgba(0, 0, 0, 0.16),      0 3px 6px 0 rgba(0, 0, 0, 0.12),      0 5px 12px 4px rgba(0, 0, 0, 0.09)    ",
              borderRadiusLG: 0,
            },
            Form: {
              itemMarginBottom: 20,
            },
          },
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 800,
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
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="User Name" className="rounded-none" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
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
