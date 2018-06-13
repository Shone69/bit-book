import React from 'react'
import M from "materialize-css"
import { VideoModal } from "../modals/VideoModal"
import { ImgModal } from "../modals/ImgModal"
import { TextModal } from "../modals/TextModal"
class CreatePostButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
            type: "",
            error: ""
        }
    }

    componentDidMount() {
        const floatButton = document.querySelector('.fixed-action-btn');
        const buttonInstance = M.FloatingActionButton.init(floatButton);

        const modalVideo = document.querySelector('#modalVideo');
        M.Modal.init(modalVideo);

        const modalImage = document.querySelector('#modalImage');
        M.Modal.init(modalImage);

        const modalPost = document.querySelector('#modalPost');
        M.Modal.init(modalPost);
    }

    checkVideoUrl = (postData) => {
        let checkStringValueWatch = postData.value.slice(23, 32)
        let checkStringValueEmbed = postData.value.slice(23 - 30)
        let watchAfter = postData.value.slice(32, postData.value.length)
        let embedAfter = postData.value.slice(30, postData.value.length)

        let checkValueFirstPart = postData.value.slice(0, 23);

        if (checkValueFirstPart === "https://www.youtube.com") {
            if (checkStringValueWatch === '/watch?v=' && watchAfter.length === 11) {
                this.props.onCreatePost(postData)

            } else if (checkStringValueEmbed === "/embed/" && embedAfter.length === 11) {
                this.props.onCreatePost(postData)

            } else {
                alert("Video link not Support!!!")
            }
        } else {
            alert("Video link not Support!!!")
        }
    }

    checkImageUrl = (postData) => {
        // const extensions = ["jpg", "gif", ""]
        let checkValueExtension = postData.value.slice(postData.value.length - 3, postData.value.length)
        if (checkValueExtension === "jpg" || checkValueExtension === "gif" || checkValueExtension === "png" || checkValueExtension === "bpm" || checkValueExtension === "JPG" || checkValueExtension === "GIF" || checkValueExtension === "PNG" || checkValueExtension === "BPM") {
            this.props.onCreatePost(postData)
        } else {
            alert("Image link not Support!!!")
        }
    }



    createPost = (event) => {
        event.preventDefault();

        const postData = {
            value: this.state.value,
            type: this.state.type,
        }
        if (postData.type === "video") {
            this.checkVideoUrl(postData)
        } else if (postData.type === "image") {
            this.checkImageUrl(postData)
        } else if (postData.type === "text") {
            this.props.onCreatePost(postData)
        }

        this.setState({
            value: " ",
            type: " "
        })
    }

    onValueChange = (event) => {
        this.setState({
            value: event.target.value,
            type: event.target.getAttribute("data-type")
        })

    }


    // https://www.youtube.com/watch?v=-f57lF0pKSA
    // https://www.youtube.com/embed/7wtfhZwyrcc
    render() {

        return (

            <div className="row">




                <div className="fixed-action-btn horizontal click-to-toggle">
                    <a className="btn-floating btn-large proba">
                        <i className="large material-icons">mode_edit</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating red modal-trigger proba1" href="#modalVideo"><i className="material-icons">video_library</i></a></li>
                        <li><a className="btn-floating green modal-trigger proba2" href="#modalImage"><i className="material-icons">photo_library</i></a></li>
                        <li><a className="btn-floating blue modal-trigger proba3" href="#modalPost"><i className="material-icons">textsms</i></a></li>
                    </ul>
                </div>


                <VideoModal onVideoChange={this.onValueChange} value={this.state.value} postPost={this.createPost} />
                <ImgModal onImageChange={this.onValueChange} value={this.state.value} postPost={this.createPost} />
                <TextModal onTextChange={this.onValueChange} value={this.state.value} postPost={this.createPost} />


            </div>
        )
    }
}

export { CreatePostButton }
