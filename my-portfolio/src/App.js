import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content  } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header title="Kehdcode" scroll>
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/resume">My Resume</Link>
                <Link to="/projects">My Works</Link>
                <Link to="/contact">Let's Talk</Link>
               
            </Navigation>
        </Header>
    <Drawer title="Kehdcode">
            <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">My Resume</Link>
                <Link to="/projects">My Works</Link>
                <Link to="/contact">Let's Talk</Link>
               
            </Navigation>
        </Drawer>

        <Content>
            <div className="page-content" />
            < Main />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
