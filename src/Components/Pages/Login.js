import React, { Component } from 'react'
import '../../Assets/CSS/Login.css'
import axios from 'axios'
import { withRouter } from 'react-router'



class Login extends Component {
    constructor() {
        super()
        this.state = {
            Email: '',
            Password: ''
        }
    }

    handleChange=(e)=>{
        const{name,value}=e.target
        this.setState({[name]:value})
    }

    onsubmithandle=async()=>{
        const{Email,Password}=this.state
        const res = await axios.get("http://localhost:4000/logindata")
        const result = res.data.findIndex(res=>{
            return(
                res.Email === Email
            )
        })
        if(result=="-1")
        {
            alert("No Such Email Registered With Us, Kindly Regiter First")
        }
        else if(res.data[result].Email===Email && res.data[result].Password===Password ){
            alert("Login Successfull") 
            localStorage.setItem("login", "True");
            this.props.history.push('/');
        }else {
            alert("Invalid Password")
        }
    }

    render() {
        
        return (
            <div className="logincontainer">
                <div className="loginform">
                    <form>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="Email" name="Email" class="form-control" placeholder="Email" onChange={this.handleChange} /></div>
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

export default withRouter(Login)