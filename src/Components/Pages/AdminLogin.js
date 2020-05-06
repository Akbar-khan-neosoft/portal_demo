import React, { Component } from 'react'
import '../../Assets/CSS/Login.css'
import axios from 'axios'
import { withRouter } from 'react-router'


class AdminLogin extends Component {
    constructor() {
        super()
        this.state = {
            Username: '',
            Password: ''
        }
    }

    handleChange=(e)=>{
        const{name,value}=e.target
        this.setState({[name]:value})
    }

    onsubmithandle=async()=>{
        const{Username,Password}=this.state
        if(Username==="AdminUsername" && Password==="AdminPassword" )
        {
            alert("Login Successfull")
            localStorage.setItem("Adminlogin", "True");
            this.props.history.push('/adminportal');
        }
        else
        {
            alert("Invalid Details")
        }
    }

    render() {
        
        return (
            <div className="logincontainer">
                <div className="loginform">
                    <form>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="Text" name="Username" class="form-control" placeholder="Username" onChange={this.handleChange} /></div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="Password" name="Password" class="form-control" placeholder="Password" onChange={this.handleChange} /></div>
                    </form>
                </div>
                <div className="loginbutton">
                    <button onClick={this.onsubmithandle} style={{ width: "50%", height: "40px", marginLeft: "25%", backgroundColor: "lightblue" }}>Login</button>
                </div>
            </div>
        )
    }
}

export default withRouter(AdminLogin)