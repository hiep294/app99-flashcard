import { ON_HOME_PAGE, ON_TOPICDETAIL_PAGE } from '.'

export const onHomePage = () => {
  return {
    type: ON_HOME_PAGE
  }
}

export const onTopicdetailPage = (id) => {
  return {
    type: ON_TOPICDETAIL_PAGE,
    payload: {
      topicId: id
    }
  }
}