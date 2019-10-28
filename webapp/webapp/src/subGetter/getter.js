import React from 'react';
import SubModel from "../Models/submodel";

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

class SubGetter extends React.Component {
    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);

        this.state = {
            isLoaded: true,
            items: {}
        }
    }

}
//https://www.reddit.com/r/worldnews/
export function postsfetcher_ext() {
    fetch("https://www.reddit.com/r/worldnews.json")
        .then(res => res.json())
        .then(
            (result) => {
                const subs = [];
                //Should return list of models.
                for (const item of result.data.children){
                    subs.push(SubModel.toSubModel(item))
                }
                return subs
            },
            // Error handler
            (error) => {
                console.log("could not connect to url" + "url");
                return null
            }
        )
}

export default SubGetter;