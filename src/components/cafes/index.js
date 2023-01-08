import {
  Container,
  Card,
  TituloCard,
  Tag,
  Sobre,
  Valor,
  Comprar,
  Pag,
  Coffee,
} from "./styled";
import { FaShoppingCart } from "react-icons/fa";
import { BotonCantidad } from "../botonesCantidad";
import { useState } from "react";
export default function Cafes({ img, tag, cardTitulo, sobre, valor}) {
  const [coffeeAmount, setCoffeeAmount] = useState(0);
  const isCoffeeSelected = coffeeAmount > 0;
  const buttonAddToCartIsDisabled = !isCoffeeSelected;
  const addOne = () => {
    if (coffeeAmount < 9) {
      setCoffeeAmount((state) => state + 1);
    }
  };

  const removeOne = () => {
    if (coffeeAmount > 0) {
      setCoffeeAmount((state) => state - 1);
    }
  };
  return (
    <Container>
      <Card>
        <Coffee src={img} alt="pais" />
        <Tag>{tag && tag.map((tag) => <h6 key={tag}>{tag}</h6>)}</Tag>
        <TituloCard>{cardTitulo}</TituloCard>
        <Sobre>{sobre}</Sobre>
        <Pag>
          <Valor>${valor}</Valor>
          <BotonCantidad 
            amount={coffeeAmount}
            addOne={addOne}
            removeOne={removeOne}
          />
          <Comprar 
          disabled={buttonAddToCartIsDisabled}
          title={ buttonAddToCartIsDisabled? 'Seleccione una cantidad': 'Agregar al carrito'
          }>
          
            <FaShoppingCart />
          </Comprar>
        </Pag>
      </Card>
    </Container>
  );
}
