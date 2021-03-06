import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// import ProjectList from './components/projects/ProjectList';
import Navbar from './components/navbar/Navbar';
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Profile from './components/contents/Profile';
import Meetings from './components/contents/Meetings/Meetings';
import CreateMeeting from './components/contents/Meetings/CreateMeeting';
import UploadItem from './components/contents/Gallery/UploadItem';
import Item from './components/contents/Gallery/showItem';
import Home from './components/contents/Home';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
    })
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  render() {
    this.fetchUser()

    if(this.state.loggedInUser){
      return (
        <div className="App">
          <header className="">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
          </header>
          <div>
           
            <Switch>
            <Route exact path='/' render={() => 
            <Home/>}/>
            <Route exact path='/profile' render={() => 
            <Profile userInSession={this.state.loggedInUser}/>}/>
            <Route exact path='/meetings' render={() => 
            <Meetings/>}/>
            <Route exact path='/createmeeting' render={() => 
            <CreateMeeting/> } />
            <Route exact path='/submitart' render={() => 
            <UploadItem/> } />
            <Route exact path='/item/:id' component={Item} />
            </Switch>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Switch>
            <Route exact path='/' render={() => 
            <Home/>}/>
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            </Switch>
          </header>
        </div>
      );
    }
  }
}

export default App;