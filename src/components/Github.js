import React from 'react';
import { Github } from '@icons-pack/react-simple-icons';


class GitHub extends React.Component{

    constructor(props){
        super(props);
        this.setState = {
            color : "#cd5c5c",
            isHover: false
        }
    }

    
    render(){
        return(
            <a href =  "https://github.com/yalnader" target="_blank">
                <div>
                    <Github  size={84} color={this.props.color} />
                </div>
                Github
            </a>
        )
    }
}
export default GitHub;





