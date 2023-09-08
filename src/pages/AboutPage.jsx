import React from "react";
import Layout from "../layout/Layout";
import foto from "../assets/photo3.jpg";
import { styled } from "styled-components";
import OurTeam from "../components/OurTeam";
import Company from "../components/Company";
import useDark from "../helpers/useDark";
import Banner from "../components/Banner";
import BannerImg from "../assets/fabrica.jpg";

const AboutPage = () => {
  const { darkMode } = useDark();
  const contenidoBanner = (
    <>
      Descubre el poder de la innovación y mejora continua con nuestras{" "}
      <span>consultorías</span>, <span>entrenamientos empresariales</span> y{" "}
      <span>formaciones</span>. Juntos, transformemos tu camino hacia el éxito.
    </>
  );
  return (
    <Layout>
      <>
        <Banner
          title={"¡Conócenos!"}
          contenido={contenidoBanner}
          clase={"bg-banner-about-img"}
          backgroundImage={BannerImg}
        />
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <About className="about">
                <IMGContainer2 className="about__img-container ovf-hidden d-flex justify-center align-center">
                  <img src={foto} alt="about__img" />
                </IMGContainer2>
                <Caption2
                  className="about__text-container"
                  $darkMode={darkMode}
                >
                  <h3 className="banner__titulo">¿Quienes somos?</h3>
                  <p className="about__text m-0 text-justify">
                    Leangineers es una organización orientada a la consultoría y
                    formación, en la que ponemos al servicio de nuestros
                    clientes un enfoque holístico que promueve la implementación
                    de la mejora continua, la innovación, la tecnología y el
                    liderazgo, con el ánimo de generar altos niveles de
                    competitividad en un entorno globalizado. Adicionalmente,
                    entregamos toda nuestra experiencia y conocimientos a todos
                    los profesionales con herramientas que les permiten ser
                    agentes de cambio al interior de sus organizaciones.
                  </p>
                </Caption2>
              </About>
            </div>
          </div>
        </div>
        <Company />
        <OurTeam />
      </>
    </Layout>
  );
};

export default AboutPage;

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
  h3 {
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.titleColor
        : props.theme.light.titleColor};
  }
  p {
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
  }
`;
