import React from 'react';
import { Link } from "react-router-dom";


class VideoPost extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    changeVideoUrl = (inputUrl) => {
        let embededUrl = inputUrl.replace("watch?v=", "embed/")
        return embededUrl
    }

    render() {

        return (


            <Link to={`PostDetails/${this.props.data.id}/video`}>

                <div className="videoPost">


                    <div className="col s6 offset-s3">
                        <div className="card ">
                            <div className="card-content white-text videoCard">
                                <iframe width="100%" height="315" src={this.changeVideoUrl(this.props.data.videoUrl)} title="youtube video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                            <div className="card-action">
                                <a href="#">{this.props.data.userDisplayName}</a>
                                <h6><span>{this.props.data.commentsNum}</span> comments... collapse comments</h6>
                            </div>

                        </div>
                    </div>

                </div>
            </Link>



        )

    }
}



export {
    VideoPost
}

// https:www.youtube.com/watch?v=CwjhxtBmQys 
// https://www.youtube.com/embed/ACmydtFDTGs