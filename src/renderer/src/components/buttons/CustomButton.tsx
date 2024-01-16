import { Button } from 'antd'
import React from 'react'

interface ButtonProps {
  onClick(): void
  icon: any
  title: string
}

export default function CustomButton(props: ButtonProps) {
  return (
    <Button
      icon={props?.icon}
      type="primary"
      style={{
        display: 'flex',
        justifyContent: 'end',
        // width: 80,
        textAlign: 'center',
        alignItems: 'center'
      }}
      onClick={() => props?.onClick()}
    >
      {props?.title}
    </Button>
  )
}
