import React, { useState } from "react";

interface  LoginState{
    uid :string,
    pwd : string,
    result  : string
}
 
class  Login extends React.Component<{}, LoginState>
{
    state = { uid : "", pwd : "", result : ""};

    
    buttonClick = () => {

        if(this.state.uid == "admin"  && this.state.pwd == "admin123")
            {
                this.setState({ result : "Welcome to Admin"});              
            }
            else
            {
                this.setState({ result : "Inalid user id or password"});   
            }           
    };

 
    render() {

    return (
    <>
            
            <h3>User Login  (React Class Components)</h3>

            <div>
                <fieldset>
                User Id :   <input type="text"  onChange={(e) => this.setState({uid : e.target.value})} /> 
                <br/> <br/>
                Password :  <input type="password" onChange={(e) => this.setState({pwd : e.target.value})} /> 
                <br/> <br/>
             
                <input type="button" onClick={this.buttonClick} value="Login" />
                <p>{this.state.result}</p>

                </fieldset>

            </div>

    </>);
    }
}

export default Login;