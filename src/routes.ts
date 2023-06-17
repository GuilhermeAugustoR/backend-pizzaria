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

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/detailUser", Authenticated, new DetailUserController().handle);

router.post("/category", Authenticated, new CreateCategoryController().handle);

router.get("/listCategory", Authenticated, new ListCategoryController().handle);

router.post("/product", Authenticated, upload.single("file"), new CreateProductController().handle);

router.get("/category/product", Authenticated, new ListByCategoryController().handle);

router.post("/order", Authenticated, new CreateOrderController().handle);
router.delete("/orderDelete", Authenticated, new DeleteOrderController().handle);

export { router };
