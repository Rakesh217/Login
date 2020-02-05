import React from 'react';

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.change = this.change.bind(this);
        this.click = this.click.bind(this);
        this.reset = this.reset.bind(this);
    }

    change(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    click(){
        if(this.state.password.length < 6){
            alert("Password should contain more than 6 characters.");
        }
    }

    reset(){
        this.setState({
            ...this.setState,
            username: "",
            password: ""
        });
    }

    render() {
        return(
            <div className="form">
                    <h1>Login</h1>
                <form type="submit">
                    <label name="username" className="label">UserName: </label>
                    <input name="username" 
                    type="email" 
                    value={this.state.username}
                    onChange={this.change}
                    placeholder="Email"
                    className="input"></input>

                    <label name="password" className="label">Password: </label>
                    <input name="password" 
                    type="password" 
                    value={this.state.password} 
                    onChange={this.change}
                    placeholder="Password"
                    className="input"></input>

                    <button className="button" type="submit" onClick={this.click}>Submit</button>
                    <button className="button" type="reset" onClick={this.reset}>Reset</button>
                </form>
            </div>
        )
    }
}

export default Header;