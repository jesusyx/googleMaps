import React from 'react'
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import London from './London'
import Tokio from './Tokio'
import Button from './Button'
import {HashRouter, Route, Link } from 'react-router-dom'

import MapContainer from './MapContainer'
import './index.css'
/*En lugar de () le pongo props si lo nesecita*/
const App = () => ( //el () funciona como {return ()}
		<div className='map'>
			<MapContainer/>
	  </div>

	)

export default App
