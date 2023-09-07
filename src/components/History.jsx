import { styled } from "styled-components";
import useDark from "../helpers/useDark";

const History = () => {
  const { darkMode } = useDark();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <HistoryContainer className="history"  $darkMode={darkMode}>
            <h3 className="history__title m-0">Trayectoria</h3>
            <div className="history__content">
              <p className="history__text text-justify">
                <Span>2018: </Span>Leangineers nace en el año 2018, en un
                principio producto de la necesidad de acompañar al estudiante de
                ingeniería en la adquisición de material de estudio en los
                componentes claves de la carrera.
              </p>

              <p className="history__text text-justify">
                <Span>2020: </Span>En abril del año 2020, durante la
                contingencia sanitaria del COVID-19, se decidió reinventar la
                organización para brindar servicios de consultoría a empresas y
                capacitación a profesionales en áreas de Mejora Continua,
                Liderazgo.
              </p>

              <p className="history__text text-justify">
                <Span>2021: </Span> En junio de 2021 decidimos rediseñar nuestra
                marca para poder entregar nuestros productos de una forma más
                profesional.
              </p>

              <p className="history__text text-justify">
                <Span>2022: </Span>En agosto de 2022 se agregaron al portafolio
                nuevos elementos como la Innovación y las nuevas tecnologías.
              </p>
            </div>
          </HistoryContainer>
        </div>
      </div>
    </div>
  );
};

export default History;

const Span = styled.span`
  font-weight: bold;
`;
const HistoryContainer = styled.div`
h3{
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
}
p{
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
}
`
