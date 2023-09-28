import { styled } from "styled-components";
import useDark from "../helpers/useDark";
import foto from "../assets/imagen5.jpg";
import Col from "react-bootstrap/esm/Col";

const CardConsultancy = ({ acronym, name, content }) => {
  const { darkMode } = useDark();
  return (
    <Col xs={11} md={6} className="my-1 p-4">
      <Card className="d-flex justify-btw align-center" $darkMode={darkMode}>
        <CardImg className="img__container" $bgImage={foto}></CardImg>
        <CardTitle className="text-center">
          <div className="mask">{acronym}</div>
        </CardTitle>
        <CardCaption $darkMode={darkMode}>
          <h5>{name}</h5>
          <p>{content}</p>
          <Button className="card__btn p-3 font-bold w-100">
            Contacta un asesor
          </Button>
        </CardCaption>
      </Card>
    </Col>
  );
};

export default CardConsultancy;

const Card = styled.div`
  position: relative;
  height: 30rem;
  background-color: ${(props) =>
    props.$darkMode ? props.theme.other.dark : "white"};
  &:hover .mask::after {
    transform: scale(4);
  }
  &:hover .mask {
    color: white;
  }
`;
const CardImg = styled.div`
  background-image: url(${(props) => props.$bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-basis: 40%;
  height: 100%;
`;
const CardTitle = styled.h3`
  width: 6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  color: ${(props) => props.theme.light.primaryColor};
  background-color: ${(props) => props.theme.other.light};
  background-color: white;
  @media (min-width: 768px) {
    width: 8rem;
    height: 8rem;
    left: 30%;
  }
  .mask {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 200;
    overflow: hidden;
    transition: color 0.7s ease;
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.light.secondaryColor};
      border-radius: 50%;
      position: absolute;
      z-index: -100;
      top: 50%;
      left: 100%;
      transform: scale(0.5);
      transition: transform 0.7s ease;
    }
  }
`;
const CardCaption = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
  flex-basis: 65%;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  @media (min-width: 768px) {
    padding: 1.5rem 2.5rem 1.5rem 5.5rem;
  }
`;

const Button = styled.button`
  border: none;
  color: #ffffff;
  background-color: #5050e7;
  position: relative;
  bottom: 0;
  font-size: 1.6rem;
`;
