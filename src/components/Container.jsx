import React from "react";
import { Routes, Route } from "react-router-dom";
import CarouselMenu from "./Homepage/CarouselMenu";
import MenuFooter from "./Homepage/MenuFooter";
import HomepageNavbar from "./Homepage/HomepageNavbar";
import HomepageCardSection from "./Homepage/HomepageCardSection";
import About from "./About/About";
import Services from "./Services/Services";
import Products from "./Products/Products";
import Contact from "./Contact/Contact";
import Blogs from "./Blogs/Blogs";

const Container = () => {
  return (
    <>
      <div className="container-fluid">
        <HomepageNavbar />

        {/* Added Routes for different components to render */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="row text-center">
                  <CarouselMenu />
                </div>
                <div className="row text-center card-deck mt-5">
                  <HomepageCardSection />
                </div>
                <div className="row text-center">
                <MenuFooter />
              </div>
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
        </Routes>

      </div>
    </>
  );
};

export default Container;
