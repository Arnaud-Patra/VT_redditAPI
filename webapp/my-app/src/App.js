import React from 'react';
import './App.css';
import SubmissionList from './submissionItem/SubmissionItem'

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

  sublist = [
    { id: 1, url: "Leanne Graham", title: "a great title",upvote: 10 },
    { id: 2, url: "Ervin Howell", title: "a great title",upvote: 10 },
    { id: 3, url: "Clementine Bauch", title: "a great title",upvote: 10 },
    { id: 4, url: "Patricia Lebsack", title: "a great title",upvote: 10 }
  ];

  render() {
    return(
        <SubmissionList data={this.sublist}/>
    )
    // whatever you like
  }
}

export default App;
