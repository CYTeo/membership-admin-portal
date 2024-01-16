import axios from 'axios'
import { sprintf } from 'sprintf-js'

import { ENDPOINT } from '../apiConfig'

export const addReward = ({ params }: any) => {
  return axios.post(ENDPOINT.addReward, params)
}

export const getRewardList = () => {
  return axios.get(ENDPOINT.getRewardList)
}

export const testing = async () => {
  //   return axios.get('https://hub.dummyapis.com/employee').then((res: any) => {
  //     console.log('employee ', res)
  //   })
  return axios.get('http://213.35.113.98/api/currency/').then((res: any) => {
    console.log('currency ', res)
  })
  //   const response = await fetch('https://hub.dummyapis.com/employee')
  //   const employee = await response.json()
  //   console.log('employee ', employee)
  //   return axios
  //     .get(ENDPOINT.testing)
  //     .then((res: any) => {
  //       console.log('The result : ', res)
  //     })
  //     .catch((err: any) => {
  //       console.log('the error : ', err.message)
  //     })
}
