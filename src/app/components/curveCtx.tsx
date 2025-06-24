"use client"
import React, {useEffect, useState} from 'react'
import EChartsReact from 'echarts-for-react'
import { usePathname } from 'next/navigation'

export default function CurveCtx({props}:{props:{itemIndex:string}}) {
    const [userData, setUserData] = useState([
        {
            user: "学员1",
            thrust: Array.from({ length: 10 }, () => 0),
            pitch: Array.from({ length: 10 }, () => 0),
            roll: Array.from({ length: 10 }, () => 0),
            yaw: Array.from({ length: 10 }, () => 0)
        },
        {
            user: "学员2",
            thrust: Array.from({ length: 10 }, () => 0),
            pitch: Array.from({ length: 10 }, () => 0),
            roll: Array.from({ length: 10 }, () => 0),
            yaw: Array.from({ length: 10 }, () => 0)
        },
        {
            user: "学员3",
            thrust: Array.from({ length: 10 }, () => 0),
            pitch: Array.from({ length: 10 }, () => 0),
            roll: Array.from({ length: 10 }, () => 0),
            yaw: Array.from({ length: 10 }, () => 0)
        },
        {
            user: "学员4",
            thrust: Array.from({ length: 10 }, () => 0),
            pitch: Array.from({ length: 10 }, () => 0),
            roll: Array.from({ length: 10 }, () => 0),
            yaw: Array.from({ length: 10 }, () => 0)
        },
        {
            user: "学员5",
            thrust: Array.from({ length: 10 }, () => 0),
            pitch: Array.from({ length: 10 }, () => 0),
            roll: Array.from({ length: 10 }, () => 0),
            yaw: Array.from({ length: 10 }, () => 0)
        },
    ]);

    const generateRandomNumber = () => {
        // 生成 -20 到 20 之间的随机数
        const randomNum = Math.random() * 40 - 20;        
        // 保留2位小数
        return Number(randomNum.toFixed(2));
    }

    const updataUsedata = ()=>{
        
        const newUserData = [...userData];
        for(const i of newUserData){
            i.thrust = [...i.thrust, Math.round(Math.random() * 100)].slice(-10);
            i.pitch = [...i.pitch, generateRandomNumber()].slice(-10);
            i.roll = [...i.roll, generateRandomNumber()].slice(-10);
            i.yaw = [...i.yaw, generateRandomNumber()].slice(-10);
        }

        return newUserData;
    }    
    const pathname = usePathname()
    // 只在组件挂载时执行一次（空依赖数组）
    useEffect(() => {
        //每隔500ms更新一次数据
        const timer1 = setInterval(()=>{
            console.log("useEffect: ",props.itemIndex)
            setUserData(updataUsedata());
        }, 500);
        // 清理函数
        return () => {
            // 取消订阅、清理定时器等
            clearInterval(timer1);
        };
    }, [pathname]);

    // useEffect(() => {
    //     console.log("当前学员：", props.itemIndex)
    // },[props.itemIndex])

    // {props.itemIndex}
    const makeDataItem = (name: string, data: Array<number|string>)=>{
        return {
            type: 'line',
            name: name,
            data: data,
            smooth:true       //设置平滑曲线
        }
    }    
    const echartsOps = (series: Array<object>) => ({
        tooltip: {},
        legend: {         //栅格设置  图标
          borderWidth: 1,
          borderColor: 'rgb(229, 231, 235)',
        },
        yAxis: {},
        grid: {
          show: true,
          containLabel: true,
          borderWidth: 1,
          borderColor : '#2E4859',
          left: 20,        
          bottom: 10,
          top: 30,
          right: 20
        },
        xAxis: {
          type: 'category', 
          data:["-9","-8","-7","-6","-5","-4","-3","-2","-1","0"]
        },
        series: props.itemIndex=='0'?series:[series[Number(props.itemIndex)-1], series[5]],
    }); 
  return ( 
    <div className="flex-1 flex flex-wrap justify-between">
        <div className="flex-1/2 px-2 h-52  text-center">
            <p className="font-bold text-1xl">油门</p>  
            <EChartsReact 
                style={{height:"180px"}}
                option={echartsOps([
                    makeDataItem("学员1",userData[0].thrust), 
                    makeDataItem("学员2",userData[1].thrust), 
                    makeDataItem("学员3",userData[2].thrust),
                    makeDataItem("学员4",userData[3].thrust),
                    makeDataItem("学员5",userData[4].thrust),
                    makeDataItem("标准",['0','20', '20','40', '40','60', '60','80', '80','100'])
                ])}
            />            
        </div>
        <div className="flex-1/2 px-2 h-52 text-center">    
            <p className="font-bold text-1xl">俯仰</p>            
            <EChartsReact 
                style={{height:"180px"}}
                option={echartsOps([
                    makeDataItem("学员1",userData[0].pitch),
                    makeDataItem("学员2",userData[1].pitch),
                    makeDataItem("学员3",userData[2].pitch),
                    makeDataItem("学员4",userData[3].pitch),
                    makeDataItem("学员5",userData[4].pitch),
                    makeDataItem("标准",['10','10', '10','10', '10','-10', '-10','-10', '-10','-10'])
                ])}
            />
        </div>
        <div className="flex-1/2 px-2  h-52  text-center">
            <p className="font-bold text-1xl">横滚</p> 
            <EChartsReact 
                style={{height:"180px"}}
                option={echartsOps([
                    makeDataItem("学员1",userData[0].roll),
                    makeDataItem("学员2",userData[1].roll),
                    makeDataItem("学员3",userData[2].roll),
                    makeDataItem("学员4",userData[3].roll),
                    makeDataItem("学员5",userData[4].roll),
                    makeDataItem("标准",['10','10', '10','10', '10','-10', '-10','-10', '-10','-10'])
                ])}
            />            
        </div>
        <div className="flex-1/2 px-2  h-52  text-center">
            <p className="font-bold text-1xl">航向</p> 
            <EChartsReact 
                style={{height:"180px"}}
                option={echartsOps([
                    makeDataItem("学员1",userData[0].yaw),
                    makeDataItem("学员2",userData[1].yaw),
                    makeDataItem("学员3",userData[2].yaw),
                    makeDataItem("学员4",userData[3].yaw),
                    makeDataItem("学员5",userData[4].yaw),
                    makeDataItem("标准",['10','10', '10','10', '10','-10', '-10','-10', '-10','-10'])
                ])}
            />            
        </div>
    </div>  
  )
}
