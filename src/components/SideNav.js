import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import SideBarItem from './SideBarItem'
import { List } from 'material-ui/List'
import links from '../data/linksData'

class SideNav extends Component {
  state = { open: false }

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
