const database = require('../db/dbConfig');

const getAllDvds = async () => {
    try {
        const allDvds = await database.any(`
            SELECT * FROM dvd_tb;
        `);
        return allDvds;
    } catch(error) {
        return error;
    };
};

const getOneDvd = async (id) => {
    try {
        const oneDvd = await database.one(`
            SELECT * FROM dvd_tb WHERE id=$1
        `, id);
        return oneDvd;
    } catch (error) {
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