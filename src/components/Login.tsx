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
        this.setState({loginAttempted: true})
        event.preventDefault();
        const authResponse = await this.props.authService.login(
            this.state.userName,
            this.state.password
        )
        if (authResponse) {
            console.log(authResponse)
            this.setState({
                isLoggedIn: true
            })
        } else {
            this.setState({
                isLoggedIn: false
            })
        }
    }





    render() {
        let loginLabel;
        if (this.state.loginAttempted) {
            if (this.state.isLoggedIn) {
                loginLabel = <label>Login succesfull</label>
            } else {
                loginLabel = <label>Login failed</label>
            }
        }

        return (
            <div>
                <h2>Please login:</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input name='login' value={this.state.userName} onChange={e => this.setUserName(e)} /><br />
                    <input name='password' type='password' value={this.state.password} onChange={e => this.setPassword(e)} /><br />
                    <input type='submit' value='Login' />
                </form>
                {loginLabel}
            </div>
        )
    }
}