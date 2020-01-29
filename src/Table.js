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
            work : false,
            backColor: 'App'
        }
        this.githubColor = this.githubColor.bind(this)
        this.linkedinColor =this.linkedinColor.bind(this);
        this.workColor =this.workColor.bind(this);
        this.resumeColor =this.resumeColor.bind(this);

    }

    githubColor(){
        console.log("github Color is wokring");
        this.setState((state,props) => ({
            backColor: 'github'
        }));
        console.log(this.state.backColor);

    }
    linkedinColor(){
        console.log("linkedin Color is wokring");
        this.setState((state,props) => ({
            backColor: 'linkedin'
        }));
        console.log(this.state.backColor);

    }
    resumeColor(){
        console.log("resume Color is wokring");
        this.setState((state,props) => ({
            backColor: 'resume'
        }));
        console.log(this.state.backColor);

    }
    workColor(){
        console.log("work Color is wokring");
        this.setState((state,props) => ({
            backColor: 'work'
        }));
        console.log(this.state.backColor);

    }

    handleColor = ()=>{
        this.props.parentMethod(this.state.backColor);
    }

    render(){
       return(
        <div className="Table">
            <Fade in>
                <table onMouseOver ={this.handleColor}>
                    <thead>


                    
                    </thead>

                    <tbody>
                        <td >
                            <tr className="topRow" onMouseEnter={this.githubColor}>
                                <Github />
                            </tr>
                            <tr onMouseEnter={this.linkedinColor}>
                                <LinkedIn/>
                            </tr>
                        </td>
                        <td>
                            <tr className="topRow" onMouseEnter={this.workColor}>
                                <Work />
                            </tr>
                            <tr onMouseEnter={this.resumeColor}>
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