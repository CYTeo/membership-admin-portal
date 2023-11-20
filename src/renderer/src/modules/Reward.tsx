import RewardList from '@renderer/layout/reward/RewardList'
import { Button, Col, Row, Space, Typography } from 'antd'
import { FaPlus } from 'react-icons/fa'

import React from 'react'

export default function Reward() {
  return (
    <div className="container">
      <Space direction="vertical">
        <Typography.Title level={4}>Rewards</Typography.Title>
        <Row justify="end" align={'middle'}>
          {/* <Col span={24}> */}
          <Button
            icon={<FaPlus />}
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
            Add
          </Button>
          {/* </Col> */}
        </Row>

        <RewardList />
      </Space>
    </div>
  )
}
