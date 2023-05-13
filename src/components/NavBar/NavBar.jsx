import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import PathRoutes from "../Helpers/Routes.helper";

const NavBar = (props) => {
  const {onSearch} = props;
    return ( 
    <div>
      <Link to={PathRoutes.HOME}>Home</Link>
      <Link to={PathRoutes.ABOUT}>About</Link>
      <Link to={PathRoutes.FAVORITES}>Favorites</Link>
      <SearchBar onSearch={onSearch}/>  
        </div>  
    )
};

export default NavBar;