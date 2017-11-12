import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { GenericCard } from './../components/GenericCard'

class Posters extends Component {
  state = { topCoord: null }

  componentDidMount() {
    this.setState({
      topCoord: this.refs.pageContainer.offsetTop
    })
  }

  render() {
    return (
      <div
        ref="pageContainer"
        className="container valign-wrapper"
        style={{
          marginBottom: 0,
          minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`
        }}
      >
        <Helmet>
          <title>Posters | RCenter</title>
        </Helmet>
        <div
          className="row flow-text"
          style={{ display: 'flex', flexWrap: 'wrap' }}
        >
          <h2 style={{ flex: '1 100%' }}>Poster Resources</h2>
          <div className="col s12 m6 flex-div">
            <GenericCard cardTitle="Create Your Own">
              Canva.com is a free graphic design tool with an easy to use
              drag-and-drop interface and access to over a million photographs,
              graphics, and fonts. It is used by non-designers as well as
              professionals.
            </GenericCard>
          </div>
          <div className="col s12 m6 flex-div">
            <GenericCard cardTitle="Video Tutorial">
              Learn how to create posters in Powerpoint, Publisher, Photoshop,
              and InDesign.
            </GenericCard>
          </div>
          <div className="col s12 m6 flex-div">
            <GenericCard cardTitle="Student Designs">
              Our Students Graphic designs.
            </GenericCard>
          </div>

          <div className="col s12 m6 flex-div">
            <GenericCard cardTitle="Professional Designs">
              Professional Designs provided by our skilled members.
            </GenericCard>
          </div>
          <div className="col s12 m6 flex-div">
            <GenericCard cardTitle="Printing">
              Our Printing Service with material prices in every shape and size.
            </GenericCard>
          </div>
          <div className="col s12 m6 flex-div">
            <GenericCard cardTitle="Logos">Brands Logo designs.</GenericCard>
          </div>
        </div>
      </div>
    )
  }
}

export default Posters
