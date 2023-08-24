import React from "react";
import Layout from "../layout/Layout";
import foto from "../assets/photo3.jpg";
import { styled } from "styled-components";
import History from "../components/History";
import OurTeam from "../components/OurTeam";
import Company from "../components/Company";

const AboutPage = () => {
  return (
    <Layout>
      <>
        <div className="container-fluid p-0">
          <IMGBgBanner className="row banner-img ovf-hidden">
            <div className="col-12 p-0">
              <div className="container">
                <div className="row">
                  <div className="col-12 ">
                    <Banner className="banner m-0-auto d-flex-column justify-center align-center">
                      <p className="banner__text">
                        "Descubre el poder de la innovación y mejora continua
                        con nuestras <span>consultorías</span>,{" "}
                        <span>entrenamientos empresariales</span> y{" "}
                        <span>formaciones</span>. Juntos, transformemos tu
                        camino hacia el éxito."
                      </p>
                      <Title className="banner__title">¡Conócenos!</Title>
                    </Banner>
                  </div>
                </div>
              </div>
            </div>
          </IMGBgBanner>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <About className="about">
                <IMGContainer2 className="about__img-container ovf-hidden d-flex justify-center align-center">
                  <img src={foto} alt="about__img" />
                </IMGContainer2>
                <Caption2 className="about__text-container">
                  <h3 className="banner__titulo">¿Quienes somos?</h3>
                  <p className="about__text m-0 text-justify">
                    En Leangineers somos una organización orientada a la
                    consultoría y formación, en la que ponemos al servicio de
                    nuestros clientes un enfoque holístico que promueve la
                    implementación de la mejora continua, la innovación, la
                    tecnología y el liderazgo, con el ánimo de generar altos
                    niveles de competitividad en un entorno globalizado.
                    Adicionalmente, entregamos toda nuestra experiencia y
                    conocimientos a todos los profesionales con herramientas que
                    les permiten ser agentes de cambio al interior de sus
                    organizaciones.
                  </p>
                </Caption2>
              </About>
            </div>
          </div>
        </div>
        {/* <History /> */}
        <Company />
        <OurTeam />
      </>
    </Layout>
  );
};

export default AboutPage;

const Banner = styled.div`
  width: 90%;
  height: calc(100vh - 4rem);
  position: relative;
  z-index: 100;
  @media (min-width: 768px) {
    height: 50rem;
    width: 100%;
  }
  .banner__text {
    color: white;
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 2.5rem
    }

    span {
      color: #dff707;
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 900;
      @media (min-width: 768px) {
        font-size: 3rem;
      }
    }
  }
`;
const IMGBgBanner = styled.div`
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #691b9a9d;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  }
`;
const Title = styled.h2`
  color: #00bbd4c7;

  @media (min-width: 768px) {
    letter-spacing: 1rem;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const IMGContainer2 = styled.div`
  width: 20rem;

  @media (min-width: 768px) {
    border-radius: 10px;
    width: 40%;
    margin-right: 2rem;
  }
  img {
    object-position: center;
    object-fit: cover;
  }
`;
const Caption2 = styled.div`
  width: 100%;
  border: none;
  @media (min-width: 768px) {
    border-left: 1px solid gray;
    width: 60%;
    padding-left: 2rem;
  }
`;
