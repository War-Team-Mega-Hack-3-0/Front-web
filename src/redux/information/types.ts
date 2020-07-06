import { IBaseInitialState } from '../baseInitialState'

export const informationTypes = {
  RETRIEVE_INFORMATION_REQUEST: '[movies]RETRIEVE_INFORMATION_REQUEST',
  RETRIEVE_INFORMATION_SUCCESS: '[movies]RETRIEVE_INFORMATION_SUCCESS',
  RETRIEVE_INFORMATION_FAILURE: '[movies]RETRIEVE_INFORMATION_FAILURE'
}

interface ICommonDataChart {
  labels: string[]
  data: number[]
}
export interface IInformationState extends IBaseInitialState {
  doughnutData: { data: number[] }
  dataHours: ICommonDataChart
  dataMonths: ICommonDataChart
}

export interface IInformationActions {
  type:
  | '[movies]RETRIEVE_INFORMATION_REQUEST'
  | '[movies]RETRIEVE_INFORMATION_SUCCESS'
  | '[movies]RETRIEVE_INFORMATION_FAILURE'
  payload?: any
}
