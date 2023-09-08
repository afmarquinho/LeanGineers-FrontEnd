import { useState } from "react";
import { consultorias, countries, cursos } from "../helpers/options";
import { styled } from "styled-components";
import useDark from "../helpers/useDark";

const EstoyInteresado = () => {
  const { darkMode } = useDark();
  const [consultoria, setConsultoria] = useState(false);
  const [formacion, setFormacion] = useState(false);
  const onOption = (e) => {
    const selected = e.target.value;
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
  const onSubmit = () => {
    e.preventDefault();
  };
  // TODO: CORREO DE TRATAMIENTO DE DATOS
  return (
    <>
      <hr />
      <div className="container">
        <div className="row d-flex justify-center align-center">
          <Title className="text-center" $darkMode={darkMode}>
            ¿Estas Interesado?,{" "}
            <span className="font-bold text-primario">¡Escríbemos!</span>
          </Title>
          <div className="col-12 col-sm-10 col-md-8 col-lg-5">
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
              <div className="input-group d-flex-column my-1">
                <Label htmlFor="name" $darkMode={darkMode}>
                  <span className="asterisco">*</span> Nombre y Apellido{" "}
                </Label>
                <Input type="text" name="name" className="name p-3"  $darkMode={darkMode}/>
              </div>
              <div className="input-group d-flex-column my-1">
                <Label htmlFor="email" $darkMode={darkMode}>
                  <span className="asterisco">*</span>Correo electronico{" "}
                </Label>
                <Input type="email" name="email" className="email p-3" $darkMode={darkMode}/>
              </div>
              <div className="input-group d-flex-column my-1">
                <Label htmlFor="tel" $darkMode={darkMode}>
                  <span className="asterisco">*</span>Teléfono
                </Label>
                <Input type="tel" name="tel" className="tel p-3"  $darkMode={darkMode}/>
              </div>

              <div className="input-group d-flex-column my-1">
                <Label htmlFor="country" $darkMode={darkMode}>
                  <span className="asterisco">*</span>País
                </Label>
                <Select name="country" id="" className="p-3"  $darkMode={darkMode}>
                  <option value="">--Seleccione--</option>
                  {countries.map((country) => (
                    <option value={country} key={country}>
                      {country}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="input-group d-flex-column my-1">
                <Label htmlFor="" $darkMode={darkMode}>
                  <span className="asterisco">*</span>Estoy interesado en:
                </Label>
                <Select name="" id="" onChange={onOption} className="p-3"  $darkMode={darkMode}>
                  <option value="">--Seleccione--</option>
                  <option value="consultorias">
                    Consultorías empresariales
                  </option>
                  <option value="formaciones">Formaciones</option>
                </Select>
              </div>
              {consultoria && (
                <div className="input-group d-flex-column my-1">
                  <Label htmlFor="cual" $darkMode={darkMode}>
                    {" "}
                    <span className="asterisco">*</span>¿Cuál?
                  </Label>
                  <Select name="cual" id="" className="p-3"  $darkMode={darkMode}>
                    <option value="">--Seleccione--</option>
                    {consultorias.map((consultoria) => (
                      <option value={consultoria} key={consultoria}>
                        {consultoria}
                      </option>
                    ))}
                  </Select>
                </div>
              )}
              {formacion && (
                <div className="input-group d-flex-column my-1">
                  <label htmlFor="cual" $darkMode={darkMode}>
                    ¿Cuál?
                  </label>
                  <Select name="cual" id="" className="p-3">
                    <option value="">--Seleccione--</option>
                    {cursos.map((curso) => (
                      <option value={curso} key={curso}>
                        {curso}
                      </option>
                    ))}
                  </Select>
                </div>
              )}
              <div className="input-group d-flex-column my-1">
                <Label htmlFor="infoAdicional" $darkMode={darkMode}>
                  <span className="asterisco">*</span>
                  Información Adicional (opcional){" "}
                </Label>
                <TextArea
                  name="infoAdicional"
                  id=""
                  cols="30"
                  rows="5"
                  className="p-2"
                  $darkMode={darkMode}
                ></TextArea>
              </div>
              <div className="input-group  my-3">
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

              <Button
                type="submit"
                value="ENVIAR"
                className="p-3 w-100 my-4 font-bold"
                $darkMode={darkMode}
              />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EstoyInteresado;
const Title = styled.h2`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
`;

const Form = styled.form`
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
`;
const Input = styled.input`
  background-color: ${props => props.$darkMode ? "#067d8d1f" :"white"}; 
  border: 1px solid #067d8d;
  color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
  border-top-left-radius: 15px !important;
  border-bottom-right-radius: 15px !important;
  outline: none;
`;
const Select = styled.select`
  background-color: ${props => props.$darkMode ? "#067d8d1f" :"white"}; 
  border: 1px solid #067d8d;
  color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
  border-top-left-radius: 15px !important;
  border-bottom-right-radius: 15px !important;
  outline: none;
  option{
    background-color: ${props => props.$darkMode ? "#067d8d1f" :"white"}; 
    color: ${(props) => props.theme.light.textColor};
  }
`;
const TextArea = styled.textarea`
   background-color: ${props => props.$darkMode ? "#067d8d1f" :"white"}; 
  border: 1px solid #067d8d;
  color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
  border-top-left-radius: 15px !important;
  border-bottom-right-radius: 15px !important;
  outline: none;
  resize: none;
`;
const Button = styled(Input)`
  background-color: #00bcd4;
  border: 1px solid #005f6b;
  cursor: pointer;
  &:hover {
    background-color: #95ebf7;
  }
`;
const Label = styled.label`
  line-height: 1.8 !important;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
    .asterisco{
      color: red;
    }
`;
