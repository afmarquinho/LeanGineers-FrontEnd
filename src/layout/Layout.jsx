import styled from "@emotion/styled";
import Contacto from "../ui/Contacto";
import Navbar from "../ui/Navbar";


const Layout = ({ children }) => {
  return (
    <>
      <Contacto />
      <Main>{children}</Main>
      <Navbar />
    </>
  );
};

export default Layout;
const Main = styled.main`
top: 4rem;
width: 100%;
position: absolute;
overflow-x: hidden;

`