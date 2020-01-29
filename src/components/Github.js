import React from 'react';
import { Github } from '@icons-pack/react-simple-icons';
// import '../App.css'


class GitHub extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color : "#cd5c5c",
            isHover: false,
            size : 84
        }
        this.colorChange = this.colorChange.bind(this);
        this.sizeChange = this.sizeChange.bind(this);
        // this.changeBack = this.changeBack.bind(this);
    }


    colorChange(){
        // this.changeBack();
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
            curColor = "#181717"
            this.setState((state,props) => ({
                color: curColor,
                isHover: true
            }));
        }
        
    }



    sizeChange(){


    }
    

    
    render(){
        return(
            <div onMouseEnter={this.colorChange } onMouseLeave={this.colorChange} onMouseOver={this.changeBack}>
                <a href =  "https://github.com/yalnader" target="_blank">
                    <div>
                        <Github  size={this.state.size} color={this.state.color} />
                    </div>
                    <span style={{color: this.state.color}}>Github</span>
                </a>
            </div>
        )
    }
}
export default GitHub;





