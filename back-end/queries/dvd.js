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
            SELECT * FROM dvd_tb WHERE id=$1;
        `, id);
        return oneDvd;
    } catch (error) {
        return error;
    };
};

const deleteDvd = async (id) => {
    try {
        const deletedDvd = await database.one(`
            DELETE FROM dvd_tb
            WHERE id=$1
            RETURNING * ;
        `, id);
        return deletedDvd;
    } catch (error) {
        return error;
    };
};

const updateDvd = async ({ title, image, release_date, runtime, director, is_favorite }, id) => {
    try {
        const updatedDvd = await database.one(`
            UPDATE dvd_tb
            SET 
                title=$1,
                image=$2,
                release_date=$3,
                runtime=$4,
                director=$5,
                is_favorite=$6
            WHERE id=$7 RETURNING * ;
        `, [title, image, release_date, runtime, director, is_favorite, id]);
        return updatedDvd;
    } catch(error) {
        return error;
    };
};

const createDvd = async ({ title, image, release_date, runtime, director, is_favorite }) => {
    try {
        const createdDvd = await database.one(`
            INSERT INTO dvd_tb
                (title, image, release_date, runtime, director, is_favorite)
            VALUES
                ($1, $2, $3, $4, $5, $6) 
            RETURNING *
        `, [title, image, release_date, runtime, director, is_favorite]);
        return createdDvd;
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