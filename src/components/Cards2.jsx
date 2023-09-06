import { Link } from "react-router-dom";
import foto from "../assets/photo1.jpg";
import foto2 from "../assets/photo2.jpg";
import foto3 from "../assets/photo3.jpg";
import { styled } from "styled-components";
import useDark from "../helpers/useDark";

const Cards2 = () => {
  const { darkMode } = useDark();
  return (
    <>
      <hr />
      <div className="contenedor container justify-center align-center">
        <H2 className="text-center p-0" $darkMode={darkMode}>
          ¿Por qué somos tu <span>mejor opción</span>?
        </H2>
        <div className="cardContainer d-flex flex-column flex-md-row justify-center align-center">
          <Card className="card d-flex flex-column flex-md-row rounded-4 m-2" $darkMode={darkMode}>
            <div className="img-container img-container1"></div>
            <div className="content p-4">
              <div className="heding m-0">
                <Titulo className="m-0 p-0">Comprometidos con el país</Titulo>
              </div>
              <div className="card-body p-0 m-0">
                <p className="m-0 p-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <StyledLink to="#" className="px-5 py-2">
                  VISITAR
                </StyledLink>
              </div>
            </div>
          </Card>
          <Card className="card d-flex-column rounded-4 m-2" $darkMode={darkMode}>
            <div className="img-container img-container2"></div>
            <div className="content p-4">
              <div className="heding">
                <Titulo className="m-0 p-0">Comprometidos con el país</Titulo>
              </div>
              <div className="card-body p-0">
                <p className="m-0 py-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <StyledLink to="#" className="px-5 py-2">
                  VISITAR
                </StyledLink>
              </div>
            </div>
          </Card>
          <Card className="card d-flex-column rounded-4 m-2" $darkMode={darkMode}>
            <div className="img-container img-container3"></div>
            <div className="content p-4">
              <div className="heding">
                <Titulo className="m-0 p-0">Comprometidos con el país</Titulo>
              </div>
              <div className="card-body p-0">
                <p className="m-0 py-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <StyledLink to="#" className="px-5 py-2">
                  VISITAR
                </StyledLink>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Cards2;
const H2 = styled.h2`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  span {
    font-size: 2.6rem;
    color: ${props => props.theme.light.primaryColor};
    font-weight: bold;
    @media (min-width: 768px) {
      font-size: 5rem;
    }
  }
`;
const Card = styled.div`
  overflow: hidden;
  height: 28rem;
  width: 35rem;
  margin-bottom: 2rem;
  line-height:2.5rem;
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.secondaryColor
      : props.theme.other.ligth};
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;
    height: 15rem !important;
    width: 40rem;
  }
  .img-container {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 50%;
    @media (min-width: 768px) {
      width: 50%;
      height: 100%;
    }
  }
`;

const Titulo = styled.p`
  font-weight: bold;
 
`;

const StyledLink = styled(Link)`
  background-color: maroon;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  font-size: 1.3rem;
  width: 100%;
  display: inline-block;
  text-align: center;
  @media (min-width: 768px) {
    display: inline;
  }
`;
