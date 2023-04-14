import db from '../db/mongo.mjs';

const collection = db.collection('students');

const getUser = async (nickname) => {
    let result = collection.findOne({nickname: nickname});
    return result;
}

const getAllUsers = async () => {
    let cursor = collection.find({});
    const results = await cursor.toArray();
    return results;
}

const saveUser = async (data) => {
    let savedResult = await collection.insertOne(data);
    return savedResult;
}

export {
    getUser,
    saveUser,
    getAllUsers
}