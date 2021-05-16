import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const NavInfo = () => {
  const classes = useStyles();
  return (
    // user details
    <div className={classes.navInfo}>
      <Container component="div">
        <Typography variant="body1" className="mr-4" display="inline">
          body1
        </Typography>

        <Typography variant="body1" className="mr-4" display="inline">
          body1
        </Typography>

        <Typography variant="body1" className="mr-4" display="inline">
          body1
        </Typography>
      </Container>
    </div>
  );
};

export default NavInfo;

const useStyles = makeStyles((theme) => ({
  navInfo: { background: "#bdc3c7", padding: "2px" },
}));
