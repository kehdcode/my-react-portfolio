import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, Button, CardMenu, IconButton, CardText, CardActions} from 'react-mdl';


class Project extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    {/*Project 1 */}
                  <Card shadow={5} style={{width: '250', margin: 'auto'}} className="card-thing" >
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Github</Button>
        <Button colored></Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#000'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

{/*Project 1 */}
                  <Card shadow={5} style={{width: '250', margin: 'auto'}} className="card-thing" >
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Github</Button>
        <Button colored></Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#000'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

{/*Project 1 */}
                  <Card shadow={5} style={{width: '250', margin: 'auto'}} className="card-thing">
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Github</Button>
        <Button colored></Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#000'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
        return(
            <div className="projects-grid">
                            {/*Project 1 */}
    <Card shadow={5} style={{width: '250', margin: 'auto'}} className="card-thing" >
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Github</Button>
        <Button colored></Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#000'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

{/*Project 1 */}
                  <Card shadow={5} style={{width: '250', margin: 'auto'}} className="card-thing" >
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Github</Button>
        <Button colored></Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#000'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

{/*Project 1 */}
                  <Card shadow={5} style={{width: '250', margin: 'auto'}} className="card-thing">
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Github</Button>
        <Button colored></Button>
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#000'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
            </div>
        )

    }else if(this.state.activeTab === 2){
        return(
            <div className="projects-grid">
            {/*Project 1 */}
<Card shadow={5} style={{width: '250', margin: 'auto'}} className="card-thing" >
<CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Mauris sagittis pellentesque lacus eleifend lacinia...
</CardText>
<CardActions border>
<Button colored>Github</Button>
<Button colored></Button>
<Button colored>Live Demo</Button>
</CardActions>
<CardMenu style={{color: '#000'}}>
<IconButton name="share" />
</CardMenu>
</Card>

{/*Project 1 */}
  <Card shadow={5} style={{width: '250', margin: 'auto'}} className="card-thing" >
<CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Mauris sagittis pellentesque lacus eleifend lacinia...
</CardText>
<CardActions border>
<Button colored>Github</Button>
<Button colored></Button>
<Button colored>Live Demo</Button>
</CardActions>
<CardMenu style={{color: '#000'}}>
<IconButton name="share" />
</CardMenu>
</Card>

{/*Project 1 */}
  <Card shadow={5} style={{width: '250', margin: 'auto'}} className="card-thing">
<CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
<CardText>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Mauris sagittis pellentesque lacus eleifend lacinia...
</CardText>
<CardActions border>
<Button colored>Github</Button>
<Button colored></Button>
<Button colored>Live Demo</Button>
</CardActions>
<CardMenu style={{color: '#000'}}>
<IconButton name="share" />
</CardMenu>
</Card>
</div>
        )
    }else if(this.state.activeTab === 3){
        return(
            <div className="projects-grid">
            {/*Project 1 */}
            <Card shadow={5} style={{width: '250', margin: 'auto'}} className="card-thing" >
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
            <Button colored>Github</Button>
            <Button colored></Button>
            <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#000'}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>

{/*Project 1 */}
            <Card shadow={5} style={{width: '250', margin: 'auto'}} className="card-thing" >
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
            <Button colored>Github</Button>
            <Button colored></Button>
            <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#000'}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>

{/*Project 1 */}
            <Card shadow={5} style={{width: '250', margin: 'auto'}} className="card-thing">
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
            <Button colored>Github</Button>
            <Button colored></Button>
            <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#000'}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>
        )
    }
}
   
    
    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>PHP</Tab>
                    <Tab>Wordpress</Tab>
                </Tabs>
              
                    <Grid>
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                    </Grid>
                    
            
            </div>
        )
    }
}

export default Project;