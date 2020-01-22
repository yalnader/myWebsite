import React from 'react';
import Document from 'react-ionicons/lib/MdDocument'

class Resume extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color : "#cd5c5c",
            isHover: false
        }
    }

    
    render(){
        return(
            <a href = "#" target="_blank">
                <div>
                    <Document color= "#cd5c5c" fontSize={84}/>
                </div>
                Resume
            </a>
        )
    }
}
export default Resume;

