import React from "react";
import { Container, Grid } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const NavSearch = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container component="div" className="my-3">
        <Grid container spacing={3}>
          {/*Logo*/}
          <Grid item xs={2}>
            <div>Logo</div>
          </Grid>

          {/*Search*/}
          <Grid item xs={6}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                fullWidth
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Grid>

          {/*Cart*/}
          <Grid item xs={2}>
            <div>Cart</div>
          </Grid>

          {/*User*/}
          <Grid item xs={2}>
            <div>User</div>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default NavSearch;

const useStyles = makeStyles((theme) => ({
  navSearch: { width: "80%" },
  root: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
