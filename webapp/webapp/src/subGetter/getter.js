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
export function postsfetcher() {
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

function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

function fetchPosts(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit))
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)))
    }
}

export default SubGetter;