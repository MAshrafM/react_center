import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import SideBarItem from './SideBarItem'
import { List } from 'material-ui/List'

const links = [
  { isExact: true, linkTo: '/', text: 'Home' },
  { isExact: false, linkTo: '/logos', text: 'Logos' },
  { isExact: false, linkTo: '/posters', text: 'Posters' },
  { isExact: false, linkTo: '/letterhead', text: 'Letterhead' },
  { isExact: false, linkTo: '/share-a-story', text: 'Share a Story' },
  {
    isExact: false,
    linkTo: '/service-request-form',
    text: 'Service a Request Form'
  },
  { isExact: false, linkTo: '/tutorial', text: 'Tutorial' }
]

class SideNav extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleClose = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <AppBar
          title="RCenter"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() =>
            this.setState({ open: !this.state.open })}
          style={{ 'margin-bottom': '20px' }}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <List>
            {links.map((link, i) => {
              return (
                <SideBarItem
                  isExact={link.isExact}
                  linkTo={link.linkTo}
                  primaryText={link.text}
                  onClick={this.handleClose}
                  key={i}
                />
              )
            })}
          </List>
        </Drawer>
      </div>
    )
  }
}

export default SideNav
