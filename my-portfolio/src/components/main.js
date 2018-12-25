import React from 'react';
import Landing from './landing';
import { Switch, Route } from 'react-router-dom';
import Contact from './contact';
import Project from './projects';
import Resume from './resume';


const Main = () => (
    <switch>
        <Route exact path="/" component={Landing} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/projects" component={Project} />
        <Route  path="/resume" component={Resume} />
    </switch>
)


export default Main;