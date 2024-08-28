import React, { useEffect } from "react";
import { Table, Button, Layout, Menu, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSession } from "next-auth/react";
import { Router } from "next/router";

const { Content, Sider } = Layout;

const AdminPage = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  useEffect(() => {
    if (!isLoading && !session) {
    //  Router.push('/sign-in')
    }
  }, [session, isLoading]);

  const handleMakeAdmin = (userId) => {
    // Logic to handle making a user an admin
    message.success(`User with ID ${userId} is now an admin!`);
  };

  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Users",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Admins",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type="primary"
          disabled={record.isAdmin}
          onClick={() => handleMakeAdmin(record.key)}
        >
          {record.isAdmin ? "Admin" : "Make Admin"}
        </Button>
      ),
    },
  ];

  // Mock data for users
  const users = [
    { key: 1, name: "John Doe", email: "john.doe@example.com", isAdmin: false },
    { key: 2, name: "Jane Smith", email: "jane.smith@example.com", isAdmin: true },
  ];

  return (
    <Layout>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: "#fff",
            borderRadius: "8px",
          }}
        >
          <Sider
            width={200}
            style={{
              background: "#fff",
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{
                height: "100%",
            }}
              items={items}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <h2>User Management</h2>
            {session ? (
              <div>
                <p>Signed in as: {session.user.name} ({session.user.email})</p>
                <Table columns={columns} dataSource={users} />
              </div>
            ) : (
              <p>Please sign in to view the user list.</p>
            )}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default AdminPage;
