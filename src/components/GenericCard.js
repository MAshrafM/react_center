import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'material-ui/Card'

export class GenericCard extends Component {
  render() {
    const {
      headerTitle,
      headerSubtitle,
      headerAvatar,
      mediaImgSrc,
      mediaImgAlt,
      overlay,
      cardTitle,
      cardSubtitle,
      actions,
      children,
      classes
    } = this.props

    return (
      <Card className={classes}>
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
        {cardTitle && <CardTitle title={cardTitle} subtitle={cardSubtitle} />}
        <CardText>{children}</CardText>
        {actions && <CardActions>{actions} </CardActions>}
      </Card>
    )
  }
}

export default GenericCard
