import React from "react";
import { Link } from 'react-router-dom';




export class Navbar extends React.Component<{
    userName: string | undefined
}> {

render(){
    let loginLogoutPlaceHolder: any;
    if (this.props.userName) {
        loginLogoutPlaceHolder = <Link to='/logout' > {this.props.userName} </Link>
    } else {
        loginLogoutPlaceHolder = <Link to='/login' > Login </Link>
    } return <div className='topnav'>
        <Link to='/'> home</Link>
        <Link to='/home'> some stuff</Link>
        <Link to='/profile'> profile</Link>
        <Link to='/spaces'> spaces</Link>
        {loginLogoutPlaceHolder}
    </div>
}

}