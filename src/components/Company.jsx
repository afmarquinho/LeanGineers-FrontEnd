import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { theme } from "../helpers/theme";
import { History, Mision, Values, Vision } from "./";

const Company = () => {
  const [history, setHistory] = useState(true);
  const [mision, setMision] = useState(false);
  const [vision, setVision] = useState(false);
  const [values, setValues] = useState(false);
  useEffect(() => {
    setHistory(true);
    setMision(false);
    setVision(false);
    setValues(false);
  }, []);
  const onHistory = () => {
    setHistory(true);
    setMision(false);
    setVision(false);
    setValues(false);
  };
  const onMision = () => {
    setHistory(false);
    setMision(true);
    setVision(false);
    setValues(false);
  };
  const onVision = () => {
    setHistory(false);
    setMision(false);
    setVision(true);
    setValues(false);
  };
  const onValues = () => {
    setHistory(false);
    setMision(false);
    setVision(false);
    setValues(true);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3">
          <Botones className="botones">
            <Boton
              type="button"
              onClick={onHistory}
              theme={theme}
              className={history ? "active" : ""}
            >
              Historia
            </Boton>
            <Boton
              type="button"
              onClick={onMision}
              theme={theme}
              className={mision ? "active" : ""}
            >
              Misión
            </Boton>
            <Boton
              type="button"
              onClick={onVision}
              theme={theme}
              className={vision ? "active" : ""}
            >
              Visión
            </Boton>
            <Boton
              type="button"
              onClick={onValues}
              theme={theme}
              className={values ? "active" : ""}
            >
              Valores
            </Boton>
          </Botones>
        </div>
        <div className="col-12 col-md-9">
          {history ? (
            <History />
          ) : mision ? (
            <Mision />
          ) : vision ? (
            <Vision />
          ) : (
            <Values />
          )}
        </div>
      </div>
    </div>
  );
};
// TODO: SEPARARLA HISTORIA EN COMPONENTES

export default Company;
const Botones = styled.div`
  .active {
    background-color: ${(props) => props.theme.light.secondaryColor};
    color: ${(props) => props.theme.light.textLight};
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;
const Boton = styled.button`
  font-weight: 900;
  width: 100%;
  margin: 0 0 0.5rem 0;
  padding: 1rem;
  color: ${(props) => props.theme.light.secondaryColor};
  background-color: ${(props) => props.theme.light.primaryColor};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  @media (min-width: 768px) {
    margin: 0 0 0.5rem 1rem;
  }
  &:hover {
    background-color: ${(props) => props.theme.light.secondaryColor};
    color: ${(props) => props.theme.light.textLight};
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
`;
