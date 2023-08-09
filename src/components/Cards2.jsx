import { Link } from "react-router-dom";
import foto from "../assets/photo1.jpg";
import foto2 from "../assets/photo2.jpg";
import foto3 from "../assets/photo3.jpg";
import styled from "@emotion/styled";

const Cards2 = () => {
  return (
    <>
      <hr />
      <div className="contenedor container">
        <H2 className="text-center p-0">
          ¿Por qué somos tu <span>mejor opción</span>?
        </H2>
        <Card className="card d-flex-column rounded-4">
          <ImgContainer className="img-container">
            <img
              src={foto}
              alt=""
              className="m-0 p-0 wdt-100 hgt-100 obj-fit-cover"
            />
          </ImgContainer>
          <div className="content p-4">
            <div className="heding">
              <Titulo className="m-0 p-0">Comprometidos con el país</Titulo>
            </div>
            <div className="card-body p-0">
              <p className="m-0 p-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <StyledLink to="#" className="px-5 py-2">
                VISITAR
              </StyledLink>
            </div>
          </div>
        </Card>
        <Card className="card d-flex-column rounded-4">
          <ImgContainer className="img-container">
            <img
              src={foto2}
              alt=""
              className="m-0 p-0 wdt-100 hgt-100 obj-fit-cover"
            />
          </ImgContainer>
          <div className="content p-4">
            <div className="heding">
              <Titulo className="m-0 p-0">Comprometidos con el país</Titulo>
            </div>
            <div className="card-body p-0">
              <p className="m-0 p-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <StyledLink to="#" className="px-5 py-2">
                VISITAR
              </StyledLink>
            </div>
          </div>
        </Card>
        <Card className="card d-flex-column rounded-4">
          <ImgContainer className="img-container">
            <img
              src={foto3}
              alt=""
              className="m-0 p-0 wdt-100 hgt-100 obj-fit-cover"
            />
          </ImgContainer>
          <div className="content p-4">
            <div className="heding">
              <Titulo className="m-0 p-0">Comprometidos con el país</Titulo>
            </div>
            <div className="card-body p-0">
              <p className="m-0 p-0">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <StyledLink to="#" className="px-5 py-2">
                VISITAR
              </StyledLink>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Cards2;
const H2 = styled.h2`
  font-size: 2rem;
  span {
    color: #6a1b9a;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;
const Card = styled.div`
      overflow: hidden;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    height: 15rem;
    margin-bottom: 2rem;
  }
`;
const ImgContainer = styled.div`
  @media (min-width: 768px) {
    width: 35%;
  }
  img {
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Titulo = styled.h4`
  font-size: 1.8rem;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
const StyledLink = styled(Link)`
  background-color: maroon;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  font-size: 1.5rem;
`;
