import { ON_HOME_PAGE, ON_TOPICDETAIL_PAGE } from '../actions'
const initialSmallState = {
  type: ON_HOME_PAGE
}

const routeReducer = (smallState = initialSmallState, action) => {
  switch (action.type) {
    case ON_HOME_PAGE:
      return initialSmallState
    case ON_TOPICDETAIL_PAGE:
      return {
        type: action.type,
        payload: {
          topicId: action.payload.topicId
        }
      }
    default:
      return smallState
  }
}

export default routeReducer