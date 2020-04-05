import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import About from './aboutme';
import Projects from './projects';
import Contact from './contact';




const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/landingpage" component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
    </Switch>
)

export default Main;