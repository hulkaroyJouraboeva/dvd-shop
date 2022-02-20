const express = require("express");
const dvdsRoute = express.Router();
const { getAllDvds, getOneDvd, deleteDvd, updateDvd, createDvd } = require("../queries/dvd");

dvdsRoute.get('/', async (request, response) => {
    const allDvds = await getAllDvds();

    // how does the database or the server putting our data into objects and arrays?
    // are we specifying that by using JSON in our middleware?
    // question about .env line 4
    allDvds.length !== 0
    ? response.status(200).json({
        success: true,
        payload: allDvds 
    })
    : response.status(404).json({ error: 'unable to retrieve all dvds data' });
});

dvdsRoute.get("/:id", async (request, response) => {
    const oneDvd = await getOneDvd(request.params.id);

    oneDvd.id
    ? response.status(200).json({ success: true, payload: oneDvd })
    : response.status(404).json({ error: `couldn't retrieve dvd with id: ${request.params.id}` });
    // try {
    //     response.status(200).json({ success: true, payload: oneDvd });
    // } catch {
    //     response.status(404).json({ error: `couldn't retrieve dvd with id: ${request.params.id}` });
    // };
});

module.exports = dvdsRoute;