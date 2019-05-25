export default class TopicController {
  /**
   * get a number of topics
   */
  static fetchTopics = () => clientHandle => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(topics => clientHandle(topics))
      .catch(err => {
        console.log(err)
        clientHandle([])
      })
  }

  /**
   * delete topic
   */
  static deleteTopic = (id) => (clientHandle) => {
    fetch(`/api/topics/${id}`, {
      method: 'delete'
    })
      .then(res => res.json())
      .then(response => {
        //always delete successfully, exceed out of internet
        // delete in client
        clientHandle(response.id)
      })
      .catch(err => console.log(err))
  }

  /**
   * get a certain topic
   */
  static fetchTopic = (id) => clientHandle => {
    fetch(`/api/topics/${id}`, {
      method: 'get'
    })
      .then(res => res.json())
      .then(topic => clientHandle(topic))
      .catch(errs => console.log(errs))
  }

}