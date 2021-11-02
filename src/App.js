import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ContactsIcon from '@material-ui/icons/Contacts';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";
import { AccountCircle } from "@material-ui/icons";
import Footer from "./components/Footer";

const style = {
  paper: {
    flexGrow: 1,
    backgroundColor: 'black',
    color: 'white'
  },
  menuButton: {
    spacing: 2,
  },
  link: {
    underline: 'none'
  },
  appBar: {
    backgroundColor: "black"
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    let user;
    if (localStorage.getItem('username')) {
      user = {
        username: localStorage.getItem('username'),
        id: localStorage.getItem('id'),
        email: localStorage.getItem('email'),
        roles: localStorage.getItem('roles'),
      };
    }

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
    }
  }

  logOut () {
    localStorage.clear()
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <Router>
        <div>
          <AppBar position="static" style={style.appBar}>
            <Toolbar>
              <Paper style={style.paper} elevation={0}>
                <IconButton edge="start" style={style.Contacts} color="inherit" aria-label="menu">
                  <ContactsIcon />
                </IconButton>
                <Button href="/" color='inherit'>
                  <Typography><strong>User Application</strong></Typography>
                </Button>
                <Button href="/home" color='inherit'>
                  <strong>Home</strong>
                </Button>
                
                {showAdminBoard && (
                  <Button href="/admin" color='inherit'>
                    <strong>Admin Board</strong>
                  </Button>
                )}
                {currentUser && (
                  <Button href="/user" color='inherit'>
                    <strong>User</strong>
                  </Button>
                )}
              </Paper>
              
              {currentUser ? (
                <Paper style={{'backgroundColor': 'black', 'color': 'white'}} elevation={0}>
                  <Button href="/profile" color='inherit'>
                    <AccountCircle style={{ fontSize: 40 }}/>
                    <strong>{currentUser.username}</strong>
                  </Button>
                  <Button href="/login" color='inherit' onClick={this.logOut}>
                    <strong>LogOut</strong>
                  </Button>
                </Paper>
              ) : (
                <Paper style={{'backgroundColor': 'black', 'color': 'white'}} elevation={0}>
                  <Button href="/login" color='inherit'>
                    <strong>Login</strong>
                  </Button>
                  <Button href="/register" color='inherit'>
                    <strong>Sign Up</strong>
                  </Button>
                </Paper>
              )}
            </Toolbar>
          </AppBar>

          <div>
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
