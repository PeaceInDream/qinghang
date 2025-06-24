"use client"

import React, { useState }  from 'react'
import Link from 'next/link'
import type { MenuProps } from 'antd';
import {Layout, Menu, Button} from "antd";

import {
    SettingOutlined, 
    DashboardOutlined, 
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons"

const { Header, Sider, Content } = Layout;


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

const menuItemTextsArr = [
    '首页','自定义操作','学员管理','管理员详情'
]

const menuItemTexts = [
    <Link href="/" key={0}>首页</Link>,
    <Link href="/mngMyOperate"  key={1}>自定义操作</Link>, 
    <Link href="/mgnStudent"  key={2}>学员管理</Link>, 
    <Link href="/mngAdmin"  key={3}>管理员详情</Link>
]  

const items: MenuItem[] = [
    getItem(menuItemTexts[1], '1', <SettingOutlined className="text-xl!"/>),
    getItem(menuItemTexts[2], '2', <DashboardOutlined className="text-xl!"/>),
    getItem(menuItemTexts[3], '3', <UserOutlined className="text-xl!"/>)
  ];

export default function Home({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [collapsed, setCollapsed] = useState(false);
    const [headerText, setHeaderText] = useState(menuItemTextsArr[0]);             //设置标题
    // const [itemIndex, setItemIndex] = useState(1);

    return (
        <div className="flex flex-col h-dvh">
            <div className="bg-blue-950 mb-1 h-16 text-white text-2xl text-center pt-4">
                青航智能云平台
            </div>            
            <div className="container mx-auto flex-1 mb-2">
                <Layout className="h-full!">
                    <Sider trigger={null} collapsible collapsed={collapsed} width={240}>
                        <div className="mt-8 mb-8 text-center text-2xl">
                            <p className="text-white font-bold">MQTT</p>
                        </div>
                        <Menu theme="dark" /*defaultSelectedKeys={['1']}*/ mode="inline" items={items} className="text-xl!" onClick={(e)=>{
                                setHeaderText(menuItemTextsArr[Number(e.key)]);
                                // setItemIndex(Number(e.key)-1);
                            }}
                        />
                    </Sider> 
                    <Layout>
                        <Header style={{ background: '#4D97FF', padding: 0, display:"flex", flexDirection:"row", alignItems:"center"}}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />            
                            <div className="text-xl text-white font-bold">{headerText}</div>
                        </Header>
                        <Content className="bg-blue-100 px-1.5">
                                {children}
                        </Content>
                    </Layout>
                </Layout> 
            </div>

        </div>

           
    )
}
