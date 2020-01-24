import React from 'react';
import './Table.css'
import { ReactJs } from '@icons-pack/react-simple-icons';
import Github from './components/Github';
import LinkedIn from './components/Linkedin';
import Work  from './components/Work';
import Resume  from './components/Resume';
import { Fade } from 'react-animation-components'

class Table extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            work : false
        }
        // this.handlerWork = this.handlerWork.bind(this)

    }

    // handlerWork(){

    //     this.setState({
    //         work : true
    //     })
    //     console.log("The state has been set to true")

    // }

    render(){
       return(
        <div className="Table">
            <Fade in>
                <table>
                    <thead>


                    
                    </thead>

                    <tbody>
                        <td >
                            <tr className="topRow">
                                <Github/>
                            </tr>
                            <tr>
                                <LinkedIn/>
                            </tr>
                        </td>
                        <td>
                            <tr className="topRow" onClick = {this.props.handleWork}>
                                <Work />
                            </tr>
                            <tr>
                                <Resume/>
                            </tr>
                        </td>

                    </tbody>
                </table>
            </Fade>
        </div>

       ) 
    }

}

export default Table;