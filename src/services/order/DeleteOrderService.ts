import prismaClient from "../../prisma";

interface IDeleteOrder {
  order_id: string;
}

class DeleteOrderService {
  async execute({ order_id }: IDeleteOrder) {
    const order = prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });

    return order;
  }
}

export { DeleteOrderService };
