import { Container } from "react-bootstrap";
import HeaderTop from './header-top/HeaderTop';
import Navbar from './navbar/Navbar';

const Header = () => {
  return (
    <Container fluid className="bg-danger p-4">
      <HeaderTop />
      <Navbar />
    </Container>
  );
};

export default Header;
