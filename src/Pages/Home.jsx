import React from "react";
import { Helmet } from "react-helmet";

import {
  Headers,
  Footer,
  SectionWrap,
  Slider,
  MainFilter,
  ProductBox,
  Pagination,
} from "../components";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Главная КупиМаМа</title>
      </Helmet>
      <Headers />

      <SectionWrap>
        <Slider />

        <div className="main_content">
          <MainFilter />

          <div className="mc_products">
            <ProductBox sale />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>

          <Pagination />
        </div>
      </SectionWrap>

      <Footer />
    </>
  );
};

export default Home;
