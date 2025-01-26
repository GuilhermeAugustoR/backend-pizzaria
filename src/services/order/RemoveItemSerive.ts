import prismaClient from "../../prisma";

interface IRemoveItemService {
  item_id: string;
}

class RemoveItemSerive {
  async execute({ item_id }: IRemoveItemService) {
    if (!item_id) {
      throw new Error("Item ID não fornecido.");
    }

    // Certifique-se de que o campo 'id' é o identificador único da tabela `item`.
    const order = await prismaClient.item.delete({
      where: {
        id: item_id, // Corrigir: use o campo exato que identifica o item na tabela.
      },
    });

    return order;
  }
}

export { RemoveItemSerive };
