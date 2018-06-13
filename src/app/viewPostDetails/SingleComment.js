import React from 'react';
import {
    fetchProfile
} from "../services/fetchProfile"

class SingleComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            avatarUrl: ""

        }
    }
    getFeedData() {
        const sessionId = localStorage.getItem("sessionId")
        fetchProfile(sessionId)
            .then((fetchedData) => {
                this.setState({
                    avatarUrl: fetchedData.avatarUrl,

                })
            })
    }

    componentDidMount() {
        this.getFeedData()
    }

    render() {

        return (
            <li className=" card commentCard collection-item avatar col s6 offset-s3">
                <div className="row ">
                    <div className=" col s3">
                        <img src={this.state.avatarUrl} alt="" className="circle col s11 commentAvatar" />
                        <h6 className="title titleName avatarName ">{this.props.comment.authorName}</h6>
                    </div>
                    <p className="col s8  commentBox">
                        {this.props.comment.body}
                    </p>
                </div>
            </li>
        )
    }
}

export {
    SingleComment

}
