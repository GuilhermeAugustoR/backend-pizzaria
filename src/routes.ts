import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { Authenticated } from "./middlewares/Authenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/detailUser", Authenticated, new DetailUserController().handle);

router.post("/category", Authenticated, new CreateCategoryController().handle);

router.get("/listCategory", Authenticated, new ListCategoryController().handle);

export { router };
