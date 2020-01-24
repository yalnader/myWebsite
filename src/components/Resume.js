import React from 'react';
import Document from 'react-ionicons/lib/MdDocument'

class Resume extends React.Component{

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
            curColor = "#FFB13B"
            this.setState((state,props) => ({
                color: curColor,
                isHover: true
            }));
        }
        
    }
    
    render(){
        return(
            <div onMouseEnter={this.colorChange} onMouseLeave={this.colorChange}>
                <a href = "#" target="_blank">
                    <div>
                        <Document color= {this.state.color} fontSize={84}/>
                    </div>
                    <span style={{color: this.state.color}}>Resume</span>
                </a>
            </div>
        )
    }
}
export default Resume;

