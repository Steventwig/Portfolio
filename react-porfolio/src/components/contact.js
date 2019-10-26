import React, {Component}from 'react';
import {Grid, Cell, ListItem, List, ListItemContent} from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Steven Terwilliger</h2>
                        <img src="https://www.cartoonify.de/wp-content/plugins/svg-avatars-generator/data/temp-avatars/svgA9316830944915713.png"
                             alt="avatar"
                             style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            I am a solution oriented and highly motivated computer technician with years of technical troubleshooting experience. I take
                            pride in providing creative solutions and out of the box thinking. I enjoys complex, multi-faceted assignments where pulling
                            together a collaborative pool of skills is essential to solve complicated technical issues. I fosters a lively and professional
                            work environment with my commitment to excellence, innovation, and customer service.
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
                                        (916) 500-4393
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontsize:'30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-envelope-open' aria-hidden="true"/>
                                        steven@syntaxflow.com
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