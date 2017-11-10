import React from 'react'
import ReactDOM from 'react-dom'
/* styles */
import './styles/index.css'
/* router */
import App from './routes/Routes'
/* service */
import registerServiceWorker from './registerServiceWorker'
/* render */
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
