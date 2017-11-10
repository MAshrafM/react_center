import React from 'react'
import { NavLink } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

const SideBarItem = props => {
  return (
    <NavLink
      activeClassName="active"
      exact={props.isExact}
      to={props.linkTo}
      key={props.i}
    >
      <ListItem
        onTouchTap={props.onClick}
        primaryText={props.primaryText}
        hoverColor="#eee"
      />
    </NavLink>
  )
}

export default SideBarItem
