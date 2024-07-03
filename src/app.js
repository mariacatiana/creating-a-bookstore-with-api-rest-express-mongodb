import express, { json } from "express";
import connectToDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connect = await connectToDataBase();

connect.on("error", (error) => {
    console.error("connection error", error);
});

connect.once("open", () => {
    console.log ("Successfully connected!")
});

const app = express();
routes(app);

app.delete("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send("Book removed successfully");
})

export default app;