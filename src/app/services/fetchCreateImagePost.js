import { header } from "../../shared/headerData.js"

const fetchCreateImagePost = ((ImageObj,sessionId) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/ImagePosts", {
        body: JSON.stringify({
            imageUrl: ImageObj.value
        }),
        headers: {
            "Content-Type": "application/json",
            "Key": "838B7A0",
            "SessionId": sessionId        },
        method: "POST"
    })
})

export {
    fetchCreateImagePost
}