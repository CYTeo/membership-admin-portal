import IMAGES from '@renderer/assets'
import { rewardList } from '@renderer/utils/dummydata/rewards'
import { Button, Card, Col, Image, Row, Typography } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
import { FcRemoveImage } from 'react-icons/fc'

interface Reward {
  title: string
  description: string
  image: string
  originalPrice: number
  discountedPrice: number
  availabilityQty: number
  isSaved: boolean
}

export default function RewardList() {
  const fetchRewardList = () => {
    // axios call api and get data from BE
  }
  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginBottom: 50 }}>
        {rewardList?.map((reward: Reward, index: number) => {
          return (
            <Col
              key={index}
              span={8}
              xs={8}
              sm={8}
              md={8}
              lg={6}
              xl={6}
              className="reward-list-col"
            >
              <Card
                hoverable
                // style={{ width: '100%' }}
                cover={
                  reward?.image != '' ? (
                    <Image
                      // alt={<FcRemoveImage />}
                      preview={false}
                      src={IMAGES.blackpinTumbler}
                      width={'100%'}
                      height={'30vh'}
                    />
                  ) : (
                    <FcRemoveImage size={30} />
                  )
                }
              >
                <Meta
                  title={reward?.title}
                  description={
                    <div>
                      <div>{reward?.description}</div>
                      <div> Availability: {reward?.availabilityQty}</div>
                    </div>
                  }
                />
                {/* <div>
                  <span>Availability: {reward?.availabilityQty}</span>
                </div> */}
                {/* <Button >
                    Add to Cart
                </Button> */}
              </Card>
            </Col>
          )
        })}
      </Row>

      {/* <Card title= */}
    </div>
  )
}
