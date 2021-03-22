import * as ActionTypes from '@actions/ActionTypes'

const dataSuccess = (action) => {
  return {type: action.type, isRequesting: false, message: ""}
}
const dataFail = (action) => {
  return {type: action.type, isRequesting: false, message: action.message}
}
const dataPending = (action) => {
  return {type: action.type, isRequesting: true, message: ""}
}

export default function base(state = {}, action) {
  switch (action.type) {
    case ActionTypes.GET_CATEGORIES_PENDING: {
      return Object.assign({}, state, {
        ...dataPending(action)
      })
    }
    case ActionTypes.GET_CATEGORIES_FAILURE:{
      return Object.assign({}, state, {
        ...dataFail(action)
      })
    }
    case ActionTypes.GET_CATEGORIES_SUCCESS: {
      return Object.assign({}, state, {
        categories: action.categories,
        ...dataSuccess(action)
      })
    }
    default:
      return state;
  }
}
