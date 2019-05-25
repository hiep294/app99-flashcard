import routeReducer from './routeReducer'

const bigReducer = (bigState = {}, action) => {
  // console.log(action.type)
  return {
    route: routeReducer(bigState.route, action)
  }
}

export default bigReducer