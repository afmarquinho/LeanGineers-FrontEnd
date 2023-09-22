import styled from "styled-components";
import { Article } from "../components";
import Layout from "../layout/Layout";
import foto from "../assets/imagen4.jpg";

const ArticlePage = () => {
  let title = "Innovación Disruptiva: El Motor del Futuro";
  let author = "Marco Fernández";
  let content = `La innovación es el núcleo de la evolución en el mundo empresarial y tecnológico. En un entorno competitivo y en constante cambio, las empresas que logran sobresalir son aquellas capaces de abrazar y aplicar la innovación de manera efectiva. Sin embargo, no todas las formas de innovación son iguales. Una de las más potentes y transformadoras es la innovación disruptiva.\n\n La Naturaleza de la Innovación Disruptiva\n\n La innovación disruptiva no se limita a hacer pequeñas mejoras incrementales en productos o servicios existentes, sino que reimagina por completo la forma en que se abordan las necesidades y los problemas. Implica una reinvención radical, a menudo alterando mercados enteros y dejando a su paso un paisaje empresarial transformado.\n\n Ejemplos Emblemáticos\n\n Un ejemplo clásico de innovación disruptiva es la llegada de los automóviles eléctricos al mercado automotriz. Inicialmente, eran vistos como una alternativa interesante pero no amenazante a los vehículos de combustión interna. Sin embargo, empresas como Tesla demostraron que era posible no solo igualar, sino superar en muchos aspectos a los vehículos tradicionales. Este avance tecnológico no solo cambió la forma en que concebimos la movilidad, sino que también sacudió los cimientos de la industria automotriz.\n\n La Innovación Disruptiva y las Empresas\n\n Las empresas que abrazan la innovación disruptiva se caracterizan por su apertura a riesgos y cambios radicales. Adoptan una mentalidad de "pensamiento fuera de la caja" y están dispuestas a desafiar las convenciones establecidas. Además, fomentan una cultura de experimentación y aprendizaje continuo, permitiendo a los empleados explorar nuevas ideas y enfoques sin temor a la falla.\n\n El Papel de la Tecnología\n\n La tecnología juega un papel fundamental en la habilitación de la innovación disruptiva. Avances como la inteligencia artificial, la biotecnología y la energía renovable están allanando el camino para soluciones completamente nuevas en una amplia gama de industrias. Estas tecnologías no solo están mejorando la eficiencia y la escalabilidad, sino que también están abriendo oportunidades para abordar problemas que antes parecían insolubles.\n\n El Desafío de la Adopción\n\n A pesar de su potencial transformador, la innovación disruptiva no siempre es fácil de adoptar. Las empresas arraigadas en formas de hacer negocios tradicionales pueden encontrar difícil adaptarse a un enfoque tan radicalmente diferente. Además, la incertidumbre y los riesgos asociados con la innovación disruptiva pueden ser intimidantes. Sin embargo, las recompensas pueden ser enormes para aquellos dispuestos a embarcarse en este viaje.\n\n Conclusiones\n\n La innovación disruptiva es el motor del futuro. Aquellas empresas y líderes que se comprometan con esta forma de pensar estarán mejor posicionados para prosperar en un mundo que cambia rápidamente. Al abrazar la transformación radical y aprovechar las oportunidades que la tecnología ofrece, las organizaciones pueden no solo mantenerse a la vanguardia, sino también redefinir industrias enteras y dejar una marca indeleble en el mundo. En última instancia, la innovación disruptiva no solo se trata de mantenerse relevante, sino de forjar un futuro más brillante y prometedor para todos.`;
  let date = "23-feb-2023";
  return (
    <Layout>
      <Article
        title={title}
        backgroundImage={foto}
        author={author}
        content={content}
        date={date}
      >
        <>
          {content.split("\n\n").map((parrafo, index) => (
            <p key={index}>{parrafo}</p>
          ))}
        </>
      </Article>
    </Layout>
  );
};

export default ArticlePage;
