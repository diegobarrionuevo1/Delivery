import {
  ContainerTexto,
  Lista,
  Subtitulo,
  Titulo,
  Conjunto,
  Container,
  Card,
  TituloForm,
  Pago,
  InputContainer,
  CardPag
} from "./styled";
import { IMaskInput } from "react-imask";
import { FaMapMarkerAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsCreditCard2Back, BsBank } from "react-icons/bs";

import CafesSelecionados from "../cafesSelecionados";
export default function FormPago({handleChangePaymentType } ) {
  return (
    <Container>
      <ContainerTexto>
        <Conjunto>
          <Titulo>Complete su pedido</Titulo>
          <Card>
            <TituloForm>
              <FaMapMarkerAlt className="laranja" />
              Dirección de entrega
            </TituloForm>
            <Subtitulo>
              Introduzca la dirección donde quieres recibir tu pedido
            </Subtitulo>

            <IMaskInput mask="0000" placeholder="Codigo Postal" />

            <InputContainer>
              <input type="text" placeholder="Provincia" />
              <input type="text" placeholder="Localidad o barrio" />
            </InputContainer>
            
            <InputContainer>
              <input type="text" placeholder="Calle" />
              <input type="number" placeholder="Número" />
            </InputContainer>
          </Card>
          <CardPag>
            <TituloForm>
              <MdOutlineAttachMoney className="roxo" />
              Forma de pago
            </TituloForm>
            <Subtitulo>
              Elija una forma de pago
            </Subtitulo>
            <Lista>
              <Pago>
                <BsCreditCard2Back
                  className="roxo"
                  type="button"
                  onClick={() => handleChangePaymentType("Cartão de Crédito")}
                  // selected={paymentPreference === "creditCard"}
                  // onClick={() => handleSelectPaymentPreference("creditCard")}
                />
                Tarjeta de credito
              </Pago>
              <Pago>
                <BsBank
                  className="roxo"
                  // selected={paymentPreference === "debitCard"}
                  // onClick={() => handleSelectPaymentPreference("debitCard")}
                  type="button"
                  onClick={() => handleChangePaymentType("Cartão de Débito")}
                />
                Tarjeta de débito
              </Pago>
              <Pago>
                <FaRegMoneyBillAlt
                  className="roxo"
                  type="button"
                  onClick={() => handleChangePaymentType("Dinheiro")}
                  // selected={paymentPreference === "money"}
                  // onClick={() => handleSelectPaymentPreference("money")}
                />
                Efectivo
              </Pago>
            </Lista>
          </CardPag>
        </Conjunto>
        <CafesSelecionados />

      </ContainerTexto>
    </Container>
  );
}
