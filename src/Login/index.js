import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Login extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>Login</h1>
            <Link to="/"><button>Home</button></Link>
        </div>
      )
    }
}

export default Login;