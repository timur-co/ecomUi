import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";

const Banner = () => {
  return (
    <div className="mt-4">
      {/*Logo*/}
      <Grid item xs={12}>
        <div style={{ width: "100%" }}>
          <img
            src="https://picsum.photos/1500/400"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </Grid>
    </div>
  );
};

export default Banner;
