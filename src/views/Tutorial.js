import React, { Component } from 'react'
import '../styles/video.css'

class Tutorial extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <p style={{ marginBottom: '20px' }}>
              If you have any problems using the RCenter, please contact JW at{' '}
              <a href="#">support</a> or <a href="#">911</a>.
            </p>
          </div>
        </div>
        <div className="row">
          <div
            className="col s12 valign-wrapper"
            style={{ minHeight: 'calc(100vh - 64px)' }}
          >
            <div className="video-container z-depth-1">
              <iframe
                src="#"
                width="853"
                height="480"
                frameborder="0"
                allowfullscreen="allowfullscreen"
                title="Tutorial Video"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tutorial
