import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (req, file, callback) => {
          const fileHash = crypto.randomBytes(8).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;
          callback(null, fileName);
        },
      }),
      limits: {
        fileSize: 2 * 1024 * 1024, // Limite de 2MB
      },
      fileFilter: (req, file, callback) => {
        const allowedMimes = ["image/jpeg", "image/pjpeg", "image/png"];

        if (allowedMimes.includes(file.mimetype)) {
          callback(null, true);
        } else {
          callback(new Error("Tipo de arquivo inválido."));
        }
      },
    };
  },
};
