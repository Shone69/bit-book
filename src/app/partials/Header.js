import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    logout = () => {
        localStorage.removeItem("sessionId")

    }


    render() {
        return (
            <header >
                <nav>
                    <div className="nav-wrapper headCss">
                        <a id="logoc" className="brand-logo">SpaceBook</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to='/FeedPage' id="feed">Feed</Link></li>
                            <li ><Link to='/People' id="peoplec">People</Link></li>
                            <li ><Link to='/MyProfile' id="profilec">Profile</Link></li>
                            <li onClick={this.logout}><Link to='/'>Log out</Link></li>

                        </ul>
                    </div>
                </nav>
            </header>

        )
    }
}
export { Header };