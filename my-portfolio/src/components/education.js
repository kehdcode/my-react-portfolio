import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Education extends Component {
    render(){
        return(
            <Grid>
                <Cell col={4}>
                <p> {this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 className="education-school" style={{marginTop: '0'}}>{this.props.schoolName} </h4>
                    <p>{this.props.course}</p>
                </Cell>
            </Grid>            
        )
    }
}


export default Education