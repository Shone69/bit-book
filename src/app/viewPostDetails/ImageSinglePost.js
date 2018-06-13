import React from 'react';
import { getSingleImagePost } from "../services/fetchSingleImagePost"
import { fetchDeletePost } from "../services/fetchDeletePost"

class ImageSinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: "",
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
        getSingleImagePost(this.props.data, sessionId)
            .then((fetchedData) => {

                this.setState({
                    imageUrl: fetchedData.imageUrl,
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




            <div className="videoPost row">

                <div className="col s6 offset-s3">
                    <div className="card ">
                        <div className="card-content white-text">

                            <img width="100%" src={this.state.imageUrl} frameBorder="0" allow="autoplay; encrypted-media" alt=' is not valid .|.' allowFullScreen></img>
                        </div>

                        <div className="row">
                            <div className="col s4">
                                <a>{this.state.userDisplayName}</a>
                                <p className="imageText"><span>{this.state.commentsNum}</span> comments</p>
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
    ImageSinglePost
}
