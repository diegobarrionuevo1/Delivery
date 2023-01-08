import {
  ContainerTexto,
  Fondo,
  Lista,
  Info,
  Subtitulo,
  Titulo,
  Conjunto,
  Coffee,
  Container,
  Titulo2,
} from "./styled";
import coffee from "./../../assets/coffee.png";
import fondo from "./../../assets/fondo.png";
import { FaShoppingCart } from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";
import { GiCardboardBoxClosed, GiCoffeeCup } from "react-icons/gi";
export default function About() {
  return (
    <Container>
      <Fondo src={fondo} alt="" />
      <ContainerTexto>
        <Conjunto>
          <Titulo>Encuentre el café perfecto para cualquier momento del día</Titulo>
          <Subtitulo>
          Con Coffee Delivery obtienes tu café donde quiera que estés, en cualquier momento
          </Subtitulo>
          <Lista>
            <Info>
              <FaShoppingCart className="circulo1" />
              Compra simple y segura
            </Info>
            <Info>
              <GiCardboardBoxClosed className="circulo3" />
              El empaque mantiene el café intacto
            </Info>
            <Info>
              <RiTimerFill className="circulo2" />
              Entrega rápida y con seguimiento
            </Info>
            <Info>
              <GiCoffeeCup className="circulo4" />
              Café recien hecho para usted
            </Info>
          </Lista>
        </Conjunto>
        <Coffee src={coffee} alt="" />
      </ContainerTexto>
      <Titulo2>Nuestros cafés</Titulo2>
    </Container>
  );
}
