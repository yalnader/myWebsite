import React from 'react';
import { Github } from '@icons-pack/react-simple-icons';

class GitHub extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color : "#cd5c5c",
            isHover: false
        }
        this.colorChange = this.colorChange.bind(this);
    }

    colorChange(){
        let curColor;
        if(this.state.isHover){
            // curColor = "#000000" 
            curColor = "#cd5c5c"
            this.setState((state,props) => ({
                color: curColor,
                isHover: false
            }));
        }else{
            //curColor = "#cd5c5c"
            curColor = "#000000"
            this.setState((state,props) => ({
                color: curColor,
                isHover: true
            }));
        }
        
    }
    
    render(){
        return(
            <div onMouseEnter={this.colorChange} onMouseLeave={this.colorChange}>
            <a href =  "https://github.com/yalnader" target="_blank">
                <div>
                    <Github  size={84} color={this.state.color} />
                </div>
                <span style={{color: this.state.color}}>Github</span>
            </a>
            </div>
        )
    }
}
export default GitHub;





