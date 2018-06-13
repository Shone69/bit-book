import React, { component } from "react"
import M from "materialize-css"

const ImgModal = (props) => {
    return (
        <div id="modalImage" className="modal">
            <div className="modal-content">
                <h4>New Image Post</h4>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea onChange={props.onImageChange} value={props.value} data-type="image" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea1">URL</label>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <div className="modal-footer">

                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat btn" onClick={props.postPost}>Post</a>
            </div>
        </div>

    )
}
export { ImgModal }