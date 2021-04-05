import React from "react";
import NavInfo from "./NavInfo";
import NavSearch from "./NavSearch";
import Categories from "./Categories";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      {/*information*/}
      <NavInfo />

      {/*Search pannel*/}
      <NavSearch />

      {/*Categories*/}
      <Categories />
    </div>
  );
};

export default Navbar;
