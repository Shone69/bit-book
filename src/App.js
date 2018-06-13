import React, { Component } from 'react';
import './App.css';
import { FeedPage } from "./app/postFeed/FeedPage"
import { Header } from '../src/app/partials/Header'
import { Footer } from './app/partials/Footer'
import { Route, Switch } from 'react-router-dom'
import { ViewPostDetails } from './app/viewPostDetails/PostDetails'
import { MyProfilePage } from './app/myProfile/MyProfilePage'
import { UsersPage } from './app/peoplePage/UsersPage'
import { SearchPeople } from "./app/peoplePage/SearchPeople"
import { UsersProfilePage } from './app/peoplePage/UsersProfilePage';
import { LoginRegister } from './app/myProfile/LogRegPage'

class App extends Component {
  render() {
    return (



      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={LoginRegister} />
          <Route exact path='/FeedPage' component={FeedPage} />
          <Route exact path='/PostDetails/:id/:type' component={ViewPostDetails} />
          <Route exact path='/MyProfile/' component={MyProfilePage} />
          <Route exact path='/People/' component={UsersPage} />
          <Route exact path='/Profile/:UserId' component={UsersProfilePage} />
        </Switch>
        <Footer />
      </React.Fragment>

    )
  }
}

export default App;

