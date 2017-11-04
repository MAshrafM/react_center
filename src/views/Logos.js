import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import { GenericCard } from './../components/GenericCard'
import FlatButton from 'material-ui/FlatButton'
import '../styles/logos.scss'

class Logos extends Component {
  state = {
    activeTab: 'all',
    data: [
      { type: 'audio' },
      { type: 'text' },
      { type: 'video' },
      { type: 'audio' }
    ],
    type: 'all'
  }
  render() {
    const { activeTab } = this.state
    const tabs = {
      all: 'All',
      audio: 'Audio',
      video: 'Video',
      text: 'Text'
    }

    const massonryComp = (
      <Masonry>
        {this.state.data
          .filter(post => activeTab === 'all' || activeTab === post.type)
          .map((post, i) => (
            <div className="col s12 m6 14 x13 logo-card-container" key={i}>
              <GenericCard
                classes="logo-card"
                mediaImgSrc="http://via.placeholder.com/120x100"
                actions={
                  <div>
                    <FlatButton label="JPG" />
                    <FlatButton label="PSD" />
                  </div>
                }
              />
            </div>
          ))}
      </Masonry>
    )
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <ul className="tabs">
              {Object.keys(tabs).map(tabKey => (
                <li className="tab" key={tabKey + 'li'}>
                  <a
                    key={tabKey}
                    href={'#' + tabKey}
                    className={tabKey === activeTab && 'active'}
                    onClick={() => this.setState({ activeTab: tabKey })}
                  >
                    {tabs[tabKey]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {Object.keys(tabs).map(tabKey => (
          <div
            className="row"
            id={tabKey}
            key={tabKey}
            style={{ marginBottom: 0 }}
          >
            {activeTab === tabKey && massonryComp}
          </div>
        ))}
      </div>
    )
  }
}

export default Logos
