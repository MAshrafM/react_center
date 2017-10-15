import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

class SideBarItem extends Component {
  render() {
    return (
      <NavLink
        activeClassName="active"
        exact={this.props.isExact}
        to={this.props.linkTo}
        key={this.props.i}
      >
        <ListItem
          onTouchTap={this.props.onClick}
          primaryText={this.props.primaryText}
          hoverColor="#eee"
        />
      </NavLink>
    )
  }
}

export default SideBarItem
