import { Link } from "react-router-dom";
import foto from "../assets/photo1.jpg";
import foto2 from "../assets/photo2.jpg";
import foto3 from "../assets/photo3.jpg";
import { styled } from "styled-components";

const Cards2 = () => {
  return (
    <>
      <hr />
      <div className="contenedor container d-flex-column justify-center align-center">
        <H2 className="text-center p-0">
          ¿Por qué somos tu <span>mejor opción</span>?
        </H2>

        <Card className="card d-flex-column rounded-4">
          <div className="img-container img-container1"></div>
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
        <Card className="card d-flex-column rounded-4">
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
        <Card className="card d-flex-column rounded-4">
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
  height: 28rem;
  width: 35rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;
    height: 15rem;
    width: 100%;
  }
  .img-container {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 50%;
    @media (min-width: 768px) {
      width: 35%;
      height: 100%;
    }
  }
  .content {
  }
`;

const Titulo = styled.h3`
  font-weight: bold;
  @media (min-width: 768px) {
  }
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
