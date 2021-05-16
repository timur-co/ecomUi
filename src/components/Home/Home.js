import React, { Fragment } from "react";
import Navbar from "../Layouts/FE/Navbar/Navbar";
import Banner from "../Layouts/FE/Banner/Banner";
import Offer from "../Layouts/FE/Offer/Offer";
import PopularCategories from "../Layouts/FE/Explore/PopularCategories";
import Searches from "../Layouts/FE/Trending/Searches";
import DailyDiscover from "../Layouts/FE/Discover/DailyDiscover";
import Footer from "../Layouts/FE/Footer/Footer";

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

      {/* Treanding Searches*/}
      <Searches />

      {/* Featured Products */}

      {/* Featured Sellers */}

      {/* Featured Brands */}

      {/* Discover */}
      <DailyDiscover />

      {/*Footer*/}
      <Footer />
    </Fragment>
  );
};

export default Home;
