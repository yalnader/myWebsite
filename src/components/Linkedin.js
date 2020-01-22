import React from 'react';
import { Linkedin } from '@icons-pack/react-simple-icons';

class LinkedIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color : "#cd5c5c",
            isHover: false
        }
    }

    
    render(){
        return(
            <a href="https://www.linkedin.com/in/yalnader/" target="_blank">
                <div>
                    <Linkedin id="linkedin"  size={84} color = {this.props.color}/>
                </div>
                LinkedIn
            </a>
        )
    }
}
export default LinkedIn;

