import React from "react"
import { Grid } from "@material-ui/core"
import "./Sidebar.css"
import SidebarRow from "../SidebarRow/SidebarRow"
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"

function Sidebar() {
  return (
    <>
      <Grid container className="sidebar">
        <SidebarRow Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={WhatshotIcon} title="Trending" />
        <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      </Grid>
    </>
  )
}

export default Sidebar
