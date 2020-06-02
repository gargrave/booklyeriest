import React from 'react'
import ReactDOM from 'react-dom'

import './config/firebase' // initialize firebase

import { App } from 'app/core/containers'
import * as serviceWorker from './serviceWorker'

import '@gargrave/react-simple-select/dist/react-simple-select.css'
import 'styles/normalize.css'
import 'styles/reset.css'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
