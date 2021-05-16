import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const NavInfo = () => {
  const classes = useStyles();
  return (
    // user details
    <div className={classes.navInfo}>
      <Container component="div">
        <Grid container>
          {/* Info sectio */}
          <Grid item lg={8}></Grid>

          {/* User section */}
          <Grid item lg={4}>
            <Typography
              variant="body1"
              className="ml-4"
              display="inline"
              style={{ float: "right" }}
            >
              body1asdasd
            </Typography>
            <Typography
              variant="body1"
              className="ml-4"
              display="inline"
              style={{ float: "right" }}
            >
              body2ds
            </Typography>
            <Typography
              variant="body1"
              className="ml-4"
              display="inline"
              style={{ float: "right" }}
            >
              body3
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NavInfo;

const useStyles = makeStyles((theme) => ({
  navInfo: { background: "#bdc3c7", padding: "2px" },
}));
