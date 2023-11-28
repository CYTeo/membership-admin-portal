import { Button } from 'antd'
import React from 'react'

interface ButtonProps {
  icon: any
  title:string
}

export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      icon={props?.icon}
      type="primary"
      style={{
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'end',
        width: 80,
        textAlign: 'center',
        alignItems: 'center'
      }}
    >
      {props?.title}
    </Button>
  )
}
