import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";

import { Link, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const LayoutAdmin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
    <Layout className="h-screen">
        <Content
            style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
            }}
        >
            <Outlet/>
        </Content>
        </Layout>

    );
};

export default LayoutAdmin;
