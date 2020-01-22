import React from 'react';
import  Breifcase  from 'react-ionicons/lib/MdBriefcase';

class Work extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color : "#cd5c5c",
            isHover: false
        }
    }

    
    render(){
        return(
            <a href = "" target="_blank">
                <div>
                    <Breifcase color= "#cd5c5c" fontSize = {84}/>
                </div>
                Work
            </a>
        )
    }
}
export default Work;

