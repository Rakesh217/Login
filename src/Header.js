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

    render() {
        return(
        <form type="submit">
            <label name="username">UserName: </label>
            <input name="username" 
            type="email" 
            value={this.state.username}
            onChange={this.change}></input>
            <br />

            <label name="password">Password: </label>
            <input name="password" 
            type="text" 
            value={this.state.password} 
            onChange={this.change}></input>
            <br />

            <button type="submit" onClick={this.click}>Submit</button>
            <button type="reset">Reset</button>
        </form>
        )
    }
}

export default Header;