import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Home extends Component{
    constructor(props){
      super(props);

    }

    render(){
      return(
        <div>
            <h1>Home</h1>
            <Link to="/Cadastro"><button>Cadastro</button></Link> <br/>
            <Link to="/Sobre"><button>Login</button></Link> 
        </div>
      )
    }
}

export default Home;