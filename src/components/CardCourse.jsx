import useDark from "../helpers/useDark";
import imagen1 from "../assets/imagen1.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";


const CardCourse = ({ name, resume, tutor, oldPrice, price }) => {
  const { darkMode } = useDark();
  return (
      <Card className="ovf-hidden p-4" $darkMode={darkMode}>
        <div className="card__img ovf-hidden">
          <img src={imagen1} alt="" className="w-100 h-100" />
        </div>
        <div className="card__caption d-flex-column justify-content-between">
          <div>
            <h4 className="m-0 nombre">{name}</h4>
            <p className="m-0">Aprenderás: {resume}</p>
            <p className="m-0">Intructor: {tutor}</p>
            <p className="m-0 price">
              <span>{oldPrice}</span> {price}
            </p>
          </div>
          <div className="botones d-flex justify-content-between">
            <Mas to="/course/:123" className="mas" $darkMode={darkMode}>
              Saber mas
            </Mas>
            <Comprar className="comprar" $darkMode={darkMode}>
              Comprar
            </Comprar>
          </div>
        </div>
      </Card>
  );
};

export default CardCourse;

const Card = styled.div`
  width: 95%;
  /* max-width: 80rem; */
  margin-bottom:2rem;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.$darkMode ? props.theme.other.dark : "white"};
  @media (min-width: 768px) {
    flex-direction: row;
  }
  .card__img {
    flex-basis: 40%;
  }
  .card__caption {
    padding: 2rem 4rem;
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
const Mas = styled(Link)`
  flex-basis: 48%;
  height: 5rem;
  border: none;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    props.$darkMode
    ? props.theme.dark.secondaryColor
    : props.theme.light.secondaryColor};
  color: white;
  font-weight: bold;
  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
    flex-basis: 45%;
  }
`;
const Comprar = styled(Mas)`
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.other.yellowDeepColor
      : props.theme.other.blueColor};
  color: white;
`;
