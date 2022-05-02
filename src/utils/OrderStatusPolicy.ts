import { OrderStatus } from "modules/userOrders/application";

export const OrderStatusPolicy = (status: OrderStatus) => {
  const isCompleting = () => status === OrderStatus.COMPLETING;

  const isPending = () => status === OrderStatus.PENDING;

  const isAwarded = () => status === OrderStatus.AWARDED;

  const isPublished = () => status === OrderStatus.PUBLISHED;

  const isFinished = () => status === OrderStatus.FINISHED;

  const isActive = () =>
    status !== OrderStatus.COMPLETING && status !== OrderStatus.FINISHED;

  return {
    isCompleting,
    isPending,
    isAwarded,
    isPublished,
    isFinished,
    isActive,
  };
};
