//@ts-check
import React from "react"
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"
import logo from "../../assets/logos/logo.svg"
import Avatar from "@material-ui/core/Avatar"
import { Grid } from "@material-ui/core"

function Header() {
  return (
    <>
      <Grid container className="header">
        <Grid item className="header-menu">
          <MenuIcon />
          <img className="header__logo" src={logo} alt="" />
        </Grid>
        <Grid item className="header__input">
          <input placeholder="Search" type="text" />
          <SearchIcon className="header__inputButton" />
        </Grid>
        <Grid item className="header__icons">
          <VideoCallIcon className="header__icon" />
          <NotificationsIcon className="header__icon" />
          <AppsIcon className="header__icon" />
          <Avatar alt="czs" src="" className="header__icon" />
        </Grid>
      </Grid>
    </>
  )
}

export default Header
