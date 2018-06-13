import { header } from "../../shared/headerData.js"

const fetchCreateVideoPost = ((VideoObj,sessionId) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/VideoPosts", {
        body: JSON.stringify({
            videoUrl: VideoObj.value
        }),
        headers: {
            "Content-Type": "application/json",
            "Key": "838B7A0",
            "SessionId": sessionId        },
        method: "POST"
    })
})

export {
    fetchCreateVideoPost
}