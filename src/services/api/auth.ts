import { AxiosResponse } from 'axios'
import { api } from './index'

const route = '/profile/token'

export interface IData {
  _id: string
  email: string
  createdAt: string
  updatedAt: string
  integrations: []
}

export interface IAuthRequest {
  data: IData,
  meta: {
    token: string
  }
}

interface IAuthParams {
  email: string
  password: string
}

export const authRequest = (data: IAuthParams): Promise<AxiosResponse<IAuthRequest>> =>
  api.post(route, data)
