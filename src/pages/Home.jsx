import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarList from "../components/UI/CarList";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";
import HomepageCarList from "../components/UI/HomePageCarList";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { auth } = useAuth();
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        {/* <div  className="hero__form"> */}
        <Container>
          <Row className="form__row">
            

            {/* <Col lg="8" md="8" sm="12"> */}
              <FindCarForm />
            {/* </Col> */}
          </Row>
        </Container>
        {/* </div> */}
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section> */}
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Nos annonces</h6>
              <h2 className="section__title">Sponsorisées</h2>
            </Col>
          </Row>
          <HomepageCarList />
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      {auth.Role !== "Expert" && <BecomeDriverSection />}

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Liste de nos</h6>
              <h2 className="section__title">Experts</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      {/*<section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
    </section> */}
    </Helmet>
  );
};

export default Home;
