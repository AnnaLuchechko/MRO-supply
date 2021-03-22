import * as ActionTypes from './ActionTypes'
import {AsyncStorage} from 'react-native'
import Services from '../services/Services'

export const getCategories = () => {
  return (dispatch, getState) => {
    dispatch({type: ActionTypes.GET_CATEGORIES_PENDING})
    Services.getCategories()
      .then((response) => {
        dispatch({type: ActionTypes.GET_CATEGORIES_SUCCESS, categories: response})
      })
      .catch((errorMsg) => {
        dispatch({type: ActionTypes.GET_CATEGORIES_FAILURE, message: errorMsg})
      })
  }
};
