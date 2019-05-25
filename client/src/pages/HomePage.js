import React from 'react';
import AddTopic from '../components/AddTopic'
import TopicList from '../components/TopicList'
function Home() {
  return (
    <>
      <AddTopic />
      <h1>This is the topic list</h1>
      <TopicList />
    </>
  );
}

export default Home