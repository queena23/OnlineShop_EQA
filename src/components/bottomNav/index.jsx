import React, {useState} from "react";
import { Nav, NavLink, NavMenu }
	from "./navbarElements";
import Logo from '../../assets/logo.png';
import './index.css';
import { IconButton } from '@mui/material';

const BottomNavbar = () => {

	return (
			<Nav>
				<NavMenu>
					<h3 class="info"> @2023 EQA</h3>
					
				</NavMenu>
			</Nav>
	);
};

export default BottomNavbar;
