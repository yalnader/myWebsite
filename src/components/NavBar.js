import React from 'react';
import "./NavBar.css";
import Github from './Github.js';

class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }

    }

    render(){

        return(
            <div className="bar">

                <ul>

                    <li><Github/></li>

                </ul>

            </div>
        )


    }

}

export default NavBar;