import { header } from "../../shared/headerData.js"

const fetchDeletePost = ((postId,sessionId) => {

    console.log(postId)
    return fetch(`http://bitbookapi.azurewebsites.net/api/Posts/${postId}`, {
        headers: {
            "Content-Type": "application/json",
            "Key": "838B7A0",
            "SessionId": sessionId        },
        method: "DELETE"
    })
})

export {
    fetchDeletePost
}