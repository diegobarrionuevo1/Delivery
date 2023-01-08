import {
  Container,
  ContainerTexto,
  Lista,
  Subtitulo,
  Titulo,
  Conjunto,
} from "./styled";
import men from "./../../assets/men.svg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiTimerFill } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Info } from "../about/styled";

export default function PedidoSucesso() {
  return (
    <Container>
      <ContainerTexto>
        <Conjunto>
          <Titulo>Uhu! Pedido confirmado</Titulo>
          <Subtitulo>
            Ahora solo espera que el café te llegue pronto.
          </Subtitulo>
          <Lista>
            <Info>
              <FaMapMarkerAlt className="circulo1" />
              Direccion:
            </Info>
            <Info>
              <RiTimerFill className="circulo2" /> Tiempo estimado de entrega:
              <span>20 min - 30 min</span>
            </Info>
            <Info>
              <MdOutlineAttachMoney className="circulo3" />
              Forma de pago:
            </Info>
          </Lista>
        </Conjunto>
        <img src={men} alt="" />
      </ContainerTexto>
    </Container>
  );
}
