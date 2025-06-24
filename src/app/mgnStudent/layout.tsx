"use client"
import React/*, { useState } */ from 'react'
import {Tabs } from 'antd'
// import TabContents from "./tabContents"

import Link from 'next/link';


export default function mgnStudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [itemIndex, setItemIndex] = useState(0);

  //只有标签切换时才会触发
  const changeHandle = (activeKey: number | string)=>{
    // setItemIndex(activeKey);
    console.log("change ",activeKey)
  }
  return (
    <Tabs
      defaultActiveKey="0"    //默认选中标签
      tabPosition="top"       //tab位置
      animated={true}         //标签切换动画是否开启
      size='large'            //标签大小
      className="h-full"      //设置宽度
      tabBarStyle={{marginLeft:"5px", marginRight:"5px"}}
      onChange={changeHandle}
      items={Array.from({ length: 31 }, (_, i) => {
        const id = String(i);
        return {
          label: id=="0"?<Link href={`/mgnStudent`}>所有</Link>:(i>5?`学员-${id}`:<Link href={`/mgnStudent/${id}`}>学员-{id}</Link>),
          key: id,
          disabled: i > 5,
          children: children,          
        };
      })}
    />
  )
}
