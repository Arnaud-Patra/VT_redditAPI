import React from 'react'
import App from "../App";
//
// class SubmossionItem extends App {
//     render() {
//         return (
//             <div>
//                 The data: {this.props.data}
//             </div>
//         )
//     }
// }

function SubmissionItem(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.data}>
            {props.data.id}
            {props.data.title}
            {props.data.url}
            {props.data.upvote}
        </div>
    )
}

export default SubmissionItem