import React from 'react';

class InputComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentBody: ""
        }
    }
    sendInputDataForComment = (event) => {
        event.preventDefault();
        const commentBody = this.state.inputBodyValue
        this.props.createComment(commentBody)

        this.setState({
            inputBodyValue: ""
        })
    }

    getInputValue = (event) => {
        this.setState({
            inputBodyValue: event.target.value
        })
    }



    render() {
        // console.log(this.props)
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6 offset-s2">
                            <i className="material-icons prefix"></i>
                            <div className="abcd">
                                <div className="postCommentBox">
                                    <textarea id="icon_prefix2" onChange={this.getInputValue} value={this.state.inputBodyValue} className="materialize-textarea textColor" placeholder="Enter your comment..."></textarea>
                                </div>
                            </div>
                            <button className="btn  buttonForm" type="submit" name="action" onClick={this.sendInputDataForComment}>
                                <i className="material-icons sendButton ">POST</i></button></div>
                    </div>
                </form>

            </div>
        )
    }
}

export {
    InputComment
}