import React from 'react';
import './App.css';
import SubmissionList from './submissionItem/Submission'
import SubGetter from "./subGetter/getter";

class App extends React.Component {
    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);

        this.state = {
            subs: []
        }
    }

    sublist = [
        { id: 1, title: "Leanne Graham", url: "www.google.com",upvote: 11 },
        { id: 2, title: "Ervin Howell", url: "a great title",upvote: 12 },
        { id: 3, title: "Clementine Bauch", url: "a great title",upvote: 13 },
        { id: 4,  title: "Patricia Lebsack", url: "a great title",upvote: 14 }
    ];

    componentDidMount() {
        this.items = SubGetter.fetch;
    }

    render() {
        return(
            <div className="?">
                <div className="mainHeader">
                    Best website ever
                </div>
                <SubmissionList data={this.sublist}/>
            </div>

        )
    }
}

export default App;
