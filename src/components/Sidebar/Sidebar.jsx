import React from "react"
import { Grid, List, ListItem } from "@material-ui/core"
import { Divider } from "@mui/material"
import "./Sidebar.css"
import SidebarRow from "../SidebarRow/SidebarRow"
import HomeIcon from "@material-ui/icons/Home"
import WhatshotIcon from "@material-ui/icons/Whatshot"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions"
import {
  ExpandMoreOutlined,
  OndemandVideo,
  ThumbUpAltOutlined,
  VideoLibrary,
  History,
  WatchLater,
} from "@material-ui/icons"

function Sidebar() {
  return (
    <>
      <Grid className="sidebar">
        <List>
          <ListItem>
            <SidebarRow selected Icon={HomeIcon} title="Home" />
          </ListItem>
          <ListItem>
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
          </ListItem>
          <ListItem>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
          </ListItem>
        </List>
        <Grid item>
          <Divider orientation="horizontal" className="divider" />
        </Grid>
        <List>
          <ListItem>
            <SidebarRow Icon={VideoLibrary} title="Library" />
          </ListItem>
          <ListItem>
            <SidebarRow Icon={History} title="History" />
          </ListItem>
          <ListItem>
            <SidebarRow Icon={OndemandVideo} title="Your videos" />
          </ListItem>
          <ListItem>
            <SidebarRow Icon={WatchLater} title="Watch Later" />
          </ListItem>
          <ListItem>
            <SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
          </ListItem>
          <ListItem>
            <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
          </ListItem>
        </List>
      </Grid>

      {/* <hr /> */}
    </>
  )
}

export default Sidebar
