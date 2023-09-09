import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import styled from "styled-components";
import useDark from "../helpers/useDark";



const Pagination = ({ totalArticulos, articulosPorPagina, onPageChange }) => {
  const { darkMode } = useDark();
  const totalPages = Math.ceil(totalArticulos / articulosPorPagina);

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} className="mx-auto d-flex justify-center algn-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button key={page} onClick={() => handlePageClick(page)} $darkMode={darkMode}>
              {page}
            </Button>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Pagination;
const Button = styled.button`
border:none;
background-color: ${props => props.theme.other.light};
margin: 0.3rem;
padding: 0.5rem;
border: 1px solid ${props => props.$darkMode ? props.theme.other.light : props.theme.other.dark};
`
