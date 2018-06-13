import React from 'react';
import { SingleUser } from '../peoplePage/SingleUser'
import { fetchUsers } from "../services/fetchUsers"
import { SearchPeople } from "./SearchPeople"

class UsersPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            listOfUsers: [],
            filteredUsers: [],
            searchValue: ""
        }
    }

    getFeedData() {
        const sessionId = localStorage.getItem("sessionId")
        fetchUsers(sessionId)
            .then((userList) => {
                this.setState({
                    listOfUsers: userList,
                    filteredUsers: userList
                })
                console.log(userList)
            })
    }


    componentDidMount() {
        this.getFeedData()
    }



    searchUser = (event) => {
        this.setState({ searchValue: event.target.value });

        const filteredUsers = this.state.listOfUsers.filter((user) => {
            const value = event.target.value.toLowerCase()
            const name = user.name.toLowerCase()
            if (name.includes(value)) {
                return user
            }
        })

        this.setState({
            filteredUsers
        })
    }

    render() {
        return (
            <main >
                <SearchPeople value={this.state.searchValue} filterUsers={this.searchUser} />
                <div className=" container mainFeed "  >
                    {
                        this.state.filteredUsers.map((singleUser) => {
                            return <SingleUser user={singleUser} />
                        })
                    }

                </div>
            </main>
        )
    }
}
export {
    UsersPage
}