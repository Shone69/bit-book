import { header } from "../../shared/headerData.js"

export const getSingleImagePost = (imageId,sessionId) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/ImagePosts/" + imageId, {
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