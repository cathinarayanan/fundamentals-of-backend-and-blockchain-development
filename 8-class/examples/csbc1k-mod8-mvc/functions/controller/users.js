const { v4: uuidv4 } = require("uuid");
const { create, retrieve, update, remove } = require("../model/user");

// add investor
const addUser = async (req, res) => {
    try {
        let user = req.body;
        user["id"] = uuidv4();

        await create(user);

        res.status(201).json({
            id: user.id,
            message: "successfully added user",
        });
    } catch (error) {
        res.status(400).json({
            error: error,
        });
    }
};

// get investor by id

const getUser = async (req, res) => {
    try {
        let userId = req.params.id;

        const user = await retrieve(userId);

        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({
            error: error,
        });
    }
};



module.exports = { addUser, getUser };
