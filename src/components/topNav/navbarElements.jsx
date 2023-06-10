// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
height: 35px;
display: flex;
justify-content: space-between;
padding: 1px;
border: 0;
border-bottom: 3px solid #0A4E28;
`;

export const NavLink = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #0A4E28;
}
:hover {
    color: #0A4E28;
  }
`;


export const NavMenu = styled.div`
background-color: white;
display: flex;
margin-left: auto;
margin-right: auto;
align-items: center;
width:100%;
justify-content: center;
`;
