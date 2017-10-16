import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class MaterializeRaisedButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    }
  }

  render() {
    const overlayStyle = {
      transition: 'all .3s ease-out'
    }

    if (this.state.hovered) {
      overlayStyle.backgroundColor = 'rgba(255,255,255, 0.10)'
      overlayStyle.boxShadow =
        '0 3px 3px 0 rgba(0,0,0,0.14),' +
        '0 1px 7px 0 rgba(0,0,0,0.12),' +
        '0 3px 1px -1px rgba(0,0,0,0.2)'
    }

    return (
      <RaisedButton
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
        overlayStyle={overlayStyle}
        {...this.props}
      />
    )
  }
}

export default MaterializeRaisedButton
