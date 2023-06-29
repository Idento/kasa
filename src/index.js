import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import About from './components/about/About.js'
import Failed from './components/Failed/Failed.js'
import Loc from './components/Location/Loc'
import Home, { navlist } from './components/home/home'
import Header from './components/Header/Header'
import Foot from './components/Footer/Foot'


ReactDOM.render(
<BrowserRouter>
	<React.StrictMode>
		<Header navlist={navlist}/>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About/>}/>
			<Route path='/logement/:id' element={<Loc />}/>
			<Route path='/*' element={<Failed />}/>
		</Routes>
		<Foot />
	</React.StrictMode>
</BrowserRouter>,
	document.getElementById('root')
)