
import { header } from "../../shared/headerData.js"

const fetchCreateTextPost = ((TextObj,sessionId) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/TextPosts", {
        body: JSON.stringify({
            text: TextObj.value
        }),
        headers: {
            "Content-Type": "application/json",
            "Key": "838B7A0",
            "SessionId": sessionId        },
        method: "POST"
    })
})

export {
    fetchCreateTextPost
}