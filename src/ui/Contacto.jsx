import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div className="contacto">
      <div className="container-fluid">
        <div className="row">
          <Col className="col bg-primario d-flex justify-end aln-center px-4">
            <div className="correo">
              <Link className="text-white">correo@correo.com</Link>
            </div>
            <div className="telefono text-white">
              <Link className="text-white">(000)1234567</Link>
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

const Col = styled.div`
  height: 4rem;
  border-bottom: 0.5rem solid #00bcd4;
  .correo {
    border-right: 1px solid white;
    padding: 0 2rem;
    &:hover {
      background-color: #540772;
    }
  }
  .telefono {
    border-left: 1px solid white;
    padding: 0 2rem;
    &:hover {
      background-color: #540772;
    }
  }
`;
