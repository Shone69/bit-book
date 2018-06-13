import React, {
    Componenet
} from 'react'
import M from "materialize-css"

const VideoModal = (props) => {

    return (
        <div id="modalVideo" className="modal">
            <div className="modal-content">
                <h4>New Video Post</h4>
                <div className="row">
                    <form className="col s12">
                        <div className="row">

                            <textarea onChange={props.onVideoChange} value={props.value} data-type="video" className="materialize-textarea video-make-post" ></textarea>
                            <label htmlFor="textarea1" value="iuygigiug" >URL</label>
                            {/* <p> {this.state.error}</p> */}
                        </div>


                    </form>
                </div>

            </div>
            <div className="modal-footer">

                <p className="modal-action modal-close waves-effect waves-green btn-flat btn" onClick={props.postPost}>Post</p>
            </div>
        </div>
    )
}
export { VideoModal }