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

const updateDvd = async ({ name, image, release_date, runtime, director, is_favorite, description, price, rating, featured }, id) => {
    try {
        const updatedDvd = await database.one(`
            UPDATE dvd_tb
            SET 
                name=$1,
                image=$2,
                release_date=$3,
                runtime=$4,
                director=$5,
                is_favorite=$6
                description=$7
                price=$8
                rating=$9
                featured=$10
            WHERE id=$11 RETURNING * ;
        `, [name, image, release_date, runtime, director, is_favorite, description, price, rating, featured, id]);
        return updatedDvd;
    } catch(error) {
        return error;
    };
};

const postDvd = async ({ name, image, release_date, runtime, director, is_favorite, description, price, rating, featured }) => {
    try {
        const postedDvd = await database.one(`
            INSERT INTO dvd_tb
                (name, image, release_date, runtime, director, is_favorite, description, price, rating, featured)
            VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
            RETURNING *
        `, [name, image, release_date, runtime, director, is_favorite, description, price, rating, featured]);
        return postedDvd;
    } catch(error) {
        return error;
    };
};

module.exports = {
    getAllDvds,
    getOneDvd,
    deleteDvd,
    updateDvd,
    postDvd
};