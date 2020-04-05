import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
import profile from '../Assets/profile.JPG'


class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Ömer BULUT</h2>
                        <img src={profile} alt="avatar" style={{height: '250px'}} />
                        <p style={{width:'55%' , margin:'auto', paddingTop:'1em'}}> Ege Üniversitesi Bilgisayar Mühendisliği’nde kazandığım teorik eğitim altyapısını
                            şirketinizde yapacağım staj sırasında kazanacağım pratik bilgilerle birleştirmeyi amaçlıyorum.
                            Sürekli eğitime inanan, öğrenmeye açık ve çalışmayı seven biri olarak staj sırasında
                            şirketinize değer katarken kendimi geliştirebileceğimi düşünüyorum.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (+90)543-620-6074
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-fax" aria-hidden="true" />
                                        (+90)232-750-5050
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        omerbulutege@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                         omerbulutege@gmail.com
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