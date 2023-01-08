import { Container, Logo, Local, Carrito, Conjunto, Entrega } from "./styled";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import logo from "./../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="pais" />
      </Link>

      <Conjunto>
        <Local>
          <FaMapMarkerAlt />
          <Entrega>Entrega en todo el pais</Entrega>
        </Local>
        <Link to="/entregaPedido">
          <Carrito>
              <FaShoppingCart />
          </Carrito>
        </Link>
      </Conjunto>
    </Container>
  );
}
