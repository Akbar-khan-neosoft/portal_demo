import React, { Component } from 'react';
import "../../Assets/CSS/Header.css"
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'


class Header extends Component {

    logoutHandle=()=>{
        localStorage.setItem("login", "Flase")
        // this.setState({loginFlag:"false"})
        this.props.history.push('/');
    }

    render() {

        return (
            <div className="headercontainer">
                <div className="headerhomesection  btn">
                    <Link to="/"><i class="fa fa-home fa-3x" aria-hidden="true"></i></Link></div>
                <div className="headertitle">Job Portal</div>
                <div className="headerprofilesection" >
                    {localStorage.getItem("login") === "True" ? 
                     <div class="dropdown">
                     <button class="btn" type="button" data-toggle="dropdown">
                         <i class="fa fa-bars fa-3x" aria-hidden="true"></i>
                     </button>
                     <ul class="dropdown-menu">
                         <li> <Link to="/profile">Profile</Link></li>
                         <li> <a onClick={this.logoutHandle}>Logout</a> </li>
                        

                     </ul>
                 </div> : 
                    <div class="dropdown">
                        <button class="btn" type="button" data-toggle="dropdown">
                            <i class="fa fa-bars fa-3x" aria-hidden="true"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li> <Link to="/login">Login</Link></li>
                            <li> <Link to="/register">Register</Link></li>
                            <li> <Link to="/adminlogin">Admin Login</Link></li>

                        </ul>
                    </div> 
                   }
                </div>
            </div>
        )
    }
}
export default withRouter(Header);