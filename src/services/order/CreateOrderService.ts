import prismaClient from "../../prisma";

interface ICreateOrder {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ table, name }: ICreateOrder) {
    const order = prismaClient.order.create({
      data: {
        table: table,
        name: name,
      },
    });

    return order;
  }
}

export { CreateOrderService };
