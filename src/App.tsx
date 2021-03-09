import React from 'react';
import { Login } from './components/Login'

interface AppState {
  userName: string | undefined
}

export class App extends React.Component<{}, AppState> {

  render() {
    return(
    <div>
      Hello to the best app!<br/>
      <Login></Login>
    </div>
  )}

}