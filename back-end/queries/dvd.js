const database = require('../db/dbConfig');

const getAllDvds = async () => {
    try {
        const allDvds = await database.any(`
            SELECT * FROM dvds_tb;
        `);
        return allDvds;
    } catch(error) {
        return error;
    };
};

module.exports = {
    getAllDvds,
    getOneDvd,
    deleteDvd,
    updateDvd,
    createDvd
};