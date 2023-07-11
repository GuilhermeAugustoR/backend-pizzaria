import prismaClient from "../../prisma";

interface IDetailOrderService {
  order_id: string;
}

class DetailOrderService {
  async execute({ order_id }: IDetailOrderService) {
    const order = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        order: true,
        product: true,
      },
    });

    return order;
  }
}

export { DetailOrderService };
