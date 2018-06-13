import React, { Component } from 'react'



class EditProfilePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fullNameEdited: "",
            descriptionEdited: "",
            imgUrlUpdate: "",

        }
    }
    removeValue = () => {
        this.setState({ fullNameEdited: "", descriptionEdited: "", imgUrlUpdate: "" })
    }

    imgUrlUpdate = (event) => {
        this.setState({ imgUrlUpdate: event.target.value })
    }

    nameUpdate = (event) => {
        this.setState({ fullNameEdited: event.target.value })
    }

    descriptionUpdate = (event) => {
        this.setState({ descriptionEdited: event.target.value })
    }

    sendDataForUpdate = (event) => {
        event.preventDefault();
        const imgUrlUpdate = this.state.imgUrlUpdate
        const description = this.state.descriptionEdited
        const fullName = this.state.fullNameEdited
        this.props.onUpdateProfile(fullName, description, imgUrlUpdate)
        this.setState({ fullNameEdited: "", descriptionEdited: "", imgUrlUpdate: "" })
    }


    render() {
        return (
            <div id="modal1" className="modal editModal">
                <div className="modal-content editModal2">
                    <h4>Update Profile</h4>
                    <div className='row editProfile'>
                        <p className='noMarg' href="https://placeholder.com"><img className='editPic' src="http://via.placeholder.com/150x100" /></p>
                        <button className="btn waves-effect waves-light btn-small button" type="submit" name="action">UPLOAD PHOTO</button>
                    </div>
                </div>
                <div className="row inputName">
                    <div className="input-field col s6">
                        <input placeholder='Url to your profile image?' id="first_name2" type="text" className="validate" onChange={this.imgUrlUpdate} value={this.state.imgUrlUpdate} />
                        <label className="active" for="first_name2">Image Url</label>
                    </div>
                </div>
                <div className="row inputDesc">
                    <div className="input-field col s6">
                        <input placeholder={this.props.name} id="first_name2" type="text" className="validate" onChange={this.nameUpdate} value={this.state.fullNameEdited} />

                    </div>
                </div>
                <div className="row inputDesc">
                    <div className="input-field col s6">
                        <input placeholder={this.props.aboutShort} id="first_name2" type="text" className="validate" onChange={this.descriptionUpdate} value={this.state.descriptionEdited} />

                    </div>
                </div>
                <div className='buttonsOfModelUser'>
                    <p className="modal-action modal-close waves-effect waves-light btn" onClick={this.removeValue}>CLOSE</p>
                    <p className="modal-action modal-close waves-effect waves-light btn" onClick={this.sendDataForUpdate}>UPDATE</p>
                </div>

            </div>
        )
    }
}
export {
    EditProfilePage
}