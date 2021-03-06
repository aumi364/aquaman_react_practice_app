import React, { Component } from 'react'
 import AppBar from '@material-ui/core/AppBar';
 import Toolbar from '@material-ui/core/Toolbar';
 import MenuIcon from '@material-ui/icons/Menu';
 import IconButton from '@material-ui/core/IconButton';
 import SideDrawer from './SideDrawer';



export default class header extends Component {
  
  state = {
    drawerState : false,
    headerStyle: false 
  }

  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);
  }
  handleScroll = () => {
    if(window.scrollY >0 ){
        this.setState({
            headerStyle: true
        })
    }
    else{
      this.setState({
        headerStyle: false
    })
    }
  }

  toggleDrawer = (value) =>{
    this.setState({
      drawerState: value
    })
  }
  
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          
          background: this.state.headerStyle? 'linear-gradient(135deg, #766dff 0%, #88f3ff 100%)' : 'transparent',
          color: this.state.headerStyle? 'white' : 'black',
          boxShadow: 'none',
          padding: '10px 0px'  
          
        }}
      >
        <Toolbar>
          <div className="font_righteous header_logo">
              <div className="header_logo_venue"> 
                  The Venue
              </div>
              <div className="header_logo_title">
                  Movie
              </div>
              </div>
              <IconButton
                aria-label="Menu"
                color="inherit"
                onClick={()=> this.toggleDrawer(true)}
              >
                <MenuIcon/>
              </IconButton>
              <SideDrawer
                open={this.state.drawerState}
                onClose={(value)=> this.toggleDrawer(value)}
              />
          
        </Toolbar>
      </AppBar>
    )
  }
}
