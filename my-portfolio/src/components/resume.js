import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'


class Resume extends Component {
    
    render(){
        return (
            <div> 
                <Grid>
                    <Cell col = {4}>
                    <div style={{textAlign: "center"}}>
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
            className="avatar-img"
            alt="avatar"
            />
                  </div>
                  <h2>Dawood Ahmed Kehinde</h2>
                    </Cell>
                    <Cell col = {8}>Right</Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;