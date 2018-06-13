import { header } from "../../shared/headerData.js"

export const getSingleTextPost = (textId,sessionId) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/TextPosts/" + textId, {
        headers: {
            "Content-Type": "application/json",
            "Key": "838B7A0",
            "SessionId": sessionId        },
        method: 'GET'
    })
        .then((response) => {
            return response.json();
        })
}