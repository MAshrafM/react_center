import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import ReactDOM from 'react-dom'
import '../styles/video.css'

class Tutorial extends Component {
  state = { topCoord: null }

  componentDidMount() {
    const thisElement = ReactDOM.findDOMNode(this)
    const top = thisElement.getBoundingClientRect().top
    this.setState({ topCoord: top })
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Tutorial | RCenter</title>
        </Helmet>
        <div className="row" style={{ marginBottom: 0 }}>
          <div
            className="col s12 valign-wrapper"
            style={{
              minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`
            }}
          >
            <div style={{ width: '100%' }}>
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
              <p style={{ marginTop: '20px' }}>
                If you have any problems using the RCenter, please contact JW at{' '}
                <a href="#">support</a> or <a href="#">911</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tutorial
