import { combineReducers } from 'redux'
import { informationRetrieveReducer, IInformationStateT } from './Retrieve'
export interface IInformationCrud {
  retrieve: IInformationStateT
}

export const crudInformationReducer = combineReducers<IInformationCrud>({
  retrieve: informationRetrieveReducer
})
