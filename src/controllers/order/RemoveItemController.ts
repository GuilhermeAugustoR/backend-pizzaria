import { Request, Response } from "express";
import { RemoveItemSerive } from "../../services/order/RemoveItemSerive";

class RemoveItemController {
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string;

    const removeItemService = new RemoveItemSerive();

    const order = await removeItemService.execute({
      item_id,
    });

    return res.json(order);
  }
}

export { RemoveItemController };
