import React from "react"
import { Grid, Box } from "@material-ui/core"
import Typography from "@mui/material/Typography"
import "./SidebarRow.css"

function SidebarRow({ Icon, title }) {
  return (
    <>
      <Grid className="sidebarRow">
        <Icon className="sidebarRow__icon" />
        <Typography component="h2" className="sidebarRow__title">
          <Box sx={{ fontWeight: "bold" }}>{title}</Box>
        </Typography>
      </Grid>
    </>
  )
}

export default SidebarRow
