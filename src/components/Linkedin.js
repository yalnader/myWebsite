import React from 'react';
import { Linkedin } from '@icons-pack/react-simple-icons';

class LinkedIn extends React.Component{

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
            curColor = "#0077B5"
            this.setState((state,props) => ({
                color: curColor,
                isHover: true
            }));
        }
        
    }
    render(){
        return(
            <div onMouseEnter={this.colorChange} onMouseLeave={this.colorChange}>
                <a href="https://www.linkedin.com/in/yalnader/" target="_blank">
                    <div>
                        <Linkedin id="linkedin"  size={84} color = {this.state.color}/>
                    </div>
                    <span style={{color: this.state.color}}>LinkedIn</span>
                </a>
            </div>
        )
    }
}
export default LinkedIn;

