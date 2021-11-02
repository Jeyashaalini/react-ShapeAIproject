import React, { Component } from "react";


import { Card, CardContent, Grid, FormControl, Typography, TextField } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';


const style = {
  root: {
    minWidth: 275,
    backgroundColor:'white',
    marginTop: 20,
    color: 'black',
border:'groove'
  },
}

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      message: "",
      successful: false
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister = (e) => {
    e.preventDefault();

    if (this.state.username && this.state.email && this.state.password) {
      console.log(this.state.username + " " + this.state.password + " " + this.state.email)
      this.setState({
        successful: true,
        message: "Registered successfully"
      })
    } else {
      this.setState({
        successful: false,
        message: "username/password/email is empty"
      })
    }
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={4}/>
        <Grid item xs={1}/>
        <Grid item xs={3}>
          <Card style={style.root}>
              <CardContent>
                <form onSubmit={this.handleRegister}>
                  {!this.state.successful && (
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <AccountCircle style={{ fontSize: 80 }}/>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <label htmlFor="username"><b>Username</b></label>
                          <TextField type="text" name="username" value={this.state.username}
                            onChange={this.onChangeUsername}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <label htmlFor="email"><b>Email</b></label>
                          <TextField type="text" name="email" value={this.state.email}
                            onChange={this.onChangeEmail}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <label htmlFor="password"><b>Password</b></label>
                          <TextField type="password" name="password" value={this.state.password}
                            onChange={this.onChangePassword}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <button><b>Sign Up</b></button>
                        </FormControl>
                      </Grid>
                  </Grid>
                  )}
                  {
                    this.state.message && (
                    <div>
                      <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                  )
                  }
                </form>
              </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
    );
  }
}
