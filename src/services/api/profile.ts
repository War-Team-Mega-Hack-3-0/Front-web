import { AxiosResponse } from 'axios'

import { ILoginRequestParams, ISignUpParams } from '../../redux/auth/actions'
// import { } from '../../redux/information'

import { api } from './index'

const baseUrl = '/profile'

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

export const authRequest = (data: ILoginRequestParams): Promise<AxiosResponse<IAuthRequest>> =>
  api.post(`${baseUrl}/token`, data)

export const signUpRequest = (data: ISignUpParams): Promise<AxiosResponse<IAuthRequest>> =>
  api.post(`${baseUrl}/signup`, data)

export const DashBoard = (): Promise<AxiosResponse<IAuthRequest>> =>
  api.post(`${baseUrl}/dashboard`)
