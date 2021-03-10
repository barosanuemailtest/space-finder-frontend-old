import React from 'react';
import { Login } from './components/Login'
import { AuthService } from './services/AuthService';

interface AppState {
  userName: string | undefined
}

export class App extends React.Component<{}, AppState> {

  private authService: AuthService = new AuthService();

  render() {
    return(
    <div>
      Hello to the best app!<br/>
      <Login authService= {this.authService}></Login>
    </div>
  )}

}