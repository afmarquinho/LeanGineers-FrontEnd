import { styled } from "styled-components";

const Values = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="values">
            <h3 className="values__title m-0">Valores</h3>
            <p className="values__content text-justify">
              <Span>Trabajo en equipo:</Span> Valoramos la colaboración y el
              esfuerzo conjunto. Reconocemos que, al trabajar juntos, combinando
              nuestras habilidades y conocimientos, podemos lograr resultados
              más significativos y alcanzar metas ambiciosas.
            </p>
            <p className="values__content text-justify">
              <Span>Compromiso:</Span>
              Estamos dedicados a cumplir nuestras promesas y aportar nuestro
              máximo esfuerzo en todo lo que hacemos. Nuestro compromiso se
              refleja en la calidad de nuestro trabajo y en la búsqueda
              constante de soluciones efectivas.{" "}
            </p>
            <p className="values__content text-justify">
              <Span> Excelencia:</Span>
              Nos esforzamos por alcanzar los más altos estándares en todas
              nuestras acciones y entregables. Buscamos la perfección en cada
              detalle y nos esmeramos por superar las expectativas de nuestros
              clientes y socios.
            </p>
            <p className="values__content text-justify">
              <Span> Innovación y creatividad:</Span>
              Valoramos la originalidad y la capacidad de pensar de manera
              creativa. Fomentamos la generación de nuevas ideas y soluciones
              innovadoras que desafíen lo convencional y abran nuevas
              posibilidades.{" "}
            </p>
            <p className="values__content text-justify">
              <Span> Adaptabilidad:</Span>
              Reconocemos la importancia de ser flexibles y abiertos al cambio.
              Estamos dispuestos a ajustar nuestros enfoques y estrategias según
              las circunstancias cambiantes y a aprender de nuevas experiencias.{" "}
            </p>
            <p className="values__content text-justify">
              <Span> Accountability:</Span>
              Asumimos la responsabilidad de nuestras acciones y decisiones. Nos
              esforzamos por ser transparentes en nuestras operaciones y tomamos
              medidas para corregir errores y mejorar constantemente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;

const Span = styled.span`
  font-weight: bold;
`;
