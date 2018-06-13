import { header } from "../../shared/headerData.js"

export const fetchUsers = (sessionId) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/users/", {
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