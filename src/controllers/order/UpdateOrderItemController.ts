import { Request, Response } from "express";
import { UpdateOrderItemService } from "../../services/order/UpdateOrderItemService";

class UpdateOrderItemController {
  async handle(req: Request, res: Response) {
    const { product_id, newAmount } = req.body;

    const updateOrderItemService = new UpdateOrderItemService();

    try {
      const updatedItem = await updateOrderItemService.execute({
        product_id,
        newAmount: Number(newAmount),
      });

      return res.json(updatedItem);
    } catch (error) {
      console.error("Error updating order item:", error.message);
      return res.status(400).json({ error: error.message });
    }
  }
}

export { UpdateOrderItemController };
