import { useState } from "react";
import { consultorias, countries, cursos } from "../helpers/options";
import { styled } from "styled-components";
import useDark from "../helpers/useDark";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const EstoyInteresado = () => {
  const { darkMode } = useDark();
  const [consultoria, setConsultoria] = useState(false);
  const [formacion, setFormacion] = useState(false);
  const onOption = (e) => {
    const selected = e.target.value;
    if (selected === "") {
      setConsultoria(false);
      setFormacion(false);
      return;
    }

    if (selected === "consultorias") {
      setConsultoria(true);
      setFormacion(false);
      return;
    }
    if (selected === "formaciones") {
      setConsultoria(false);
      setFormacion(true);
      return;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  // TODO: CORREO DE TRATAMIENTO DE DATOS
  // TODO: VALIDAR EL FORMULARIO Y AGREGAR CHECK PARA EL NEWSLETTER
  return (
    <>
      <hr />
      <Container fluid>
        <Row>
          <Col className="m-0 p-0 d-flex flex-column flex-lg-row justify-center align-center">
            <Title
              className="h-100 w-100 d-flex-column justify-center"
              $darkMode={darkMode}
            >
              <h2>
                ¿Estas Interesado?,{" "}
                <span className="font-bold text-primario">¡Escríbemos!</span>
              </h2>

              <h3>
                "Mantente al tanto de todas las novedades suscribiéndote a
                nuestra newsletter y siguiéndonos en redes sociales."
              </h3>
            </Title>

            {/* <Col xs={12} sm={10} md={8} lg={5}> */}
            <Form
              action=""
              onSubmit={onSubmit}
              className="w-100"
              $darkMode={darkMode}
            >
              <span className="nota">
                Todos los campos marcados con ({" "}
                <span className="asterisco">*</span> ) son información
                obligatoria al momento de llenar el formulario
              </span>

              <div className="d-flex flex-column flex-lg-row gap">
                <div className="input-group d-flex-column my-3">
                  <Label htmlFor="name" $darkMode={darkMode}>
                    <span className="asterisco">*</span> Nombre y Apellido{" "}
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    className="name p-3"
                    $darkMode={darkMode}
                    placeholder="* Nombre y Apellido"
                  />
                </div>

                <div className="input-group d-flex-column my-3">
                  <Label htmlFor="email" $darkMode={darkMode}>
                    <span className="asterisco">*</span>Correo electronico{" "}
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    className="email p-3"
                    $darkMode={darkMode}
                    placeholder="* correo@dominio.com"
                  />
                </div>
              </div>

              <div className="d-flex flex-column flex-lg-row gap">
                <div className="input-group d-flex-column my-3">
                  <Label htmlFor="tel" $darkMode={darkMode}>
                    <span className="asterisco">*</span>Teléfono
                  </Label>
                  <Input
                    type="tel"
                    name="tel"
                    className="tel p-3"
                    $darkMode={darkMode}
                    placeholder="* telefono, p.e.: +573101234567"
                  />
                </div>

                <div className="input-group d-flex-column my-3">
                  <Label htmlFor="country" $darkMode={darkMode}>
                    <span className="asterisco">*</span>País
                  </Label>
                  <Select
                    name="country"
                    id=""
                    className="p-3"
                    $darkMode={darkMode}
                    placeholder="país"
                  >
                    <option value="">* -- Seleccione --</option>
                    {countries.map((country) => (
                      <option value={country} key={country}>
                        {country}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="d-flex flex-column flex-lg-row gap">
                <div className="input-group d-flex-column my-3">
                  <Label2 htmlFor="" $darkMode={darkMode}>
                    <span>*</span>Estoy interesado en:
                  </Label2>
                  <Select
                    name=""
                    id=""
                    onChange={onOption}
                    className="p-3"
                    $darkMode={darkMode}
                  >
                    <option value="">--Seleccione--</option>
                    <option value="consultorias">
                      Consultorías empresariales
                    </option>
                    <option value="formaciones">Formaciones</option>
                  </Select>
                </div>

                <div className="input-group d-flex-column my-3">
                  {consultoria && (
                    <>
                      <Label2 htmlFor="cual" $darkMode={darkMode}>
                        {" "}
                        <span>*</span>¿Cuál?
                      </Label2>
                      <Select
                        name="cual"
                        id=""
                        className="p-3 ms-2"
                        $darkMode={darkMode}
                      >
                        <option value="">--Seleccione--</option>
                        {consultorias.map((consultoria) => (
                          <option value={consultoria} key={consultoria}>
                            {consultoria}
                          </option>
                        ))}
                      </Select>
                    </>
                  )}
                  {formacion && (
                    <>
                      <Label2 htmlFor="cual" $darkMode={darkMode}>
                        {" "}
                        <span>*</span>¿Cuál?
                      </Label2>
                      <Select name="cual" id="" className="p-3">
                        <option value="">--Seleccione--</option>
                        {cursos.map((curso) => (
                          <option value={curso} key={curso}>
                            {curso}
                          </option>
                        ))}
                      </Select>
                    </>
                  )}
                </div>
              </div>

              <div className="input-group d-flex-column my-1">
                <Label2 htmlFor="infoAdicional" $darkMode={darkMode}>
                  <span className="asterisco">*</span>
                  Información Adicional (opcional){" "}
                </Label2>
                <TextArea
                  name="infoAdicional"
                  id=""
                  cols="30"
                  rows="5"
                  className="p-2"
                  $darkMode={darkMode}
                ></TextArea>
              </div>
              <div className="input-group  my-1">
                <label htmlFor="consent" className="consent-label text-justify">
                  <input type="checkbox" name="consent" id="" value="acepto" />
                  <span className="consent-span">
                    Autorizo a Leangineers para enviarme la información
                    solicitada y registrar los datos que he suministrado de
                    manera libre y voluntaria en su base de datos para fines
                    comerciales, envíos de estados de cuenta, cobranza,
                    transacciones financieras y mercadeo de productos y que
                    serán tratados de acuerdo a lo dispuesto en la Ley
                    colombiana 1581 de 2012 sobre la política de protección de
                    datos. De igual manera hago constar que puedo ejercer los
                    derechos de protección a través del canal{" "}
                    <span className="asterisco">correo@correo.com</span> y ante
                    las entidades de control estatal.
                  </span>
                </label>
              </div>
              <div className="input-group d-flex justify-content-center my-3">
                <BtnEnviar
                  type="submit"
                  value="ENVIAR"
                  className="p-3 font-bold"
                  $darkMode={darkMode}
                />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default EstoyInteresado;
const Title = styled.div`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
  background-color: transparent;

  h2 {
    text-align: center;
    span {
      color: ${(props) =>
        props.$darkMode
          ? props.theme.other.yellowDeepColor
          : props.theme.other.blueColor};
    }
  }
  h3 {
    display: none;
  }
  @media (min-width: 992px) {
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
    flex-basis: 35%;
    text-align: start;
    padding: 4rem;
    background-color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.primaryDeepColor
        : props.theme.light.secondaryColor};
    h2 {
      text-align: start;
    }
    h3 {
      display: block;
      padding-right: 3rem;
    }
  }
`;

const Form = styled.form`
  width: 80%;
  max-width: 50rem;

  @media (min-width: 992px) {
    width: 70%;
    max-width: 70%;
    padding: 0 4rem 0 2rem;
    flex-basis: 65%;
  }
  .nota {
    font-size: 1.2rem;
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
    .asterisco {
      color: red;
    }
  }
  label {
    line-height: 1;

    .consent-span {
      font-size: 1.2rem;
      text-align: justify !important;
      margin-left: 1.5rem;
      color: ${(props) =>
        props.$darkMode
          ? props.theme.dark.textColor
          : props.theme.light.textColor};
    }
  }
  .gap{
    gap: 1rem;
  }
`;
const Input = styled.input`
  background-color: ${(props) => (props.$darkMode ? "#067d8d1f" : "white")};
  border: 1px solid #067d8d;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  border-top-left-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
  outline: none;
`;
const Select = styled.select`
  background-color: ${(props) => (props.$darkMode ? "#067d8d1f" : "white")};
  border: 1px solid #067d8d;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  border-top-left-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
  outline: none;
  option {
    background-color: ${(props) => (props.$darkMode ? "#067d8d1f" : "white")};
    color: ${(props) => props.theme.light.textColor};
  }
`;
const TextArea = styled.textarea`
  background-color: ${(props) => (props.$darkMode ? "#067d8d1f" : "white")};
  border: 1px solid #067d8d;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  border-top-left-radius: 8px !important;
  border-bottom-right-radius: 8px !important;
  outline: none;
  resize: none;
`;
const BtnEnviar = styled(Input)`
  width: 50%;
  background-color: ${(props) =>
    props.$darkMode
      ? "#067d8d1f"
      : props.theme.light.secondaryColor};

  border: 1px solid #005f6b;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.secondaryColor
        : props.theme.light.primaryColor};
  }
`;
const Label = styled.label`
  display: none;
  line-height: 1.8 !important;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  .asterisco {
    color: red;
  }
`;
const Label2 = styled(Label)`
  display: block;
`;
