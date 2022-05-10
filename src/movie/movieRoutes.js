const { Router } = require("express");

const { addMovie, listMovies, deleteMovie, updateMovie } = require("./movieController");

const movieRouter = Router();

// use HTTP verb post to add data to our movie endpoint
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.delete("/movie", deleteMovie);
movieRouter.put("/movie", updateMovie);

module.exports = movieRouter;