import React from 'react';
import './App.css';
import SubmissionItem from './submissionItem/SubmissionItem'

class App extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    this.state = {
      id: null,
      url: "www.jesaispas.com",
      title: "a great title",
      upvote: 10
    }
  }

  render() {
    return(
        <SubmissionItem data={this.state}/>
    )
    // whatever you like
  }
}

export default App;
