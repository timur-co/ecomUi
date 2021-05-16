import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

import { Link } from "react-router-dom";

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
          <Grid
            item
            lg={4}
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
            <Typography variant="body1" className="ml-4">
              <Link to="/" className="alink">
                Sign Up
              </Link>{" "}
              |{" "}
              <Link to="/" className="alink">
                Login
              </Link>
            </Typography>

            <Typography variant="body1" className="ml-4">
              <Link to="/" className="alink">
                Help
              </Link>
            </Typography>

            <Typography
              className="ml-4"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <NotificationsNoneIcon />
              <Link to="/" className="alink">
                Notification
              </Link>
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
