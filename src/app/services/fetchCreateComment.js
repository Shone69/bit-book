import { header } from "../../shared/headerData.js"

const fetchCreateComment = ((commentBody, postId,sessionId) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/Comments", {
        body: JSON.stringify({
            body: commentBody,
            postId: postId
        }),
        headers: {
            "Content-Type": "application/json",
            "Key": "838B7A0",
            "SessionId": sessionId        },
        method: "POST"
    })
})

export {
    fetchCreateComment
}