import React from 'react'
import Flashcard from './Flashcard'
import { connect } from 'react-redux'
import TopicHandler from '../../../handlers/topicHandler'

class TopicDetail extends React.Component {
  state = {
    topic: {
      title: '',
      flashcards: [
        { _id: 0, word: '', meaning: '' }
      ]
    }
  }

  componentDidMount() {
    const id = this.props.route.payload.topicId
    TopicHandler.fetchTopic(id)((topic) => {
      this.setState({ topic })
    })
  }

  render() {
    const topic = this.state.topic
    const styleSth = {
      borderTop: "1px solid #222",
      height: "10px"
    }
    return (
      <>
        <h1 style={{ height: '40px' }}>{topic.title}</h1>
        <div style={styleSth}></div>
        <div>
          {topic.flashcards
            .map((item) => (
              <Flashcard
                key={item._id}
                flashcard={item} />
            ))
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = bigState => {
  return {
    route: bigState.route
  }
}

export default connect(mapStateToProps)(TopicDetail)