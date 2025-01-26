import prismaClient from "../../prisma";

interface UpdateOrderItemRequest {
  product_id: string;
  newAmount: number;
}

class UpdateOrderItemService {
  async execute({ product_id, newAmount }: UpdateOrderItemRequest) {
    // Verifica se o item existe
    const itemExists = await prismaClient.item.findUnique({
      where: {
        id: product_id,
      },
    });

    if (!itemExists) {
      throw new Error("Item não encontrado.");
    }

    // Atualiza a quantidade
    const updatedItem = await prismaClient.item.update({
      where: {
        id: product_id,
      },
      data: {
        amount: newAmount,
      },
    });

    return updatedItem;
  }
}

export { UpdateOrderItemService };
