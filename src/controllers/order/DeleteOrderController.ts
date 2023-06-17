import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/order/DeleteOrderService";

class DeleteOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.params.order_id as string;

    const deleteOrderService = new DeleteOrderService();

    const order = await deleteOrderService.execute({
      order_id,
    });

    res.json(order);
  }
}

export { DeleteOrderController };
