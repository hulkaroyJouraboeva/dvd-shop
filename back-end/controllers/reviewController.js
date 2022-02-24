const express = require("express");
const reviewsRoute = express.Router({ mergeParams: true });
const { getAllReviews, getOneReview, deleteReview, updateReview, createReview } = require('../queries/review');

// localhost:8080/anime/:id/reviews/
reviewsRoute.get('/', async (request, response) => {
    const allReviews = await getAllReviews(request.params.id);

    allReviews.length !== 0
    ? response.status(200).json(allReviews)
    : response.status(404).json({ error: 'reviews could not be found' });
});

reviewsRoute.get('/:id', async (request, response) => {
    const oneReview = await getOneReview(request.params.id);

    oneReview.id
    ? response.status(200).json(oneReview)
    : response.status(404).json({ error: 'review not found' });
});

reviewsRoute.delete('/:id', async (request, response) => {
    const deletedReview = await deleteReview(request.params.id);

    deletedReview.id
    ? response.status(200).json(deletedReview)
    : response.status(404).json({ error: `review with id of ${id} could not be deleted` });
});

reviewsRoute.put('/:id/edit', async (request, response) => {
    const updatedReview = await updateReview(request.params.id, request.body);
    
    updatedReview.id
    ? response.status(200).json(updatedReview)
    : response.status(404).json({ error: 'review could not be updated' });
});

reviewsRoute.post('/new', async (request, response) => {
    const createdReview = await createReview(request.body);

    createdReview.id
    ? response.status(200).json(createdReview)
    : response.status(404).json({ error: 'failed to create new review' });
});

module.exports = reviewsRoute;