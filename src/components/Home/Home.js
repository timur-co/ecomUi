import React, { Fragment } from "react";
import Navbar from "../../Layouts/FE/Navbar/Navbar";
import Banner from "../../Layouts/FE/Banner/Banner";
import Offer from "../../Layouts/FE/Offer/Offer";
import PopularCategories from "../../Layouts/FE/Explore/PopularCategories";

const Home = () => {
  return (
    <Fragment>
      {/*Navbar*/}
      <Navbar />

      {/*Banner*/}
      <Banner />

      {/* Offers*/}
      <Offer />

      {/* Explore popular categories */}
      <PopularCategories />

      {/* Flash Deals*/}

      {/* Featured Products*/}

      {/* Featured Sellers */}

      {/* Featured Brands */}

      {/*Footer*/}
    </Fragment>
  );
};

export default Home;
