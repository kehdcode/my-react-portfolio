import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
    
    render(){
        return (
         <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                <h1>@Kehdcode</h1>
                <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png"
                alt="Kehdcode"
                className="contact-img" />
                <h3 className="contact-para" >Dawood Ahmed Kehinde</h3>

                </Cell>
                <Cell col={6}>
                <h2>Contact Me</h2>
                <hr />
                <div className="contact-list">
                <List>
                <ListItem>
                    <ListItemContent className="list">
                    <i className="fa fa-phone" aria-hidden="true" />+234 816 126 1459
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent className="list">
                    <i className="fa fa-envelope" aria-hidden="true" />kehindedawood@gmail.com
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent className="list">
                    <i className="fa fa-whatsapp" aria-hidden="true" />  +234 802 699 2377
                    </ListItemContent>
                </ListItem>
                </List>
                </div>
                </Cell>
            </Grid>

        </div>
        
        )
    }
}

export default Contact;