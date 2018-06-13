import React from 'react';
import { getSingleVideoPost } from "../services/fetchSingleVideoPost";
import { fetchDeletePost } from "../services/fetchDeletePost"

class VideoSinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            videoUrl: "",
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
        getSingleVideoPost(this.props.data, sessionId)
            .then((fetchedData) => {

                this.setState({
                    videoUrl: fetchedData.videoUrl,
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
    changeVideoUrl = (inputUrl) => {
        let embededUrl = inputUrl.replace("watch?v=", "embed/")
        return embededUrl
    }
    deletePost = () => {
        const sessionId = localStorage.getItem("sessionId")
        fetchDeletePost(this.props.data, sessionId)
            .then(() => window.location.replace(`http://localhost:3000/#/`))
    }



    render() {

        return (




            <div className="videoPost row">


                <div className="col s6 offset-s3">
                    <div className="card ">
                        <div className="card-content white-text">
                            <iframe width="100%" height="315" src={this.changeVideoUrl(this.state.videoUrl)} frameborder="0" title="youtube video" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                        <div className="row">
                            <div className="card-action col s4">
                                <a >{this.state.userDisplayName}</a>
                                <h6><span>{this.state.commentsNum}</span> comments</h6>
                            </div>
                            <div className="col s2 offset-s5">
                                <a className="waves-effect waves-teal btn-flat">
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
    VideoSinglePost
}
