import React, { useState } from 'react'
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined
} from '@ant-design/icons'
import { IoRibbonOutline } from 'react-icons/io5'

import type { MenuProps } from 'antd'
import { Button, Col, Menu, Row, Typography } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Rewards', '1', <IoRibbonOutline size={18} />)
  //   getItem('Option 2', '2', <DesktopOutlined />),
  //   getItem('Option 3', '3', <ContainerOutlined />),

  //   getItem('Navigation One', 'sub1', <MailOutlined />, [
  //     getItem('Option 5', '5'),
  //     getItem('Option 6', '6'),
  //     getItem('Option 7', '7'),
  //     getItem('Option 8', '8')
  //   ]),

  //   getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //     getItem('Option 9', '9'),
  //     getItem('Option 10', '10'),

  //     getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')])
  //   ])
]

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div style={{ width: 'auto' }}>
      {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      {/* <Row justify={'center'}>
        <Col span={24} > */}
      <div style={{ padding: '1em' }}>
        <Typography.Title level={5} style={{ textAlign: 'center' }}>
          Membership Admin Portal
        </Typography.Title>
      </div>
      {/* </Col>
      </Row> */}
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  )
}

export default Sidebar
