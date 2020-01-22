import React from 'react';
import './Table.css'
import { ReactJs } from '@icons-pack/react-simple-icons';
import { Github } from '@icons-pack/react-simple-icons';
import { Linkedin } from '@icons-pack/react-simple-icons';
import  Breifcase  from 'react-ionicons/lib/MdBriefcase';
import Document from 'react-ionicons/lib/MdDocument'
import { Fade } from 'react-animation-components'

function linkedinColor(b){

}

function Table(){

       return(
        <div className="Table">
            <Fade in>
            <table>
                <thead>

                
                </thead>

                <tbody>
                    <td >
                        <tr className="topRow">
                            <a href =  "https://github.com/yalnader" target="_blank">
                                <div>

                                <Github  size={84} />
                                </div>
                                Github
                            </a>
                        </tr>
                        <tr>
                            <a href="https://www.linkedin.com/in/yalnader/" target="_blank">
                                <div>
                                     <Linkedin id="linkedin"  size={84} onmouseover={linkedinColor()}/>
                                </div>
                                LinkedIn
                            </a>

                        </tr>
                    </td>
                    <td>
                        <tr className="topRow">
                            <a href = "" target="_blank">
                            <div>
                                <Breifcase color= "#cd5c5c" fontSize = {84}/>
                            </div>
                            Work
                            </a>
                        </tr>
                        <tr>
                            <a href = "" target="_blank">
                                <div>
                                    <Document color= "#cd5c5c" fontSize={84}/>
                                </div>
                                Resume
                            </a>
                        </tr>
                    </td>

                </tbody>
            </table>
            </Fade>
        </div>

       ) 

}

export default Table;