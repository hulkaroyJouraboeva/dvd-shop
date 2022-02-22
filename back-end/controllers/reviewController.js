const express = require("express");
const reviewsRoute = express.Router({ mergeParams: true });
const { getAllReviews, getOneReview, deleteReview, updateReview, createReview } = require('../queries/review');

// localhost:8080/anime/:id/reviews/
reviewsRoute.get('/', async (request, response) => {
    console.log('inside a get request function')
    const reviews = await getAllReviews(request.params.id);
    if (reviews.length) {
        response.status(200).json(reviews);
    } else {
        response.status(404).json({error: 'reviews could not be found'});
    };
});

reviewsRoute.get('/:id', async (request, response) => {
    const review = await getOneReview(request.params.id);
    if (review.id) {
        response.status(200).json(review);
    } else {
        response.status(404).json({error: 'review not found'});
    };
});

reviewsRoute.post('/new', async (request, response) => {
    const reviews = await createReview(request.body);
    if (reviews[0]) {
        response.status(200).json(reviews);
    } else {
        response.status(404).json({error: 'failed to create new review'});
    };
});

reviewsRoute.put('/:id/edit', async (request, response) => {
    const review = await updateReview(request.params.id, request.body);
    if (review) {
        response.status(200).json(review);
    } else {
        response.status(404).json({error: 'review could not be updated'});
    };
});

reviewsRoute.delete('/:id', async (request, response) => {
    const review = await deleteReview(request.params.id);
    if (review) {
        response.status(200).json(review);
    } else {
        response.status(404).json({error: `review with id of ${id} could not be deleted`});
    };
});

module.exports = reviewsRoute;