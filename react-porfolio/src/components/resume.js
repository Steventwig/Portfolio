import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAline: 'center'}}>
                            <img src="https://www.shareicon.net/data/512x512/2015/10/17/125651_man_512x512.png"
                                 alt="avatar"
                                 style={{height: '200px'}}
                            />
                        </div>
                                            <h2 style={{paddingTop: '2em'}}>Steven Terwilliger</h2>
                                            <h4 style={{color: 'grey'}}>Systems Administrator / Programmer</h4>
                                            <hr style={{borderTop: '3px solid black', width: '50%'}}/>
                                            <p>TECHNICAL SKILLS/EXPOSURE
                                                <hr/>
                                                Operating Systems: Windows XP/Vista/7/8.2/10, Mac OS || Protocols: TCP/IP, DNS, DHCP, STP, 802.1x || Mail Systems: Microsoft Outlook, Active Directory || Hardware: Switches/Routers, VoIP, Internal Components, and Peripheral Workstation Devices || Wireless: Understanding of 802.11 || Security: Intrusion Detection, Intrusion Prevention, Access Control Remote access: Microsoft Remote Desktop
                                            </p>
                                            <hr style={{borderTop: '3px solid black', width: '50%'}}/>
                                            <h5>Address</h5>
                                            <p>2740 Fulton Avenue Suite 101-08 Sacramento, CA 95821</p>
                                            <h5>Phone</h5>
                                            <p>(916) 500-4393</p>
                                            <h5>Email</h5>
                                            <p>steven@syntaxflow.com</p>
                                            <h5>Web</h5>
                                            <p>syntaxflow.com</p>
                        <hr style={{borderTop: '3px solid #black', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                                             <h2>Education</h2>
                                             <Education
                                            startYear={2015}
                                            endYear={2016}
                                            schoolName="AirForce Technical School"
                                            schoolDescription="Cyber Systems Operations Apprentice"
                                            />
                                            <Education
                                                startYear={2008}
                                                endYear={2019}
                                                schoolName="Training"
                                                schoolDescription="● IT Fundamentals Course

                                                                    ● CompTIA Security+ Certification; 2016
                                                                    ● Fiber Optic Termination Course
                                                                    ● UCD Full Stack Web Development Certification Course
                                                                    "
                                            />
                                            <hr style={{borderTop: '3px solid #0892d0'}} />
                                            <h2>Experience</h2>
                                            <Experience
                                                startYear={2015}
                                                endYear={2019}
                                                jobName="Network Operations Specialist ~50th Intelligence Squadron"
                                                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                            />
                                            <Experience
                                                startYear={2016}
                                                endYear={2019}
                                                jobName="Systems Administrator/Team Lead ~Huntington Ingalls industries"
                                                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                            />
                                            <hr style={{borderTop: '3px solid #0892d0'}} />
                                            <h2>Skills</h2>
                                            <Skills
                                                skill="HTML/CSS"
                                                progress={65}
                                            />
                                            <Skills
                                                skill="javascript"
                                                progress={45}
                                            />
                                            <Skills
                                                skill="NodeJS"
                                                progress={45}
                                            />
                                            <Skills
                                                skill="React"
                                                progress={25}
                                            />
                                        </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;
