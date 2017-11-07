import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Masonry from 'react-masonry-component'
import { GenericCard } from './../components/GenericCard'
import FlatButton from 'material-ui/FlatButton'
import SvgIcon from 'material-ui/SvgIcon'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
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

  handleChange = (event, index, value) =>
    this.setState({
      activeTab: value
    })

  render() {
    const { activeTab } = this.state
    const tabs = {
      all: 'All',
      audio: 'Audio',
      video: 'Video',
      text: 'Text'
    }

    const DownloadIcon = props => (
      <SvgIcon {...props}>
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </SvgIcon>
    )

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
                    <FlatButton
                      href={'http://via.placeholder.com/120x100'}
                      download
                      label={
                        <span>
                          <DownloadIcon color="#ffb41f" />JPG
                        </span>
                      }
                    />
                    <FlatButton
                      href={'http://via.placeholder.com/120x100'}
                      download
                      label={
                        <span>
                          <DownloadIcon color="#ffb41f" />PSD
                        </span>
                      }
                    />
                  </div>
                }
              />
            </div>
          ))}
      </Masonry>
    )

    return (
      <div>
        <Helmet>
          <title>Logos | RCenter</title>
        </Helmet>
        <div className="row">
          <div className="col s12 hide-on-med-and-down">
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
          <div
            className="col s12 hide-on-large-only"
            style={{ textAlign: 'center' }}
          >
            <SelectField
              floatingLabelText="Logo Type"
              value={this.state.activeTab}
              onChange={this.handleChange}
              style={{ textAlign: 'left' }}
            >
              {Object.keys(tabs).map(tabKey => (
                <MenuItem
                  value={tabKey}
                  primaryText={tabs[tabKey]}
                  key={tabKey}
                />
              ))}
            </SelectField>
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
