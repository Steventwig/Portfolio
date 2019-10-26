import React, {Component}from 'react';
import {Grid, Cell} from "react-mdl";
import Avatar from "avataaars";

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <Avatar
                            avatarStyle='Transparent'
                            topType='ShortHairTheCaesar'
                            accessoriesType='Round'
                            hairColor='BrownDark'
                            facialHairType='Blank'
                            clotheType='BlazerShirt'
                            eyeType='Default'
                            eyebrowType='Default'
                            mouthType='Default'
                            skinColor='Light'
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | JavaScript | TypeScript | React | Angular | PHP | MongoDB | MySQL |  </p>
                            <div className="social-links">

                                {/*Linked IN */}
                                <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                </a>
                                {/*GitHub */}
                                <a href="https://github.com/Steventwig" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>
                                {/*Free camp */}
                                <a href="https://www.freecodecamp.org/" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>
                                {/*stack overflow*/}
                                <a href="https://stackoverflow.com/" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-stack-overflow" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;


