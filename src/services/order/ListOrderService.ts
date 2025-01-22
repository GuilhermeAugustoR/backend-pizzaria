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
      include: {
        items: {
          include: {
            product: true, // Inclui os dados do produto relacionado
          },
        },
      },
      // select: {
      //   id: true,
      //   table: true,
      //   name: true,
      //   draft: true,
      //   status: true,
      //   items: true,
      //   created_at: true,
      // },
    });

    return order;
  }
}

export { ListOrderService };
