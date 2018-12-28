import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';


class Resume extends Component {
    
    render(){
        return (
            <div> 
                <Grid>
                    <Cell col = {4}>
                    <div style={{textAlign: 'center'}}>
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
            className="resume-avatar-img"
            alt="avatar"
            />
                  </div>
                  <h2 className="resume-name">Dawood Ahmed Kehinde</h2>
                  <h4 className="resume-role">Software Engineer</h4>
                    </Cell>
                    <Cell col = {8} className="resume-right-col">
                        <h2>Experience</h2>
                        <Education 
                        startYear={2008}
                        endYear={2012}
                        schoolName="Greenswealth Corporate Services"
                        course="Production Office"
                        />
                            <hr />
                        <Education 
                        startYear={2008}
                        endYear={2012}
                        schoolName="Alabian Soloution"
                        course="Web Developer (Intern)"
                        />
                        <hr />
                        <Education 
                        startYear={2008}
                        endYear={2012}
                        schoolName="Starry Gold Academy"
                        course="Web developer/IT Officer"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;