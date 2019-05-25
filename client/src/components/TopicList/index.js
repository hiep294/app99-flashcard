import React from 'react'
import Topic from './Topic'
import TopicHandler from '../../handlers/topicHandler'

class TopicList extends React.Component {
  state = {
    topics: []
  }

  componentDidMount = () => {
    TopicHandler.fetchTopics()((topics) => {
      this.setState({ topics: topics })
    })
  }

  onDeleteTopic = (e) => {
    // transition event
    const id = e.target.name
    const temp = document.getElementById(id)
    temp.style.opacity = "0.3"
    // action
    TopicHandler.deleteTopic(id)((responseId) => {
      this.setState({
        topics: this.state.topics.filter(item => item._id !== responseId)
      })
    })
  }

  render() {
    const transitionWhenDelete = {
      transition: 'opacity 0.5s'
    }
    return (
      <>
        {this.state.topics
          .map(topic => (
            <div key={topic._id} style={transitionWhenDelete} id={topic._id}>
              <Topic topic={topic}>
                <button name={topic._id} onClick={this.onDeleteTopic}>
                  &times;
                </button>
              </Topic>
            </div>
          ))
        }
      </>
    )
  }
}


export default TopicList