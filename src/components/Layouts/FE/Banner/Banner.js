import React from "react";
import { Container, Grid } from "@material-ui/core";

const Banner = () => {
  return (
    <Container className="mt-2 mb-5">
      <Grid container spacing={3}>
        {/*Banner Feature*/}
        <Grid item xs={8}>
          <div style={{ width: "100%" }}>
            <img
              src="https://picsum.photos/1200/400"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </Grid>

        {/*Banner secondary*/}
        <Grid item xs={4}>
          <Grid item xs={12} className="mb-1">
            <img
              src="https://picsum.photos/600/200"
              alt=""
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <img
              src="https://picsum.photos/600/200"
              alt=""
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
