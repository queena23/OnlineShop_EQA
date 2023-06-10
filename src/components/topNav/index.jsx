import React, {useState} from "react";
import { Nav, NavLink, NavMenu }
	from "./navbarElements";
import Logo from '../../assets/logo.png';
import './index.css';
import SearchIcon from '@mui/icons-material/Search';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

const TopNavbar = () => {
	const [searchInput, setSearchInput] = useState("");

	return (
		<>
			<div class='top'>
				<div class='logo-container'> 
					<img src= {Logo} alt="logo" />
				</div>
				<div class='search-container'>
					<form>
						<SearchIcon/>
						<input placeholder="Search..."/>
					</form>
				</div>
				<div class="icons">
					<IconButton href="https://github.com/Soundbendor/food-image-dashboard" sx={{"&:hover": {backgroundColor: "transparent"}}}> 
						<ShoppingCartIcon  sx={{"color": 'black', "&:hover": {color: "#0A4E28"}}} />
					</IconButton>
					<IconButton href="https://github.com/Soundbendor/food-image-dashboard" sx={{"&:hover": {backgroundColor: "transparent"}}}> 
						<InstagramIcon  sx={{"color": 'black', "&:hover": {color: "#0A4E28"}}} />
					</IconButton>
				</div>
			</div>

			<Nav>
				<NavMenu>
					<NavLink to="/home" activeStyle>
						Home
					</NavLink>
					<NavLink to="/top" activeStyle>
						Top
					</NavLink>
					<NavLink to="/bottom" activeStyle>
						Bottom
					</NavLink>
					<NavLink to="/accessories" activeStyle>
						Accessories
					</NavLink>
					<NavLink to="/about" activeStyle>
						About Us
					</NavLink>
				</NavMenu>
			</Nav>

		</>
	);
};

export default TopNavbar;
