import { header } from "../../shared/headerData.js"

export const fetchComments = (postId,sessionId) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/Comments?postId=" + postId, {
        headers: {
            "Content-Type": "application/json",
            "Key": "838B7A0",
            "SessionId": sessionId
        },
        method: 'GET'
    })
        .then((response) => {
            return response.json();
        })
}