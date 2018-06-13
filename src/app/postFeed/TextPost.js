import React from 'react'
import { Link } from 'react-router-dom'
class TextPost extends React.Component {


    render() {

        return (

            <Link to={`PostDetails/${this.props.data.id}/text`}>
                <div className=" row">
                    <div className="col s6 offset-s3">

                        <div className="card ">
                            <div className="card-content white-text postCard">

                                <span className="card-title">{this.props.data.userDisplayName}</span>
                                <p>{this.props.data.text}</p>
                            </div>
                            <div className="card-action">
                                <h6><span>{this.props.data.commentsNum}</span> comments</h6>


                            </div>
                        </div>
                    </div>
                </div>
            </Link>





        )
    }


}

export {
    TextPost
}