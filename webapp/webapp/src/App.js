import React from 'react';
import './App.css';
import SubmissionList from './submissionItem/Submission'
import {postsfetcher} from "./subGetter/getter";
import SubModel from "./Models/submodel";

class App extends React.Component {
    constructor(subs) {
        // Required step: always call the parent class' constructor
        super();

        this.state = {
            subs: []
        }
        this.subs = subs
    }

    //Mock data
    /*
    subs = [
        { id: 1, title: "Leanne Graham", url: "www.google.com",upvote: 11 },
        { id: 2, title: "Ervin Howell", url: "a great title",upvote: 12 },
        { id: 3, title: "Clementine Bauch", url: "a great title",upvote: 13 },
        { id: 4,  title: "Patricia Lebsack", url: "a great title",upvote: 14 }
    ];
    */

    componentDidMount() {
        this.subs =  [
            SubModel("www.google.com", "Leanne Graham",11),
            SubModel("www.2.com", "test",121)
        ];

        /*
        this.state.subs = postsfetcher();
        */
        console.log("fetched sub =" + this.state.subs);
    }



    render() {
        return(
            <div className="?">
                <div className="mainHeader">
                    Best website ever
                </div>
                <SubmissionList data={this.state.subs}/>
            </div>

        )
    }
}

export default App;
