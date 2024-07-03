import express from "express";
import bookController from "../controllers/bookcontroller.js";

const routes = express.Router();

routes.get ("/books", bookController.booksList);
routes.get ("/books/search", bookController.listBooksByPublisher);
routes.get ("/books/:id", bookController.booksListById);
routes.post ("/books", bookController.registerBooks);
routes.put ("/books/:id", bookController.bookUpdate);
routes.delete ("/books/:id", bookController.bookDelete);

export default routes;