import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import cors from "cors";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    //se for uma instacia do tipo error
    return res.status(400).json({
      error: error.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
});

app.listen(3333, () => console.log("Server online!!"));
