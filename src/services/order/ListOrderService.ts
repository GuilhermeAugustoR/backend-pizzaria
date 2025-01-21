import prismaClient from "../../prisma";

class ListOrderService {
  async execute() {
    const order = await prismaClient.order.findMany({
      where: {
        draft: true,
        status: false,
      },
      orderBy: {
        created_at: "desc",
      },
      select: {
        id: true,
        table: true,
        name: true,
        draft: true,
        status: true,
        items: true,
        created_at: true,
      },
    });

    return order;
  }
}

export { ListOrderService };
