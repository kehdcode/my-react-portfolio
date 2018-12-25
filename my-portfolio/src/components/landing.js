import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
    
    render(){
        return (
            <div className=" landingPage">
            <Grid className="landing-grid">
        <Cell col={12}>
            <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
            className="avatar-img"
            alt="avatar"
            />
            <div className="banner-text">
                <h1>Full stack Developer</h1>
                <hr />
                <p>HTML/CSS| Boostrap| Materialize| JavaScript| Jquery| React Js| PHP| Node JS| Express |MongoDB </p>
            </div>
        </Cell>

        
    </Grid>
    </div>
        )
    }
}

export default Landing;