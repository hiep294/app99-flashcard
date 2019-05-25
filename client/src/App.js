import React from 'react';
import HomePage from './pages/HomePage'
import TopicDetailPage from './pages/TopicDetailPage'
import { ON_HOME_PAGE, ON_TOPICDETAIL_PAGE } from './redux elements/actions'
import { connect } from 'react-redux'
import Layout from './pages/layout'
import './App.css'

function filterBody(props) {
  switch (props.route.type) {
    case ON_HOME_PAGE:
      return <HomePage />
    case ON_TOPICDETAIL_PAGE:
      return <TopicDetailPage />
    default:
      return <HomePage />
  }
}
/**
 * main app
 */
function App(props) {
  const Body = filterBody(props)
  return (
    <Layout>
      {Body}
    </Layout>
  )
}

const mapStateToProps = bigState => ({
  route: bigState.route
})

export default connect(mapStateToProps)(App);
