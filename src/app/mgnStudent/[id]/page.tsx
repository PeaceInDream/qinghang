"use client"

import React, {useState} from 'react'
import { InputNumber, Slider, Divider  } from 'antd'

import {useParams} from 'next/navigation'
// import Icon from '@ant-design/icons';
import Image from 'next/image'
import Motor from "../../../../public/motor.svg"
import CurveCtx from "../../components/curveCtx"

export default function Page() {
  const [curVol, setCurVol] = useState(3.33);
  const [pitch, setPitch] = useState(0);
  const [roll, setRoll] = useState(0);
  const [yaw, setYaw] = useState(0);
  const [motor1, setMotor1] = useState(0);
  const [motor2, setMotor2] = useState(0);
  const [motor3, setMotor3] = useState(0);
  const [motor4, setMotor4] = useState(0);


  const changeCurVol: (value: number | null) => void = (value:number | null)=>setCurVol(value==null?0:value);
  const changePitch: (value: number | null) => void = (value:number | null)=>setPitch(value==null?0:value);
  const changeRoll: (value: number | null) => void = (value:number | null)=>setRoll(value==null?0:value);
  const changeYaw: (value: number | null) => void = (value:number | null)=>setYaw(value==null?0:value);
  const changeMotor1: (value: number | null) => void = (value:number | null)=>setMotor1(value==null?0:value);
  const changeMotor2: (value: number | null) => void = (value:number | null)=>setMotor2(value==null?0:value);
  const changeMotor3: (value: number | null) => void = (value:number | null)=>setMotor3(value==null?0:value);
  const changeMotor4: (value: number | null) => void = (value:number | null)=>setMotor4(value==null?0:value);
  
//   const pathname = usePathname()
//   const searchParams = useSearchParams()
  const params = useParams<{ id: string}>()
  // 只在组件挂载时执行一次（空依赖数组）
//   useEffect(() => {
//     //每隔500ms更新一次数据
    
//     // console.log("pid: ", pathname)
//     console.log("param: ", params.id)
//     // 清理函数
//     return () => {
//         // 取消订阅、清理定时器等
//     };
// }, [pathname, searchParams]);

  return (
        <div className="flex flex-col h-full text-base">
            <div className="h-64 px-2.5 flex flex-row">
                <div className="flex-1/2 pl-20">
                    <div className="block py-1.5 mb-1">
                        <label htmlFor="flyMin" className="whitespace-nowrap">飞行时间：</label>
                        <InputNumber min={0} max={60} defaultValue={10} id='flyMin' onChange={()=>{}}/>
                        <label htmlFor="flySec">min</label>
                        <InputNumber min={0} max={60} defaultValue={10} id='flySec' onChange={()=>{}}/>s                        
                    </div>
                    <div className="py-1.5 mb-1 flex flex-row items-center">
                        <label htmlFor="curVol" className="whitespace-nowrap">当前电压：</label>
                        <Slider min={0.00} max={24.00} onChange={changeCurVol} style={{width:200, marginRight:20}}  step={0.01} value={typeof curVol === 'number' ? curVol : 0}/>                        
                        <InputNumber id='curVol' style={{width:80}} step="0.01" value={curVol} min={0} max={24.00} defaultValue={3.33} onChange={changeCurVol}/>V
                    </div>
                    <div className="py-1.5 mb-1  flex flex-row items-center">
                        <label htmlFor="pitch" className="whitespace-nowrap">俯仰角度：</label>
                        <Slider min={0.0} max={360.0} onChange={changePitch} style={{width:200, marginRight:20}}  step={0.1} value={typeof pitch === 'number' ? pitch : 0}/> 
                        <InputNumber id='pitch' style={{width:80}} step="0.1" value={pitch} min={0.0} max={360.0} defaultValue={0.0} onChange={changePitch}/>°
                    </div>  
                    <div className="py-1.5 mb-1  flex flex-row items-center">
                        <label htmlFor="roll" className="whitespace-nowrap">横滚角度：</label>
                        <Slider min={0.0} max={360.0} onChange={changeRoll} style={{width:200, marginRight:20}}  step={0.1} value={typeof roll === 'number' ? roll : 0}/> 
                        <InputNumber id='roll' style={{width:80}} step="0.1" value={roll} min={0.0} max={360.0} defaultValue={0.0} onChange={changeRoll}/>°
                    </div> 
                    <div className="py-1.5 mb-1  flex flex-row items-center">
                        <label htmlFor="yaw" className="whitespace-nowrap">航向角度：</label>
                        <Slider min={0.0} max={360.0} onChange={changeYaw} style={{width:200, marginRight:20}}  step={0.1} value={typeof yaw === 'number' ? yaw : 0}/> 
                        <InputNumber id='yaw' style={{width:80}} step="0.1" value={yaw} min={0.0} max={360.0} defaultValue={0.0} onChange={changeYaw}/>°
                    </div>                                                           
                </div>
                <div className="flex-1/2 pl-20">
                    <div className="py-1.5 mb-1 flex flex-row items-center  mt-6">
                        <Image src={Motor} alt="motor" className="flex items-center w-7 h-7 mr-1.5 animate-spin" />
                        <label htmlFor="motor1" className="whitespace-nowrap">电机1：</label>
                        <Slider min={0} max={255} onChange={changeMotor1} style={{width:200, marginRight:20}}  value={typeof motor1 === 'number' ? motor1 : 0}/>                        
                        <InputNumber id='motor1' style={{width:80}} value={motor1} min={0} max={255} defaultValue={0} onChange={changeMotor1}/>
                    </div>
                    <div className="py-1.5 mb-1 flex flex-row items-center">
                        <Image src={Motor} alt="motor" className="flex items-center w-7 h-7 mr-1.5 animate-spin" />
                        <label htmlFor="motor2" className="whitespace-nowrap">电机2：</label>
                        <Slider min={0} max={255} onChange={changeMotor2} style={{width:200, marginRight:20}}  value={typeof motor2 === 'number' ? motor2 : 0}/>                        
                        <InputNumber id='motor2' style={{width:80}} value={motor2} min={0} max={255} defaultValue={0} onChange={changeMotor2}/>
                    </div>
                    <div className="py-1.5 mb-1 flex flex-row items-center">
                        <Image src={Motor} alt="motor" className="flex items-center w-7 h-7 mr-1.5 animate-spin" />
                        <label htmlFor="motor3" className="whitespace-nowrap">电机3：</label>
                        <Slider min={0} max={255} onChange={changeMotor3} style={{width:200, marginRight:20}}  value={typeof motor3 === 'number' ? motor3 : 0}/>                        
                        <InputNumber id='motor3' style={{width:80}} value={motor3} min={0} max={255} defaultValue={0} onChange={changeMotor3}/>
                    </div>
                    <div className="py-1.5 mb-1 flex flex-row items-center">
                        <Image src={Motor} alt="motor" className="flex items-center w-7 h-7 mr-1.5 animate-spin" />
                        <label htmlFor="motor4" className="whitespace-nowrap">电机4：</label>
                        <Slider min={0} max={255} onChange={changeMotor4} style={{width:200, marginRight:20}}  value={typeof motor4 === 'number' ? motor4 : 0}/>                        
                        <InputNumber id='motor4' style={{width:80}} value={motor4} min={0} max={255} defaultValue={0} onChange={changeMotor4}/>
                    </div>                                                            
                </div>                
            </div>
            <Divider size="small" />
            <CurveCtx props={{itemIndex:params.id}} />
        </div>
  )
}
