import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import '@ant-design/v5-patch-for-react-19';
import Home from '@/app/components/home';


export const metadata: Metadata = {
  title: "青航智能云平台",
  description: "无人机数据监测平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
            <Home>{children}</Home>            
        </AntdRegistry>
      </body>
    </html>
  );
}
