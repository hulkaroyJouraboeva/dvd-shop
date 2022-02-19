const express = require("express");
const dvdsRoute = express.Router();
const { getAllDvds, getOneDvd, deleteDvd, updateDvd, createDvd } = require("../queries/dvd");

dvdsRoute.get('/', async (_, response) => {
    const allDvds = await getAllDvds();

    // how does the database or the server putting our data into objects and arrays?
    // are we specifying that by using JSON in our middleware?
    allDvds.length !== 0
    ? response.status(200).json({
        success: true,
        payload: allDvds 
    })
    : response.status(404).json({ error: 'unable to retrieve all dvds data' });
});

module.exports = dvdsRoute;