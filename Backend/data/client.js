const { MongoClient } = require("mongodb");


async function mongoConnect(queryFunction, queryArgument, updateDocument = null) {

    // Establish connection
    const uri = "mongodb+srv://lukaszjmat:D7Miqtyb2jXB5E6L@cluster0.w34447n.mongodb.net/?retryWrites=true&w=majority";
    const mongoClient = new MongoClient(uri);

    var result = false; // Result variable

    try {
        const db = mongoClient.db('Constant_Elegance');
        const model = db.collection('Users');

        // Map the "queryFunction" to specific query below
        switch (queryFunction) {
            case "findOne":
                result = await model.findOne(queryArgument);
                break;

            case "insertOne":
                result = await model.insertOne(queryArgument);
                break;

            case "updateOne_set":
                result = await model.updateOne(queryArgument, { $set: updateDocument });
                break;

            case "updateOne_push":
                result = await model.updateOne(queryArgument, { $push: updateDocument });
                break;

            default:
                break;
        }

    } catch (error) {
        console.log(error)
        result = false

    } finally {
        // Ensures that the client will close when you finish/error
        await mongoClient.close();
        return result;
    }
}

module.exports = {
    mongoConnect,
}