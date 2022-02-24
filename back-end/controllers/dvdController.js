const express = require("express");
const dvdsRoute = express.Router();
const reviewsRoute = require('./reviewController');
const { getAllDvds, getOneDvd, deleteDvd, updateDvd, postDvd } = require("../queries/dvd");

// localhost:3333:/dvds/:id/reviews

// how does the database or the server putting our data into objects and arrays?
// to or to not use "catch/catch", or when and where to use?
// are we specifying that by using JSON in our middleware?
// question about .env line 4
// try {
    //     response.status(200).json({ success: true, payload: oneDvd });
    // } catch {
        //     response.status(404).json({ error: `couldn't retrieve dvd with id: ${request.params.id}` });
        // };
dvdsRoute.use('/:id/reviews', reviewsRoute);

dvdsRoute.get('/', async (request, response) => {
    const allDvds = await getAllDvds();

    allDvds.length !== 0
    ? response.status(200).json({ success: true, payload: allDvds })
    : response.status(404).json({ error: 'unable to retrieve all dvds data' });
});

dvdsRoute.get('/:id', async (request, response) => {
    const oneDvd = await getOneDvd(request.params.id);

    oneDvd.id
    ? response.status(200).json({ success: true, payload: oneDvd })
    : response.status(404).json({ error: `couldn't retrieve dvd with id: ${request.params.id}` });
});

dvdsRoute.delete('/:id', async (request, response) => {
    const deletedDvd = await deleteDvd(request.params.id);

    deletedDvd.id
    ? response.status(200).json({ success: true, payload: deletedDvd })
    : response.status(404).json({ error: `couldn't delete dvd with id: ${request.params.id}` });
});

dvdsRoute.put('/:id', async (request, response) => {
    const updatedDvd = await updateDvd(request.body, request.params.id);

    updatedDvd.id
    ? response.status(200).json({ success: true, payload: updatedDvd })
    : response.status(404).json({ error: `couldn't update dvd with id: ${request.params.id}` });
})

dvdsRoute.post('/', async (request, response) => {
    const temp = { ...request.body };
    const postedDvd = await postDvd(temp);
    
    postedDvd.id
    ? response.status(200).json({ success: true, payload: postedDvd })
    : response.status(404).json({ error: `couldn't dvd sorry` });
});

module.exports = dvdsRoute;