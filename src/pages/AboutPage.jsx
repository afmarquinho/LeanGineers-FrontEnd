import React from "react";
import Layout from "../layout/Layout";
import foto from "../assets/photo3.jpg";
import { styled } from "styled-components";

const AboutPage = () => {
  return (
    <Layout>
      <>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <Banner className="banner">
                <IMGContianer className="img-contenedor ovf-hidden">
                  <img src={foto} alt="" className="obj-fit-cover" />
                </IMGContianer>
                <Caption className="caption">
                  <p className="m-0">
                    "Descubre el poder de la innovación y mejora continua con
                    nuestra <span>consultoría</span> y{" "}
                    <span>entrenamiento empresarial</span>. Juntos,
                    transformemos tu camino hacia el éxito."
                  </p>
                  <h2 className="m-0">¿Quienes somos?</h2>
                </Caption>
              </Banner>
              <div className="col-12">
                <div className="content">
                  <p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
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
    background-color: #691b9add;
  }
`;
const IMGContianer = styled.div`
  width: 100%;
  height: 55rem;

  img {
    width: 100%;
    height: 100%;
    object-position: center;
    position: relative;
  }
`;
const Caption = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 3rem;
  text-justify: center;
  h2 {
    color: #00bbd4c7;
    font-size: 7rem;
  }
  p {
    font-weight: bold;
    font-size: 2rem;
    span {
      color: #fffb00;
    }
  }
`;
