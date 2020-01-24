import React from 'react';
import "./WorkPage.css";
import NavBar from './NavBar';


class WorkPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            working : false
        }

    }

    render(){

        return(
            <div className = "main">

                <h1>Test</h1>
                <NavBar/>


            </div>   


        )

    }


}

export default WorkPage;