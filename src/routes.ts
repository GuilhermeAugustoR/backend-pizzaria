import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { Authenticated } from "./middlewares/Authenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

const router = Router();

const upload = multer(uploadConfig.upload("tmp"));

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/detailUser", Authenticated, new DetailUserController().handle);

router.post("/category", Authenticated, new CreateCategoryController().handle);

router.get("/listCategory", Authenticated, new ListCategoryController().handle);

router.post(
  "/product",
  Authenticated,
  upload.single("banner"),
  new CreateProductController().handle
);

router.get(
  "/category/product",
  Authenticated,
  new ListByCategoryController().handle
);

router.post("/order", Authenticated, new CreateOrderController().handle);
router.delete(
  "/orderDelete",
  Authenticated,
  new DeleteOrderController().handle
);

router.post("/order/add", Authenticated, new AddItemController().handle);
router.delete(
  "/order/delete",
  Authenticated,
  new RemoveItemController().handle
);
router.put("/order/send", Authenticated, new SendOrderController().handle);
router.get("/orders", Authenticated, new ListOrderController().handle);
router.get("/order/detail", Authenticated, new DetailOrderController().handle);
router.put("/order/finish", Authenticated, new FinishOrderController().handle);

export { router };
