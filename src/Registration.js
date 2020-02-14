import React, { Component } from 'react';

class Registration extends Component{
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password1: '',
            password2: ''
        }
    }

    change(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    click() {
        if (this.state.password.length < 6) {
            alert("Password should contain more than 6 characters.");
        }
    }

    reset() {
        this.setState({
            ...this.setState,
            firstName: '',
            lastName: '',
            email: '',
            password1: '',
            password2: ''
        });
    }
    render(){
        return (
            <div>
                <h1>Registration</h1>
                <form>
                
                    <label name="firstName" 
                    className="label">First Name:</label>
                    <input name="firstName" 
                    type="text" 
                    value= {this.state.firstName} 
                    placeholder="First Name"
                    className="input"></input>
                    
                    <label name="lastName" 
                    className="label">Last Name:</label>
                    <input name="lastName" 
                    type="text" 
                    value= {this.state.lastName} 
                    placeholder="Last Name"
                    className="input"></input>
                    
                    <label name="email" 
                    className="label">Email:</label>
                    <input name="email" 
                    type="email" 
                    value={this.state.email}
                    onChange={this.change}
                    placeholder="Email"
                    className="input"></input>
                    
                    <label name="password1" 
                    className="label">Password:</label>
                    <input name="password1" 
                    type="password" 
                    value={this.state.password1} 
                    onChange={this.change}
                    placeholder="Password"
                    className="input"></input>
                    
                    <label name="password2" 
                    className="label">Confirm Password:</label>
                    <input name="password2" 
                    type="password" 
                    value={this.state.password2} 
                    onChange={this.change}
                    placeholder="Password"
                    className="input"></input>
                    
                </form>
                <button className="button" type="submit" onClick={this.click}>Submit</button>
                <button className="button" type="reset" onClick={this.reset}>Reset</button>
                <a href="./Login"><h3>Do you have account ?</h3></a>
            </div>
        );
    }
}

export default Registration;