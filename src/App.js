import React from 'react';
import './App.css';
import TopNavbar from './components/topNav/index';
import BottomNavbar from './components/bottomNav';
import { BrowserRouter as Router, Routes, Route }
	from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutus';
import Top from './pages/top'
import Bottom from './pages/bottom';
import Accessories from './pages/accessories';

function App() {
	return (
		<Router>
			<TopNavbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />

        <Route exact path='/top' element={<Top />} />
        <Route exact path='/bottom' element={<Bottom />} />
				<Route exact path='/accessories' element={<Accessories />} />
				<Route path='/about' element={<About />} />
			</Routes>
      <BottomNavbar/>

		</Router>
	);
}

export default App;
