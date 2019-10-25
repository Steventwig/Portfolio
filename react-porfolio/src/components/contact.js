import React, {Component}from 'react';
import {Grid, Cell, ListItem, List, ListItemContent} from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Steven Terwilliger</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                             alt="avatar"
                             style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequuntur distinctio eaque error illum natus, quia rem sit ullam? Atque eligendi error excepturi expedita natus nesciunt provident saepe temporibus vero!
                        </p>
                    </Cell>
                    <Cell col={6}>
                    <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontsize:'30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-phone' aria-hidden="true"/>
                                        (123) 456-7890
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontsize:'30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-envelope-open' aria-hidden="true"/>
                                        Username@username.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;