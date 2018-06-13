import React from "react"

import {
    Register
} from "../myProfile/RegisterComponent"

const RegisterForm = ((username, password, name, email) => {
    return fetch("http://bitbookapi.azurewebsites.net/api/register", {
        body: JSON.stringify({
            username: username,
            password: password,
            name: name,
            email: email
        }),
        headers: {
            "Content-Type": "application/json",
            "Key": "838b7a0",
        },
        method: "POST"
    })
})

export {
    RegisterForm
}