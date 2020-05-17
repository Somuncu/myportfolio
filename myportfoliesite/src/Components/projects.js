import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                {/*React Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                    My Portfolio    
                    </CardTitle> 
                    <CardText>
                    React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications          
                    </CardText>   
                    <CardActions border>
                        <Button colored href='https://github.com/omerbulutt/MyPortfolio' target="_blank">Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored href='https://omerbulutt.github.io/MyPortfolio/' target="_blank" >LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                 {/*React Project 2*/}
                 <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                    React Projects(Very Soon)    
                    </CardTitle> 
                    <CardText>
                    React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications
                    </CardText>   
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                 {/*React Project 3*/}
                 <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                    React Projects(Very Soon)    
                    </CardTitle> 
                    <CardText>
                    React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications 
                    </CardText>   
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
               
            )
        }else if(this.state.activeTab===1){
            return(
                <div className="projects-grid">
                {/*Unity Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/750/1*cRFhIBaXVYysx0aApKC2gg.jpeg) center / cover'}}>
                     Somuncu   
                    </CardTitle> 
                    <CardText>
                    2D Game Development (Unity,Visual Studio C#) 
                    </CardText>   
                    <CardActions border>
                        <Button colored href='https://www.youtube.com/watch?v=7XJDlj8XOGM&t=93s' target="_blank">Youtube</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                 {/*Unity Project 2*/}
                 <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px', background:'url(https://miro.medium.com/max/750/1*cRFhIBaXVYysx0aApKC2gg.jpeg) center / cover'}}>
                     3D Game   
                    </CardTitle> 
                    <CardText>
                    3D Game Development (Unity,Visual Studio C#)
                    </CardText>     
                    <CardActions border>
                    <Button colored href='https://www.youtube.com/watch?v=n4GPe0xCsy8&t=292s' target="_blank">Youtube</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
 
                </div>
            )
        }else if(this.state.activeTab===2){
            return(
                <div className="projects-grid">
                {/*Scala Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#6A6A6A', height:'176px', background:'url(https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2019/03/lagom.png?fit=500%2C293&ssl=1) center / cover'}}>
                    DogGO    
                    </CardTitle> 
                    <CardText>
                    Scala Lagom Microservice Framework ile Event Driven ve CQRS prensiplerine uygun olarak backend kodları yazılan bir projedir.  Kafka mesajlaşma alt yapısı ve Cassandra db ile geliştirilmiştir. Mobil uygulama tarafında ise React Native tercih edilmiştir. Şu anda mobil marketlerde bulunan bu projenin backend kısmında(gerekli servis, repository,entity ve test yazımlarında) görev aldım. 
                    </CardText>   
                    <CardActions border>
                        <Button colored href='https://apps.apple.com/us/app/doggo/id1321405113' target="_blank">App Store</Button>
                        <Button colored href='https://play.google.com/store/apps/details?id=com.doggoapp.owner' target="_blank">Google Play</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                </div>
            )
        }
    }

    render(){
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Unity</Tab>
                <Tab>Scala</Tab>
                </Tabs>
        
                   <Grid>
                       <Cell col={12}>
                            <div className="content">{this.toggleCategories()} </div>
                       </Cell>
                   </Grid>

            </div>
        )
    }
}

export default Projects;