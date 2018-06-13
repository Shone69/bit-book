import React from 'react';
import { getSingleTextPost } from "../services/fetchSingleTextPost"
import { fetchDeletePost } from "../services/fetchDeletePost"

class TextSinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            id: this.props.data,
            dateCreated: "",
            userId: "",
            userDisplayName: "",
            type: "",
            commentsNum: 0

        }
    }


    getFeedData() {
        const sessionId = localStorage.getItem("sessionId")
        getSingleTextPost(this.props.data, sessionId)
            .then((fetchedData) => {

                this.setState({
                    text: fetchedData.text,
                    dateCreated: fetchedData.dateCreated,
                    userId: fetchedData.userId,
                    userDisplayName: fetchedData.userDisplayName,
                    type: fetchedData.type,
                    commentsNum: fetchedData.commentsNum
                })
            })
    }
    componentDidMount() {
        this.getFeedData()
    }

    deletePost = () => {
        const sessionId = localStorage.getItem("sessionId")
        fetchDeletePost(this.props.data, sessionId)
            .then(() => window.location.replace(`http://localhost:3000/#/`))
    }



    render() {

        return (




            <div className="row">
                <div className="col s6 offset-s3">
                    <div className="card">
                        <div className="card-content white-text">
                            <span className="card-title">{this.state.userDisplayName}</span>
                            <p>{this.state.text}</p>
                        </div>
                        <div className="card-action">

                            <div className="row">
                                <h6 className="col s4"><span>{this.state.commentsNum}</span> comments</h6>
                                <a className="waves-effect waves-teal btn-flat col s2 offset-s5">
                                    <i className="material-icons white-text" onClick={this.deletePost}>delete_forever</i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        )

    }
}



export {
    TextSinglePost
}
