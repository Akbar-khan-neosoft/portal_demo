import React, { Component } from "react"
import axios from "axios"
import '../../Assets/CSS/Register.css'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            Name: "",
            Email: "",
            Mobile: "",
            Education: "",
            Age: "",
            Password: "",
            confirmPassword: "",
            City: "",
            State: ""
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log(name, value);

        this.setState({ [name]: value });
    }

    onsubmithandle = async () => {
        const { Name, Email, Mobile, Education, Age, Password, City,State } = this.state;
        let data = {
            Name: Name,
            Email: Email,
            Mobile: Mobile,
            Education: Education,
            Age: Age,
            Password: Password,
            City: City,
            State: State
        }

        const res = await axios.post("http://localhost:4000/logindata", data)
        if (res.statusText === "Created") {
            alert("Registration Successfull")
        } else { alert("Error") }



    }

    render() {

        // console.log(this.state.Name, this.state.Email, this.state.Mobile, this.state.City,
        //     this.state.State, this.state.Password, this.state.confirmPassword, this.state.Education, this.state.Age);

        return (
            <div className="registercontainer">
                <div className="registertitle">Register</div>
                <hr></hr><hr></hr>
                <div className="registerform">
                    <form>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="Text" name="Name" class="form-control" placeholder="Name" onChange={this.handleChange} /></div>
                        <div class="form-group">
                            <label>Age</label>
                            <input type="Text" name="Age" class="form-control" placeholder="Age" onChange={this.handleChange} /></div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="Email" name="Email" class="form-control" placeholder="Email" onChange={this.handleChange} /></div>
                        <div class="form-group">
                            <label>Mobile</label>
                            <input type="Text" name="Mobile" class="form-control" placeholder="Mobile" onChange={this.handleChange} /></div>
                        <div class="form-group">
                            <label>Education</label>
                            <input type="Text" name="Education" class="form-control" placeholder="Highest Education" onChange={this.handleChange} /></div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="Password" name="Password" class="form-control" placeholder="Password" onChange={this.handleChange} /></div>
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input type="Password" name="confirmPassword" class="form-control" placeholder="Confirm Password" onChange={this.handleChange} /></div>
                        <div class="form-group">
                            <label>City</label>
                            <input type="Text" name="City" class="form-control" placeholder="City" onChange={this.handleChange} /></div>
                        <div class="form-group">
                            <label>State</label>
                            <input type="Text" name="State" class="form-control" placeholder="State" onChange={this.handleChange} /></div>

                    </form>
                </div>
                <div className="registerbutton">
                    <button onClick={this.onsubmithandle} style={{ width: "50%", height: "40px", marginLeft: "25%", backgroundColor: "lightblue" }}>Register</button>
                </div>
            </div>
        )
    }
}

export default Register;