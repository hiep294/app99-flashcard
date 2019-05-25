import React from 'react'
import { onTopicdetailPage } from '../../../redux elements/actions/actionDetails'
import { connect } from 'react-redux'

/**
 * 
 * @param {children} : button for delete 
 */
const Topic = ({ dispatch, topic, children }) => {
  return (
    <div style={{ display: 'flex' }}>
      {children}
      <div
        style={{ cursor: "pointer" }}
        onMouseDown={() => {
          dispatch(onTopicdetailPage(topic._id))
        }}
      >{topic.title}</div>
    </div>
  )
}

export default connect()(Topic)