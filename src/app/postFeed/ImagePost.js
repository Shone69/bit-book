import React from 'react'
import { Link } from 'react-router-dom'

class ImagePost extends React.Component {


    render() {

        return (
            <Link to={`PostDetails/${this.props.data.id}/image`}>
                <div className=" videoPost">
                    <div className="col s6 offset-s3">
                        <div className="card  ">
                            <div className="card-content white-text imageCard">

                                <img className="materialboxed" width="100%" src={this.props.data.imageUrl} alt="" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></img>
                            </div>
                            <div><a>{this.props.data.userDisplayName}</a>
                                <p><span>{this.props.data.commentsNum}</span> comments</p></div>

                        </div>
                    </div>
                </div>



            </Link>



        )
    }


}

export {
    ImagePost
}