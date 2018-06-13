import React from "react"
import M from "materialize-css"



const TextModal = (props) => {
    return (
        <div id="modalPost" className="modal">
            <div className="modal-content">
                <h4>New Post</h4>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea onChange={props.onTextChange} value={props.value} data-type="text" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea1">What's up?</label>
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
export { TextModal }