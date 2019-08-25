import React from 'react'
import "./SubmissionStyle.css";


function SubmissionItem(props){
    return(
        <div className="submissionItem">
            {props.key}
            <div className="subtitle">
                {props.title}
            </div>
            <div className='url'>
                {props.url}
            </div>
            <div className="upvote">
                {props.upvote}
            </div>
        </div>
    )
}

function SubmissionList(props) {
    return(
        <div className="submissionList">
            {props.data.map(c => <SubmissionItem key={c.id} title={c.title} url={c.url} upvote={c.upvote}/>)}
        </div>
    )
}

export default SubmissionList