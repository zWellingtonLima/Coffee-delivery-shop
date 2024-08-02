import { Minus, Plus } from "phosphor-react";
import { Container } from "./styles";

interface QuantityInputProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

export function QuantityInput({
  decrementQuantity,
  incrementQuantity,
  quantity,
}: QuantityInputProps) {
  return (
    <Container>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </Container>
  );
}
