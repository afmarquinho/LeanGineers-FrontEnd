import { styled } from "styled-components";
import useDark from "../helpers/useDark";

const Mision = () => {
  const { darkMode } = useDark();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <MisionContainer className="mision" $darkMode={darkMode}>
            <h3 className="mision__title m-0">Mision</h3>
            <p className="mision__content text-justify">
              En Leangineers, buscamos el crecimiento constante de profesionales
              y empresas a través del conocimiento y la innovación. Capacitamos
              a líderes para dirigir procesos exitosos en sus organizaciones y
              ayudamos a las empresas a destacar en sus sectores. Nuestro
              compromiso es empoderar el cambio y el éxito sostenible en el
              mundo empresarial y profesional.
            </p>
          </MisionContainer>
        </div>
      </div>
    </div>
  );
};

export default Mision;

const MisionContainer = styled.div`
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
