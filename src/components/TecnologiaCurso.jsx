import Col from "react-bootstrap/esm/Col";
import styled from "styled-components";
import useDark from "../helpers/useDark";
import { useState } from "react";
import imagen1 from "../assets/imagen1.jpg";

const TecnologiaCurso = () => {
  const { darkMode } = useDark();
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <>
      <Col xs={12} className="my-2 mx-1 p-0">
        <Container className="p-5" $darkMode={darkMode}>
          <Title className="p-0 mb-5 mt-0 card__subtitle" $darkMode={darkMode}>
          Tecnología
          </Title>

          <div className="p-3 course">
            <SubTitle
              className="p-0 course__name"
              $darkMode={darkMode}
              onClick={(e) => setShow1(!show1)}
            >
              Aprendizaje profundo
            </SubTitle>
            <Content1
              className="mt-3 p-2 p-md-5 justify-center align-center"
              $darkMode={darkMode}
              $show1={show1}
            >
              <Card className="card rounded-4 ovf-hidden" $darkMode={darkMode}>
                <div className="card__img ovf-hidden">
                  <img src={imagen1} alt="" className="w-100 h-100" />
                </div>
                <div className="card__caption p-3 d-flex-column justify-content-between">
                  <div>
                    <h5 className="m-0 nombre">Aprendizaje profundo</h5>
                    <p className="m-0">
                      Aprenderás: Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Tempora, cum..
                    </p>
                    <p className="m-0">Intructor: Fulano de tal</p>
                    <p className="m-0 price">
                      <span>$500usd</span> $400usd
                    </p>
                  </div>
                  <div className="botones d-flex justify-content-between w-100">
                    <Mas className="mas" $darkMode={darkMode}>
                      Saber mas
                    </Mas>
                    <Comprar className="comprar" $darkMode={darkMode}>
                      Comprar
                    </Comprar>
                  </div>
                </div>
              </Card>
            </Content1>
          </div>

          <div className="p-3 course">
            <SubTitle
              className="p-0 course__name"
              $darkMode={darkMode}
              onClick={(e) => setShow2(!show2)}
            >
              Big Data
            </SubTitle>
            <Content2
              className="mt-3 p-2 p-md-5 justify-center align-center"
              $darkMode={darkMode}
              $show2={show2}
            >
              <Card className="card rounded-4 ovf-hidden" $darkMode={darkMode}>
                <div className="card__img ovf-hidden">
                  <img src={imagen1} alt="" className="w-100 h-100" />
                </div>
                <div className="card__caption p-3 d-flex-column justify-content-between">
                  <div>
                    <h5 className="m-0 nombre">Big Data</h5>
                    <p className="m-0">
                      Aprenderás: Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Tempora, cum..
                    </p>
                    <p className="m-0">Intructor: Fulano de tal</p>
                    <p className="m-0 price">
                      <span>$500usd</span> $400usd
                    </p>
                  </div>
                  <div className="botones d-flex justify-content-between w-100">
                    <Mas className="mas" $darkMode={darkMode}>
                      Saber mas
                    </Mas>
                    <Comprar className="comprar" $darkMode={darkMode}>
                      Comprar
                    </Comprar>
                  </div>
                </div>
              </Card>
            </Content2>
          </div>

          <div className="p-3 course">
            <SubTitle
              className="p-0 course__name"
              $darkMode={darkMode}
              onClick={(e) => setShow3(!show3)}
            >
              Ciencia de datos
            </SubTitle>
            <Content3
              className="mt-3 p-2 p-md-5 justify-center align-center"
              $darkMode={darkMode}
              $show3={show3}
            >
              <Card className="card rounded-4 ovf-hidden" $darkMode={darkMode}>
                <div className="card__img ovf-hidden">
                  <img src={imagen1} alt="" className="w-100 h-100" />
                </div>
                <div className="card__caption p-3 d-flex-column justify-content-between">
                  <div>
                    <h5 className="m-0 nombre">Ciencia de datos</h5>
                    <p className="m-0">
                      Aprenderás: Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Tempora, cum..
                    </p>
                    <p className="m-0">Intructor: Fulano de tal</p>
                    <p className="m-0 price">
                      <span>$500usd</span> $400usd
                    </p>
                  </div>
                  <div className="botones d-flex justify-content-between w-100">
                    <Mas className="mas" $darkMode={darkMode}>
                      Saber mas
                    </Mas>
                    <Comprar className="comprar" $darkMode={darkMode}>
                      Comprar
                    </Comprar>
                  </div>
                </div>
              </Card>
            </Content3>
          </div>

          <div className="p-3 course">
            <SubTitle
              className="p-0 course__name"
              $darkMode={darkMode}
              onClick={(e) => setShow4(!show4)}
            >
               Aprendizaje Automático
            </SubTitle>
            <Content4
              className="mt-3 p-2 p-md-5 justify-center align-center"
              $darkMode={darkMode}
              $show4={show4}
            >
              <Card className="card rounded-4 ovf-hidden" $darkMode={darkMode}>
                <div className="card__img ovf-hidden">
                  <img src={imagen1} alt="" className="w-100 h-100" />
                </div>
                <div className="card__caption p-3 d-flex-column justify-content-between">
                  <div>
                    <h5 className="m-0 nombre"> Aprendizaje Automático</h5>
                    <p className="m-0">
                      Aprenderás: Lorem ipsum dolor sit amet consectetur,
                      adipisicing elit. Tempora, cum..
                    </p>
                    <p className="m-0">Intructor: Fulano de tal</p>
                    <p className="m-0 price">
                      <span>$500usd</span> $400usd
                    </p>
                  </div>
                  <div className="botones d-flex justify-content-between w-100">
                    <Mas className="mas" $darkMode={darkMode}>
                      Saber mas
                    </Mas>
                    <Comprar className="comprar" $darkMode={darkMode}>
                      Comprar
                    </Comprar>
                  </div>
                </div>
              </Card>
            </Content4>
          </div>
        </Container>
      </Col>


    </>
  );
};

export default TecnologiaCurso;


const Container = styled.div`
  border: 1px solid
    ${(props) => (props.$darkMode ? props.theme.dark.secondaryColor : "gray")};
  background-color: ${(props) =>
    props.$darkMode ? props.theme.other.dark : "#f5fae6"};
`;

const Title = styled.h3`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
`;

const SubTitle = styled.div`
  font-weight: bold;
  border-top: 1px solid
    ${(props) =>
      props.$darkMode
        ? props.theme.dark.titleColor
        : props.theme.light.titleColor};
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  cursor: pointer;
`;

const Content1 = styled.div`
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.background
      : "white"};
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  display: ${(props) => (props.$show1 ? "flex" : "none")};
`;
const Content2 = styled(Content1)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
    display: ${(props) => (props.$show2 ? "flex" : "none")};
`;
const Content3 = styled(Content1)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
    display: ${(props) => (props.$show3 ? "flex" : "none")};
`;
const Content4 = styled(Content1)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
    display: ${(props) => (props.$show4 ? "flex" : "none")};
`;
const Card = styled.div`
  width: 100;
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  background-color: ${(props) =>
    props.$darkMode ? props.theme.other.dark : "white"};
  @media (min-width: 768px) {
    flex-direction: row;
  }
  .card__img {
    flex-basis: 40%;
  }
  .card__caption {
    flex-basis: 60%;
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
    .price {
      font-weight: bold;
      font-size: 2rem;
      span {
        color: ${(props) => (props.$darkMode ? "#b10505" : "red")};
        text-decoration: line-through;
        font-size: 1.6rem;
      }
    }
  }
`;

const Mas = styled.button`
  width: 45%;
  border: none;
  padding: 0.5rem 2rem;

  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.secondaryColor
      : props.theme.light.secondaryColor};
  color: white;
  font-weight: bold;
  @media (min-width: 768px) {
    width: 35%;
  }
`;
const Comprar = styled(Mas)`
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.other.yellowDeepColor
      : props.theme.other.blueColor};
  color: white;
`;
