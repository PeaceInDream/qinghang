import React from 'react'
import Image from 'next/image'
import backImg from "../../public/background.png"


export default function Page() {
  return (
    <div className="flex justify-center items-center p-10">
      <Image src={backImg} alt='background'></Image>
    </div>
  )
}
