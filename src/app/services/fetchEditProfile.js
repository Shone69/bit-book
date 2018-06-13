import { header } from "../../shared/headerData.js"

const fetchEditProfile = ((name, description, image, about, email,sessionId) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/Profiles", {
        body: JSON.stringify({
            name: name,
            aboutShort: description,
            avatarUrl: image,
            about: about,
            email: email
        }),
        headers: {
            "Content-Type": "application/json",
            "Key": "838B7A0",
            "SessionId": sessionId        },
        method: "PUT"
    })
})

export {
    fetchEditProfile
}