import RewardList from '@renderer/layout/reward/RewardList'
import { Row, Space, Typography } from 'antd'
import { FaPlus } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'

import CustomButton from '@renderer/components/buttons/CustomButton'
import { useNavigate } from 'react-router-dom'
import { ENDPOINT } from '@renderer/services/apiConfig'
import { ROUTES } from '@renderer/routes/Routes'

export default function Reward() {
  const navigate = useNavigate()
  const onClickAddButton = () => {
    navigate(ROUTES.addReward)
  }
  return (
    <div className="container">
      <Space direction="vertical">
        <Typography.Title level={4}>Rewards</Typography.Title>
        <Row justify="end" align={'middle'}>
          <CustomButton  
            title={'Add'}
            icon={<IoMdAdd size={18} />}
            onClick={() => onClickAddButton()}
          />
        </Row>
        <RewardList />
      </Space>
    </div>
  )
}
