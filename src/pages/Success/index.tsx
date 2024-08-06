import { MapPin, Timer } from "phosphor-react";

import { Container, Heading, Info, InfoContent, Order } from "./styles";
import { useCart } from "../../hooks/useCart";
import { useParams } from "react-router-dom";

export function Success() {
  const { orders } = useCart();
  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));

  return (
    <Container>
      <Order>
        <Heading>
          <h2>Uhuuu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </Heading>

        <Info>
          <div>
            <InfoContent>
              <MapPin size={32} />
            </InfoContent>

            <div>
              <span>
                Entrega em{" "}
                <strong>
                  {orderInfo?.street}, {orderInfo?.number}
                </strong>
              </span>

              <span>
                {orderInfo?.neighborhood} - {orderInfo?.city},{" "}
                {orderInfo?.state}
              </span>
            </div>
          </div>

          <div>
            <Timer size={32}/>
          </div>
        </Info>
      </Order>
    </Container>
  );
}
