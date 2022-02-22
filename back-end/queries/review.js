const database = require('../db/dbConfig');

const getAllReviews = async (id) => {
    console.log('inside query function')
    try {
        const allReviews = await database.any(`
            SELECT * FROM reviews_tb WHERE dvd_id=$1
        `, id);
        return allReviews;
    } catch (error) {
        return error;
    };
};

const getOneReview = async (id) => {
    try {
        const oneReview = await database.one(`
            SELECT * FROM reviews_tb WHERE id=$1
        `, id);
        return oneReview;
    } catch (error) {
        return error;
    };
};

const deleteReview = async (id) => {
    try {
        const deletedReview = await database.one(`
            DELETE FROM reviews_tb WHERE id=$1 RETURNING *
        `, id);
        return deletedReview;
    } catch (error) {
        return error;
    };
};

const updateReview = async (id, { dvd_id, reviewer, content, rating }) => {
    try {
        const updatedReview = await database.one(`
            UPDATE reviews_tb
            SET 
                dvd_id=$1,
                reviewer=$2,
                content=$3,
                rating=$4
            WHERE id=$5
            RETURNING *
        `, [dvd_id, reviewer, content, rating, id]);
        return updatedReview;
    } catch (error) {
        return error;
    };
};

const createReview = async ({ dvd_id, reviewer, content, rating }) => {
    try {
        const createdReview = await database.one(`
        INSERT INTO reviews_tb 
            (dvd_id, reviewer, content, rating) 
        VALUES 
            ($1, $2, $3, $4) 
        RETURNING *
        `, [dvd_id, reviewer, content, rating]);
        return createdReview;
    } catch (error) {
        return error;
    };
};

module.exports = {
    getAllReviews,
    getOneReview,
    deleteReview,
    updateReview,
    createReview
};