import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from '../MaterializeRaisedButton'
import { Link } from 'react-router-dom'
import '../styles/materialize-input.css'

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  },
  button: {
    margin: 12
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0
  }
}

class ServiceRequest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileInput: null,
      name: '',
      email: '',
      phone: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleFilePath = event => {
    const target = event.target
    const files = Array.from(target.files)
    if (files.length === 0) {
      this.setState({
        fileInput: null
      })
    } else {
      const fileNames = files.map(f => f.name).join(', ')
      this.setState({
        fileInput: fileNames
      })
    }
  }
  render() {
    const fileValue = this.state.fileInput || 'Select a file to upload'
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 flow-text">
            <h2>Please use this form to request services.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Email"
              name="email"
              onChange={this.handleInputChange}
              type="email"
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField floatingLabelText="Department" fullWidth />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Phone"
              name="phone"
              onChange={this.handleInputChange}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Description"
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField floatingLabelText="Goal" multiLine rows={2} fullWidth />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Budget"
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Key Messages"
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Target Audience (Primary)"
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Target Audience (Secondary)"
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Contact"
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <TextField
              floatingLabelText="Comment"
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className="col s12 m6">
            <DatePicker hintText="Completion Date" />
          </div>
          <div className="col s12 m6">
            <div className="file-field input-field">
              <div className="btn">
                <span>Upload Files</span>
                <input
                  id="upload"
                  type="file"
                  multiple
                  onChange={this.handleFilePath}
                />
              </div>
              <div className="file-path-wrapper">
                <input
                  value={fileValue}
                  className="file-path validate"
                  type="text"
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
          </div>
          <div className="col s12 m6">
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
            <Checkbox label="Simple" style={styles.checkbox} />
          </div>
          <div className="col s12">
            <RaisedButton label="Submit" primary />
            <Checkbox
              label={
                <span>
                  I have read the {' '}
                  <Link to="/planning-guide" style={{ fontWeight: 500 }}>
                    Planning Guide
                  </Link>
                </span>
              }
              style={styles.checkbox}
              inputStyle={{ width: '35px' }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceRequest
