import express from "express";
import authorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get ("/authors", authorController.authorsList);
routes.get ("/authors/:id", authorController.authorsListById);
routes.post ("/authors", authorController.registerAuthors);
routes.put ("/authors/:id", authorController.authorUpdate);
routes.delete ("/authors/:id", authorController.authorDelete);

export default routes;