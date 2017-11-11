import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router-dom'
import debounce from 'lodash/debounce'

import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'material-ui/Card'

export class GenericCard extends Component {
  constructor(props) {
    super(props)
    this.state = { depth: 1 }
  }

  onMouseOver = debounce(() => {
    this.state.depth === 2 || this.setState({ depth: 2 })
  }, 32)
  onMouseOut = debounce(() => {
    this.state.depth === 1 || this.setState({ depth: 1 })
  }, 32)

  render() {
    const { link, className } = this.props
    const CardContent = ({
      actions,
      cardSubtitle,
      cardTitle,
      children,
      classes,
      headerAvatar,
      headerSubtitle,
      headerTitle,
      hoverable,
      mediaImgAlt,
      mediaImgSrc,
      overlay,
      zDepth
    }) => (
      <div className={className || 'fix-height'}>
        <Paper zDepth={zDepth} style={{ height: '100%' }}>
          <Card className={classes} style={{ boxShadow: 'none' }}>
            {(headerTitle || headerAvatar) && (
              <CardHeader
                title={headerTitle}
                subtitle={headerSubtitle}
                avatar={headerAvatar}
              />
            )}
            {mediaImgSrc && (
              <CardMedia className="img-container" overlay={overlay}>
                <img src={mediaImgSrc} alt={mediaImgAlt} />
              </CardMedia>
            )}
            {cardTitle && (
              <CardTitle title={cardTitle} subtitle={cardSubtitle} />
            )}
            <CardText style={{ fontSize: '16px' }}>{children}</CardText>
            {actions && (
              <CardActions className="card-actions">{actions} </CardActions>
            )}
          </Card>
        </Paper>
      </div>
    )

    const isInternal = link && link[0] === '/'

    const jsx = link ? (
      isInternal ? (
        <Link to={link}>
          <CardContent {...this.props} zDepth={this.state.depth} />
        </Link>
      ) : (
        <a href={link} target="_blank">
          <CardContent {...this.props} zDepth={this.state.depth} />
        </a>
      )
    ) : (
      <CardContent {...this.props} zDepth={this.state.depth} />
    )

    return jsx
  }
}

export default GenericCard
