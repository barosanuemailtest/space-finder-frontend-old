import React, { SyntheticEvent } from "react";
import { AuthService } from "../services/AuthService";

interface ILoginState {
    userName: string,
    password: string,
    isLoggedIn: boolean,
    loginAttempted: boolean
}

interface ILoginProps {
    authService: AuthService
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends React.Component<ILoginProps, ILoginState>{

    state: ILoginState = {
        userName: '',
        password: '',
        isLoggedIn: false,
        loginAttempted: false
    }

    private setUserName(event: CustomEvent) {
        this.setState({ userName: event.target.value })
    }

    private setPassword(event: CustomEvent) {
        this.setState({ password: event.target.value })
    }

    private async handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        console.log(this.state)
    }





    render() {
        return (
            <div>
                <h2>Please login:</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input name='login' value={this.state.userName} onChange={e => this.setUserName(e)} /><br />
                    <input name='password' type='password' value={this.state.password} onChange={e => this.setPassword(e)} /><br />
                    <input type='submit' value='Login' />
                </form>
            </div>
        )
    }
}