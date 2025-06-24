import React from 'react'

export default function tamplate({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    {children}
  )
}
