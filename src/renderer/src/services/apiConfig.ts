const host = 'http://localhost:3000'
export const baseURL = `${host}`

const userURL = '/users'
const rewardURL = '/rewards'

export const ENDPOINT = {
  // auth
  login: `${baseURL}${userURL}/signin`,
  signup: `${baseURL}${userURL}/signup`,
  getUserByEmail: `${baseURL}${userURL}/getUserByEmail`,

  // reward
  getRewardList: `${baseURL}${rewardURL}/getRewardList`,
  addReward: `${baseURL}${rewardURL}/addReward`,
  testing: `${baseURL}${rewardURL}/testing`
}
