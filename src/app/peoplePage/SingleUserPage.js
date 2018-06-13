import React, { Component } from "react"
import { fetchProfile } from '../services/fetchProfile'
import M from "materialize-css"
import { fetchSingleUserById } from "../services/fetchSingleUserById"



class SingleUserProfilePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: 0,
            name: "",
            email: "",
            aboutShort: "",
            about: "",
            avatarUrl: "",
            postsCount: this.props.data,
            commentsCount: this.props.data,


        }
    }

    getFeedData() {
        const sessionId = localStorage.getItem("sessionId")
        fetchSingleUserById(this.props.match.params.id, sessionId)
            .then((fetchedData) => {
                this.setState({
                    userId: fetchedData.userId,
                    name: fetchedData.name,
                    email: fetchedData.email,
                    aboutShort: fetchedData.aboutShort,
                    avatarUrl: fetchedData.avatarUrl,
                    postsCount: fetchedData.postsCount,
                    commentsCount: fetchedData.commentsCount
                })
            })
    }

    onUpdateProfile = (fullName, description, imgUrlUpdate) => {
        const sessionId = localStorage.getItem("sessionId")
        fetchEditProfile(fullName, description, imgUrlUpdate, "bla", 'neBla@com', sessionId).then(() => this.getFeedData())
    }

    componentDidMount() {
        const modalButton = document.querySelector('.modal');
        M.Modal.init(modalButton);
        this.getFeedData()
    }

    render() {
        return (
            <main>
                <div className="profileCard center">
                    <div className="container">
                        <img className='circle profileImg' src={this.state.avatarUrl} alt="" />
                        <h1>{this.state.name}</h1>
                        <div className="bla" > <p className="aboutSection">{this.state.aboutShort}</p></div>
                    </div>
                    <div className="row">
                        <div className="forum"> <i className="material-icons">forum</i><p className="postComment">Number of posts: {this.state.postsCount}</p></div>
                        <div className="comment"> <i className="material-icons">comment</i><p className="CommentNumber">Number of comments: {this.state.commentsCount}</p></div>
                    </div>
                    <p className="waves-effect waves-light btn modal-trigger" href="#modal1">Edit Profile</p>
                </div>
                <EditProfilePage onUpdateProfile={this.onUpdateProfile} />

            </main>

        )
    }

}

export { SingleUserProfilePage }