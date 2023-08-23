import styled from "@emotion/styled";
import persona1 from "../assets/persona1.jpg";
import persona2 from "../assets/persona2.jpg";
import persona3 from "../assets/persona3.jpg";
import persona4 from "../assets/persona4.jpg";

const OurTeam = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Titulo>Nuestro Equipo</Titulo>
          <Cards className="cards">
            <Card className="card">
              <Cargo className="card__cargo">
                Nombre y Aprellido
                <br /> <span>CARGO</span>
              </Cargo>
              <img className="card__img" src={persona1} alt="foto1" />
              <div className="card__caption d-flex-column justify-center align-center">
                <Name className="caption__title text-center">
                  Nombre y Apellido
                </Name>
                <Text className="caption__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  labore quod qui sapiente hic commodi dolorum tempore.
                  Recusandae, tenetur dicta?
                </Text>
              </div>
            </Card>

            <Card className="card">
              <Cargo className="card__cargo">
                Nombre y Aprellido
                <br /> <span>CARGO</span>
              </Cargo>
              <img className="card__img" src={persona2} alt="foto1" />
              <div className="card__caption d-flex-column justify-center align-center">
                <Name className="caption__title text-center">
                  Nombre y Apellido
                </Name>
                <Text className="caption__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  labore quod qui sapiente hic commodi dolorum tempore.
                  Recusandae, tenetur dicta?
                </Text>
              </div>
            </Card>

            <Card className="card">
              <Cargo className="card__cargo">
                Nombre y Aprellido
                <br /> <span>CARGO</span>
              </Cargo>
              <img className="card__img" src={persona3} alt="foto1" />
              <div className="card__caption d-flex-column justify-center align-center">
                <Name className="caption__title text-center">
                  Nombre y Apellido
                </Name>
                <Text className="caption__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  labore quod qui sapiente hic commodi dolorum tempore.
                  Recusandae, tenetur dicta?
                </Text>
              </div>
            </Card>

            <Card className="card">
              <Cargo className="card__cargo">
                Nombre y Aprellido
                <br /> <span>CARGO</span>
              </Cargo>
              <img className="card__img" src={persona4} alt="foto1" />
              <div className="card__caption d-flex-column justify-center align-center">
                <Name className="caption__title text-center">
                  Nombre y Apellido
                </Name>
                <Text className="caption__content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  labore quod qui sapiente hic commodi dolorum tempore.
                  Recusandae, tenetur dicta?
                </Text>
              </div>
            </Card>
          </Cards>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
const Titulo = styled.h3`
  @media (min-width: 768px) {
    text-align: center;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const Card = styled.div`
  width: 20rem;
  height: 25rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  @media (min-width: 768px) {
    width: 25rem;
    height: 30rem;
  }
  cursor: pointer;
  &:hover .card__caption {
    transform: translate(0);
  }
  .card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .card__caption {
    font-size: 1.2rem;
    width: 100%;
    height: 100%;
    text-align: justify;
    position: absolute;
    padding: 4rem 1rem 2rem 1rem;
    background-color: rgba(0, 187, 212, 0.9);
    transform: translate(100%, 100%) rotate(360deg);
    transition: all 0.3s ease-in-out;
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;
const Cargo = styled.span`
  width: 100%;
  position: absolute;
  bottom: 0;
  /* background-color: #000000; */
  background-color: #6a1b9a;
  text-align: center;
  /* color: rgb(0, 187, 212); */
  color: white;
  font-weight: 900;
  padding: 1rem;
  line-height: 2rem;
  span {
    color:#bbbbbb;
  }
`;
const Name = styled.h4`
  color: #000000;
  border-bottom: 4px solid white;
  margin-bottom: 1rem;
  width: 100%;
  padding: 0.5rem;
`;
const Text = styled.p`
  line-height: 1.5rem;
`;
