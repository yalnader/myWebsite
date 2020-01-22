import React from 'react';
import './Table.css'
import { ReactJs } from '@icons-pack/react-simple-icons';
import { Icon as Github}  from './components/Github';
import { Icon as Linkedin}  from './components/Linkedin';
import { Icon as Work}  from './components/Work';
import { Icon as Resume}  from './components/Resume';
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
                                <Github/>
                            </tr>
                            <tr>
                                <Linkedin/>
                            </tr>
                        </td>
                        <td>
                            <tr className="topRow">
                                <Work/>
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

export default Table;