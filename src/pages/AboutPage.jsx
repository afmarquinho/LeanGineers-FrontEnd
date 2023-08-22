import React from "react";
import Layout from "../layout/Layout";
import foto from "../assets/photo3.jpg";
import { styled } from "styled-components";
import History from "../components/History";
import OurTeam from "../components/OurTeam";

const AboutPage = () => {
  return (
    <Layout>
      <>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <Banner className="banner">
                <IMGContianer1 className="banner__img-container ovf-hidden"></IMGContianer1>
                <Caption1 className="banner__text-container">
                  <p className="banner__text m-0 text-justify">
                    "Descubre el poder de la innovación y mejora continua con
                    nuestra <span>consultoría</span> y{" "}
                    <span>entrenamiento empresarial</span>. Juntos,
                    transformemos tu camino hacia el éxito."
                  </p>
                  <h2 className="banner__text-titulo m-0">¿Quienes somos?</h2>
                </Caption1>
              </Banner>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <About className="about">
                <IMGContainer2 className="about__img-container ovf-hidden d-flex justify-center align-center">
                  <img src={foto} alt="about__img" />
                </IMGContainer2>
                <Caption2 className="about__text-container">
                  <h3 className="about__tittle">Sobre LeanGineers</h3>
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
        <History />
        <OurTeam/>
      </>
    </Layout>
  );
};

export default AboutPage;
const Banner = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
   background-color: #691b9a9d; 

  }
`;
const IMGContianer1 = styled.div`
  width: 100%;
  height: 8rem;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 768px) {
    height: 55rem;
  }
`;
const Caption1 = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 90%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 4rem 3rem 3rem 3rem;
  @media (min-width: 768px) {
    width: 50%;
  }
  h2 {
    color: #00bbd4c7;
    @media (min-width: 768px) {
      font-size: 7rem;
    }
  }
  p {
    display: none;
    font-weight: bold;
    font-size: 2rem;
    span {
      color: #fffb00;
    }
    @media (min-width: 768px) {
      display: block;
    }
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
