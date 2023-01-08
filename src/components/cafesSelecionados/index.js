import {
  Compra,
  Container,
  Entrega,
  Titulo,
  Card,
  PriceInfo,
  PriceTag,
} from "./styled";

import { Link } from "react-router-dom";

import data from "../../data/data";
import CafesPag from "../cafesPag";
export default function CafesSelecionados({ valor }) {

  return (
    <Container>
      <Titulo>Cafes Selecionados</Titulo>
      <Card>
        {data?.map((item) => (
          <CafesPag item={item} key={item.id} />
        ))}
        <PriceInfo>
          <PriceTag>
            <h5>Subtotal:</h5>
          </PriceTag>
          <PriceTag>
            <h5>Costo de envío:</h5>
            <span>$ 120,00</span>
          </PriceTag>
          <PriceTag>
            <h4>Total:</h4>
          </PriceTag>
        </PriceInfo>
        <Compra>
          <Link to="/pedidoConfirmado">
            <Entrega>CONFIRMAR PEDIDO</Entrega>
          </Link>
        </Compra>
      </Card>
    </Container>
  );
}
