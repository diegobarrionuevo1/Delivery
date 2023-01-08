import { InputContainer } from "./styled";
import { Minus, Plus } from "phosphor-react";

export function BotonCantidad({ amount, addOne, removeOne }) {
  const handleAddOne = () => {
    addOne();
  };

  const handleRemoveOne = () => {
    removeOne();
  };
  return (
    <InputContainer>
      <button onClick={handleRemoveOne} title="Remover 1">
        <Minus />
      </button>
      <span>{amount}</span>
      <button onClick={handleAddOne} title="Adicionar 1">
        <Plus />
      </button>
    </InputContainer>
  );
}
