import RewardList from '@renderer/layout/reward/RewardList'
import { Button, Col, Row, Space, Typography } from 'antd'
import { FaPlus } from 'react-icons/fa'

import React from 'react'
import CustomButton from '@renderer/components/buttons/CustomButton'

export default function Reward() {
  return (
    <div className="container">
      <Space direction="vertical">
        <Typography.Title level={4}>Rewards</Typography.Title>
        <Row justify="end" align={'middle'}>
          <CustomButton icon={<FaPlus />} title={'ADD'} />
        </Row>
        <RewardList />
      </Space>
    </div>
  )
}
