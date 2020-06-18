import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import profile from '../Assets/profile.png'


class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
               <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src={profile} 
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>

                            <hr/>

                            <p>HTML/CSS | JavaScript | React | React-Native | Java | C | Scala </p>

                            <div className="social-links">
                                 {/*Linkedin*/}   
                                <a href="https://www.linkedin.com/in/%C3%B6mer-bulut-20a8bb13a/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>

                                {/*Github*/}   
                                <a href="https://github.com/omerbulutt" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>

                                 {/*Youtube*/}   
                                 <a href="https://www.youtube.com/channel/UCxQT2ov-AxZzpW3nFNMRZ3g" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square"  aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
               </Grid>
            </div>
        )
    }
}

export default Landing; 