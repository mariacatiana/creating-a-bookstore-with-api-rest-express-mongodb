import book from  "../models/book.js";
import { author } from "../models/author.js";

class bookController {

    static async booksList (req, res) {
        try{
        const booksList = await book.find({});
        res.status(200) .json(booksList);
    } catch (error) {
        res.status(500) .json({message: `${error.message} - Failed`});
    }
};

static async booksListById (req, res) {
    try{
    const id = req.params.id;
    const bookFound = await book.findById(id);
    res.status(200) .json(bookFound);
} catch (error) {
    res.status(500) .json({message: `${error.message} - Failed`});
}
};

static async registerBooks (req, res) {
    const bookNew = req.body;
    try {
        const authorFound = await author.findById (bookNew.author);
        const completeBook = { ... bookNew, author: {... authorFound._doc}}
        const bookCreated = await book.create(completeBook);
        res.status(201).json({message: "Book registered successfully!", book: bookNew});
    } catch (error) {
        res.status(500) .json({message: `${error.message} - Failed to register book`});
    }
};

static async bookUpdate (req, res) {
    try{
    const id = req.params.id;
    await book.findByIdAndUpdate(id, req.body);
    res.status(200) .json({message: "Updated Book"});
} catch (error) {
    res.status(500) .json({message: `${error.message} - Failed`});
}
};

static async bookDelete (req, res) {
    try{
    const id = req.params.id;
    await book.findByIdAndDelete(id);
    res.status(200) .json({message: "Successfully deleted book!"});
} catch (error) {
    res.status(500) .json({message: `${error.message} - Failed`});
}
};

static async listBooksByPublisher (req, res) {
    const publisher = req.query.publisher;
    try {
        const booksByPublisher = await book.find({ publisher: publisher });
        res.status(200).json(booksByPublisher);
    } catch (error) {
        res.status(500).json({message: `${error.message} - search failure`});
    }
}

};

export default bookController;