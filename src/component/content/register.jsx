import React, { Component } from 'react';
import Base from './base';
import $ from 'jquery';


class Register extends Component {
    state = { 
        error_message: "",
        username: "",
        password: "",
        password_confirm: "",
     } 
    handleClick = e => {
        e.preventDefault();
        if(this.state.username === ""){
            this.setState({error_message: "The username cannot be empty!"});      
        } else if(this.state.password === ""){
            this.setState({error_message: "The password cannot be empty!"});
        }
        else if(this.state.password === ""){
            this.setState({error_message: "The confirmed password cannot be empty!"});
        }
        else if(this.state.password !== this.state.password_confirm){
            this.setState({error_message: "The password should be the same!"});
        }else{
            // $.ajax({
            //     url: "https://127.0.0.1:3000/calculator/login/",
            //     type: "get",
            //     data: {
            //         username: this.state.username,
            //         password: this.state.password,
            //         password_confirm: this.state.password_confirm,
            //     },
            //     dataType: "json",
            //     success: resp => {
            //         if(resp.result === "success"){
            //             window.location.href="/calculator/";
            //         } else {
            //             this.setState({error_message: resp.result});
            //         }
            //     }
            // }) // register function api. used for backend server.
            window.location.href="/calculator/";
        }
    }
    render() { 
        return (
            <Base>
                <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-sm-3">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input onChange={(e) => {this.setState({username: e.target.value})}} type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input onChange={(e) => {this.setState({password: e.target.value})}} type="password" className="form-control" id="password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password_confirm" className="form-label">Confirmed Password</label>
                                <input onChange={(e) => {this.setState({password_confirm: e.target.value})}} type="password_confirm" className="form-control" id="password" />
                            </div>
                            <div style={{height: "2rem", color: "red"}}>
                                {this.state.error_message}
                            </div>
                            <button onClick={this.handleClick} style={{width: "100%"}} type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            </Base>
        );
    }
}
 
export default Register;