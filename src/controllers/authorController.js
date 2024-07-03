import {author} from  "../models/author.js";

class authorController {

    static async authorsList (req, res) {
        try{
        const authorsList = await author.find({});
        res.status(200) .json(authorsList);
    } catch (error) {
        res.status(500) .json({message: `${error.message} - Failed`});
    }
};

static async authorsListById (req, res) {
    try{
    const id = req.params.id;
    const authorFound = await author.findById(id);
    res.status(200) .json(authorFound);
} catch (error) {
    res.status(500) .json({message: `${error.message} - Failed`});
}
};

static async registerAuthors (req, res) {
    try {
        const authorNew = await author.create(req.body);
        res.status(201).json({message: "Author registered successfully!", author: authorNew});
    } catch (error) {
        res.status(500) .json({message: `${error.message} - Failed to register author`});
    }
};

static async authorUpdate (req, res) {
    try{
    const id = req.params.id;
    await author.findByIdAndUpdate(id, req.body);
    res.status(200) .json({message: "Updated Author"});
} catch (error) {
    res.status(500) .json({message: `${error.message} - Failed`});
}
};

static async authorDelete (req, res) {
    try{
    const id = req.params.id;
    await author.findByIdAndDelete(id);
    res.status(200) .json({message: "Successfully deleted author!"});
} catch (error) {
    res.status(500) .json({message: `${error.message} - Failed`});
}
};

};

export default authorController;