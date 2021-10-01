import React from "react"
import { Grid, Box } from "@material-ui/core"
import Typography from "@mui/material/Typography"
import "./SidebarRow.css"

function SidebarRow({ selected, Icon, title }) {
  return (
    <>
      <Grid className={`sidebarRow ${selected && "selected"}`}>
        <Icon className={"sidebarRow__icon"} />
        <h2 className="sidebarRow__title">{title}</h2>
      </Grid>
    </>
  )
}

export default SidebarRow
