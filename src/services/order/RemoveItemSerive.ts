import prismaClient from "../../prisma";

interface IRemoveItemService {
  item_id: string;
}

class RemoveItemSerive {
  async execute({ item_id }: IRemoveItemService) {
    const order = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });

    return order;
  }
}

export { RemoveItemSerive };
