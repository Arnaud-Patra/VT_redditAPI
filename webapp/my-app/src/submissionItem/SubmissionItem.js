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
function SumissionItem(props){
    return(
        <div className={'SubmissionItem'}>
            {props.id}
            {props.title}
            {props.url}
            {props.upvote}
        </div>
    )
}

function SubmissionList(props) {
    return (
        <div>
            {props.data.map(c => <SumissionItem key={c.id} name={c.title} url={c.url} upvote={c.upvote}/>)}
        </div>
    )
}

export default SubmissionList