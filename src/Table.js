import React from 'react';
import './Table.css'
import { ReactJs } from '@icons-pack/react-simple-icons';
import { Github } from '@icons-pack/react-simple-icons';
import { Linkedin } from '@icons-pack/react-simple-icons';
import  Breifcase  from 'react-ionicons/lib/MdBriefcase';
import Document from 'react-ionicons/lib/MdDocument'
function Table(){

       return(
        <div className="Table">
            <table>
                <thead>

                
                </thead>

                <tbody>
                    <td>
                        <tr>
                            <div>

                            <Github color="#000000" size={84} />
                            </div>
                            Git Hub
                        </tr>
                        <tr>
                        <div>

                            <Linkedin color="#000000" size={84} />
                        </div>
                        LinkIn

                        </tr>
                    </td>
                    <td>
                        <tr>
                            <div>
                                <Breifcase fontSize = {84}/>
                            </div>
                            Work Navigate to work tab
                        </tr>
                        <tr>
                        <div>
                            <Document fontSize={84}/>
                        </div>
                        Resume
                            
                        </tr>
                    </td>

                </tbody>
            </table>
        </div>

       ) 

}

export default Table;