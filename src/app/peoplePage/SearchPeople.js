import React, { component } from 'react'
import { fetchUsers } from "../services/fetchUsers"

const SearchPeople = (props) => (
    <nav className="searchBar">
        <div class="nav-wrapper">
            <form>
                <div class="input-field">
                    <input id="search" type="search" value={props.value} onChange={props.filterUsers} />
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                </div>
            </form>
        </div>
    </nav>
)


export { SearchPeople }
