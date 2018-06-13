import React from 'react';

import { fetchProfile } from "../services/fetchProfile"
import { getCommentsByPostId } from "../services/fetchCommentsByPostId"
import { SingleComment } from "./SingleComment"
import { InputComment } from './InputComment';
import { fetchCreateComment } from "../services/fetchCreateComment.js"


class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfComments: []
        }
    }

    getFeedData() {
        const sessionId = localStorage.getItem("sessionId")
        getCommentsByPostId(this.props.postId, sessionId)
            .then((commentsList) => {
                this.setState({
                    listOfComments: commentsList.reverse()
                })
            })
    }



    componentDidMount() {
        this.getFeedData()
    }

    createComment = (commentBody) => {
        const sessionId = localStorage.getItem("sessionId")
        fetchCreateComment(commentBody, this.props.postId, sessionId)
            .then(() => this.getFeedData())
    }
    render() {

        return (
            <div>
                <InputComment createComment={this.createComment} />
                {this.state.listOfComments.map((singlecomment) => {
                    return <SingleComment comment={singlecomment} />
                })}
            </div>

        )
    }
}

export {
    Comment
}