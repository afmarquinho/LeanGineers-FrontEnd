import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { theme } from "../helpers/theme";

const Company = () => {
  const [history, setHistory] = useState(true);
  const [mision, setMision] = useState(false);
  const [vision, setVision] = useState(false);
  const [values, setValues] = useState(false);
  useEffect(() => {
    setHistory(true);
    setMision(false);
    setVision(false);
    setValues(false);
  }, []);
  const onHistory = () => {
    setHistory(true);
    setMision(false);
    setVision(false);
    setValues(false);
  };
  const onMision = () => {
    setHistory(false);
    setMision(true);
    setVision(false);
    setValues(false);
  };
  const onVision = () => {
    setHistory(false);
    setMision(false);
    setVision(true);
    setValues(false);
  };
  const onValues = () => {
    setHistory(false);
    setMision(false);
    setVision(false);
    setValues(true);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="bontones">
            <Boton type="button" onClick={onHistory} theme={theme}>
              Historia
            </Boton>
            <Boton type="button" onClick={onMision} theme={theme}>
              Misión
            </Boton>
            <Boton type="button" onClick={onVision} theme={theme}>
              Visión
            </Boton>
            <Boton type="button" onClick={onValues} theme={theme}>
              Valores
            </Boton>
          </div>
        </div>
        <div className="col-12 col-md-9">
          {history ? (
            //* HISTORIA
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="history">
                    <h3 className="history__title m-0">Trayectoria</h3>
                    <div className="history__content">
                      <p className="history__text text-justify">
                        <Span>2018: </Span>Leangineers nace en el año 2018, en
                        un principio producto de la necesidad de acompañar al
                        estudiante de ingeniería en la adquisición de material
                        de estudio en los componentes claves de la carrera.
                      </p>

                      <p className="history__text text-justify">
                        <Span>2020: </Span>En abril del año 2020, durante la
                        contingencia sanitaria del COVID-19, se decidió
                        reinventar la organización para brindar servicios de
                        consultoría a empresas y capacitación a profesionales en
                        áreas de Mejora Continua, Liderazgo.
                      </p>

                      <p className="history__text text-justify">
                        <Span>2021: </Span> En junio de 2021 decidimos rediseñar
                        nuestra marca para poder entregar nuestros productos de
                        una forma más profesional.
                      </p>

                      <p className="history__text text-justify">
                        <Span>2022: </Span>En agosto de 2022 se agregaron al
                        portafolio nuevos elementos como la Innovación y las
                        nuevas tecnologías.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : //* FIN HISTORIA
          mision ? (
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="mision">
                    <h3 className="mision__title m-0">Mision</h3>
                    <p className="mision__content text-justify">
                      En Leangineers, buscamos el crecimiento constante de
                      profesionales y empresas a través del conocimiento y la
                      innovación. Capacitamos a líderes para dirigir procesos
                      exitosos en sus organizaciones y ayudamos a las empresas a
                      destacar en sus sectores. Nuestro compromiso es empoderar
                      el cambio y el éxito sostenible en el mundo empresarial y
                      profesional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : vision ? (
            //* VISION
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="vision">
                    <h3 className="vision__title m-0">Vision</h3>
                    <p className="vision__content text-justify">
                      Para el año 2030, Leangineers se habrá consolidado como
                      una fuerza impulsora de cambio y excelencia en
                      Latinoamérica. Nos posicionaremos como la principal
                      referencia en consultoría y formación en la región, a
                      través de una propuesta de valor innovadora y adaptada a
                      las necesidades cambiantes, proporcionando soluciones que
                      trasciendan los límites convencionales. Nuestro compromiso
                      será el de continuar empoderando a profesionales y
                      organizaciones para que alcancen un éxito sostenible y se
                      destaquen en un panorama empresarial en constante
                      evolución.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            //* FIN VIISION
            //* VALORES
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="values">
                    <h3 className="values__title m-0">Valores</h3>
                    <p className="values__content text-justify">
                      <Span>Trabajo en equipo:</Span> Valoramos la colaboración
                      y el esfuerzo conjunto. Reconocemos que, al trabajar
                      juntos, combinando nuestras habilidades y conocimientos,
                      podemos lograr resultados más significativos y alcanzar
                      metas ambiciosas.
                    </p>
                    <p className="values__content text-justify">
                      <Span>Compromiso:</Span>
                      Estamos dedicados a cumplir nuestras promesas y aportar
                      nuestro máximo esfuerzo en todo lo que hacemos. Nuestro
                      compromiso se refleja en la calidad de nuestro trabajo y
                      en la búsqueda constante de soluciones efectivas.{" "}
                    </p>
                    <p className="values__content text-justify">
                      <Span> Excelencia:</Span>
                      Nos esforzamos por alcanzar los más altos estándares en
                      todas nuestras acciones y entregables. Buscamos la
                      perfección en cada detalle y nos esmeramos por superar las
                      expectativas de nuestros clientes y socios.
                    </p>
                    <p className="values__content text-justify">
                      <Span> Innovación y creatividad:</Span>
                      Valoramos la originalidad y la capacidad de pensar de
                      manera creativa. Fomentamos la generación de nuevas ideas
                      y soluciones innovadoras que desafíen lo convencional y
                      abran nuevas posibilidades.{" "}
                    </p>
                    <p className="values__content text-justify">
                      <Span> Adaptabilidad:</Span>
                      Reconocemos la importancia de ser flexibles y abiertos al
                      cambio. Estamos dispuestos a ajustar nuestros enfoques y
                      estrategias según las circunstancias cambiantes y a
                      aprender de nuevas experiencias.{" "}
                    </p>
                    <p className="values__content text-justify">
                      <Span> Accountability:</Span>
                      Asumimos la responsabilidad de nuestras acciones y
                      decisiones. Nos esforzamos por ser transparentes en
                      nuestras operaciones y tomamos medidas para corregir
                      errores y mejorar constantemente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            //* FIN VALORES
          )}
        </div>
      </div>
    </div>
  );
};
// TODO: SEPARARLA HISTORIA EN COMPONENTES

export default Company;
const Boton = styled.button`
  font-weight: 900;
  width: 100%;
  margin: 0 0 0.5rem 0;
  padding: 1rem;
  color: ${(props) => props.theme.light.secondaryColor};
  background-color: ${(props) => props.theme.light.primaryColor};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  @media (min-width: 768px) {
    margin: 0 0 0.5rem 1rem;
  }
  &:hover {
    background-color: ${(props) => props.theme.light.secondaryColor};
    color: ${(props) => props.theme.light.textLight};
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;
const Span = styled.span`
  font-weight: bold;
`;
