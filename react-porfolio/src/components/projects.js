import React, {Component}from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from "react-mdl";

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    toggleCatagories(){
        if(this.state.activeTab === 0){
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '400px', background: 'url(https://raw.githubusercontent.com/alirezakay/rp-app/master/icon-react.png) center / cover'}}></CardTitle>
                    <CardText>
                        This Project Was Completed While In My UCD Coding BootCamp
                    </CardText>
                    <CardActions border>
                        <Button href="https://github.com/Steventwig/Portfolio" colored>Git Hub</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }else if (this.state.activeTab === 1){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '400px', background: 'url(https://www.pubnub.com/wp-content/uploads/2014/07/SOCKETIOICON.gif) center / cover'}}></CardTitle>
                        <CardText>
                            This Project Was Completed While In My UCD Coding BootCamp
                        </CardText>
                        <CardActions border>

                            <Button href="https://github.com/Steventwig/ProjectTwo" colored>Git Hub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '400px', background: 'url(https://pbs.twimg.com/profile_images/1240079072/logo-mysql-170x170_400x400.png) center / cover'}}></CardTitle>
                        <CardText>
                            This Project Was Completed While In My UCD Coding BootCamp
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/Steventwig/Bamazon" colored>Git Hub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 3){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '400px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgrup-N-_SwLrptjiCkNsmwAy8kI2nZoIjwmOZGAZ_nZ5rmxOi&s) center / cover'}}></CardTitle>
                        <CardText>
                            COMING SOON
                        </CardText>
                        <CardActions border>
                            <Button href="https://github.com/Steventwig" colored>Git Hub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }



    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Socket</Tab>
                    <Tab>MySQL</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCatagories()}</div>
                        </Cell>
                    </Grid>
            </div>
        );
    }
}

export default Projects;