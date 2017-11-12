import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import ReactDOM from 'react-dom'
import { GenericCard } from '../components/GenericCard'
import genericCardData from '../data/genericCardData'
import '../styles/home.css'

class Home extends Component {
  state = { topCoord: null }

  componentDidMount() {
    this.setState({
      topCoord: this.refs.homepageContainer.offsetTop
    })
  }
  render() {
    return (
      <div
        ref="homepageContainer"
        className="container valign-wrapper"
        style={{
          marginBottom: 0,
          minHeight: `calc(100vh - ${this.state.topCoord || '64'}px)`
        }}
      >
        <Helmet>
          <title>Home | RCenter</title>
        </Helmet>
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {genericCardData.map((card, key) => {
            return (
              <div key={key} className="col s12 m4 flex-div">
                <GenericCard
                  cardTitle={card.title}
                  link={card.link}
                  className={card.hoverable ? 'hoverable' : ''}
                >
                  {card.description}
                </GenericCard>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Home
