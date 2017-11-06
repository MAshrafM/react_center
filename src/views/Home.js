import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { GenericCard } from './../components/GenericCard'
import '../styles/home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topCoord: null
    }
  }

  componentDidMount() {
    const thisElement = ReactDOM.findDOMNode(this)
    const top = thisElement.getBoundingClientReact().top
    this.setState({ topCoord: top })
  }
  render() {
    return (
      <div
        className="container valign-wrapper"
        style={{
          marginBottom: 0,
          minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`
        }}
      >
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className="col s12 m4">
            <GenericCard cardTitle="Manuals">Resources Manuals</GenericCard>
          </div>
          <div className="col s12 m4">
            <GenericCard cardTitle="Logos and Designs">
              RCenter Logos and Design.
            </GenericCard>
          </div>
          <div className="col s12 m4">
            <GenericCard cardTitle="Applications">
              RCenter Custom Apps for every need.
            </GenericCard>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <GenericCard cardTitle="ERP">
              RCenter Custom ERP systems for every business.
            </GenericCard>
          </div>
          <div className="col s12 m4">
            <GenericCard cardTitle="Service Request Form">
              Let us know what you need and we will get started on it as soon as
              we can.
            </GenericCard>
          </div>
          <div className="col s12 m4">
            <GenericCard cardTitle="Testimonials">
              Meet our clients.
            </GenericCard>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
