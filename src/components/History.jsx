import styled from "@emotion/styled";
import { theme } from "../helpers/theme";

const History = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <H3 className="nuestra.historis-title">Trayectoria</H3>
          <div className="time-line__container">
            <span className="center-line"></span>
            <UL className="time-line__list">
              <LI className="time-line__item" theme={theme}>
                <h4 className="time-line__title">2018</h4>
                <p className="time-line__text">
                  Leangineers nace en el año 2018, en un principio producto de
                  la necesidad de acompañar al estudiante de ingeniería en la
                  adquisición de material de estudio en los componentes claves
                  de la carrera.
                </p>
              </LI>
              <LI className="time-line__item">
                <h4 className="time-line__title">2020</h4>
                <p className="time-line__text">
                  En abril del año 2020, durante la contingencia sanitaria del
                  COVID-19, se decidió reinventar la organización para brindar
                  servicios de consultoría a empresas y capacitación a
                  profesionales en áreas de Mejora Continua, Liderazgo.
                </p>
              </LI>
              <LI className="time-line__item">
                <h4 className="time-line__title">2021</h4>
                <p className="time-line__text">
                  En junio de 2021 decidimos rediseñar nuestra marca para poder
                  entregar nuestros productos de una forma más profesional.
                </p>
              </LI>
              <LI className="time-line__item">
                <h4 className="time-line__title">2022</h4>
                <p className="time-line__text">
                  En agosto de 2022 se agregaron al portafolio nuevos elementos
                  como la Innovación y las nuevas tecnologías.
                </p>
              </LI>
            </UL>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
const H3 = styled.h3`
  @media (min-width: 768px) {
    text-align: center;
  }
`;
const UL = styled.ul`
  position: relative;

  &::before {
    content: "";
    display: flex;
    position: abosolute;
    width: 20px;
    height: 100%;
    background-color: #6a1b9a;
    z-index: 1000;
    top: 0;
    right: 0;
  }
`;
const LI = styled.li`
  text-align: justify;
  width: 90%;
  background-color: ${(props) => props.theme.light.secondaryColor};
  padding: 1.5rem;
  line-height: 1.2;
  box-shadow: 1px 1px 25px #00000052;

  @media (min-width: 768px) {
    width: 45%;
  }
`;
