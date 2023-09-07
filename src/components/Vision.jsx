import { styled } from "styled-components";
import useDark from "../helpers/useDark";


const Vision = () => {
  const { darkMode } = useDark();
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <VisionContainer className="vision" $darkMode={darkMode}>
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
        </VisionContainer>
      </div>
    </div>
  </div>
  )
}

export default Vision

const VisionContainer = styled.div`
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
