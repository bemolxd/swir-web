import { useParams } from "react-router-dom";

import { Card } from "components/Card";

import { Content } from "./Content";

export const UserOrderSummary = () => {
  const { orderId } = useParams<{ orderId: string }>();
  return (
    <Card maxW="1300px" w="100%">
      <Content orderId={orderId!} />
    </Card>
  );
};
