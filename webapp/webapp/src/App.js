import React from 'react';
import './App.css';
import SubmissionList from './submissionItem/Submission'
import SubModel from "./Models/submodel";

class App extends React.Component {
    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);

        this.state = {
            subs: []
        };

        const mod = new SubModel("www.init.com", "INit test",11)
        this.state.subs.push(mod);
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

    async componentDidMount() {
        const sub = new SubModel("www.google.com", "Leanne Graham", 11);
        this.setState({subs: [sub]});
        //this.state.subs.push(sub);

        /*
        const subs_fetched = this.postsfetcher();
        this.setState({subs: subs_fetched});
        */

        this.postsfetcher();

        console.log("fetched sub =" + this.state.subs);
    }

     postsfetcher() {
        fetch("https://www.reddit.com/r/worldnews.json")
            .then(res => res.json())
            .then(
                (result) => {
                    const subs = [];
                    //Should return list of models.
                    for (const item of result.data.children){
                        subs.push(SubModel.toSubModel(item))
                    }
                    //return subs
                    this.setState({subs: subs})
                },
                // Error handler
                (error) => {
                    console.log("could not connect to url" + "url");
                    return null
                }
            )
    }

    render() {
        return(
            <div className="body">
                <div className="mainHeader">
                    Best website ever
                </div>
                <SubmissionList data={this.state.subs}/>
            </div>

        )
    }
}

export default App;
