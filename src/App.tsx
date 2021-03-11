import React from 'react';
import { Login } from './components/Login'
import { AuthService } from './services/AuthService';
import { Router, Route, Switch } from "react-router-dom";
import { Navbar } from './components/Navbar'
import { Home } from './components/home';
import history from './history'

interface AppState {
  userName: string | undefined
}

export class App extends React.Component<{}, AppState> {

  private authService: AuthService = new AuthService();

  render() {
    return(
    <div className='wrapper'>
      <Router history={history}>
        <div>
          <Navbar userName={undefined}></Navbar>
          <Switch>
            <Route exact path='/'  component={Home}/>
            <Route exact path='/login'>
              <Login authService={this.authService}></Login>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )}

}