import React from 'react'
import { Button, Divider, Form, Input, Space, Typography } from 'antd'
import { FaUser } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@renderer/routes/Routes'

interface UserCredentials {
  name: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()
  const onFinish = (fields: UserCredentials) => {
    console.log('pass the credential to BE and verify the account.', fields)
    console.log('the credential get and store into the redux')
    navigate(ROUTES.reward)
  }

  return (
    <div className="login-container">
      <Space direction="vertical">
        <Typography.Title level={3}>Membership Admin Portal</Typography.Title>
        <Typography.Text color="lightgray">
          This is an application that allowed you to manage the membership of your store.
        </Typography.Text>
        <div className="login-form">
          <Typography.Text
            className="login-prompt"
            style={{ textAlign: 'left', marginBottom: '1em' }}
          >
            Please login with your account.
          </Typography.Text>
          <Form onFinish={onFinish}>
            <Form.Item>
              <Input
                placeholder="Email/Username"
                prefix={
                  <div>
                    <FaUser color="#505050" size={16} />
                    <Divider type="vertical" />
                  </div>
                }
              ></Input>
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Password"
                type='password'
                prefix={
                  <div>
                    <FaLock color="#505050" size={16} /> <Divider type="vertical" />
                  </div>
                }
              ></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Space>
    </div>
  )
}
