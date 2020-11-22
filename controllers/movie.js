const Movie = require('../models/movie');

exports.index = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
}

exports.show = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const { MovieName, year, genre, description } = req.body;
    const newMovie = await Movie.create({
        MovieName,
        year,
        genre,
        description
    });
    res.status(200).json({message: 'Movie was created successfully', status: 'success', person: newMovie});
  } catch (error) {
    next(error);
  }
}

exports.update = async (req, res, next) => {
  try {
    const id= req.params.id;
    const { MovieName, year, genre, description} = req.body;
    const movie = await Movie.findByIdAndUpdate( id , {
        MovieName,
        year,
        genre,
        description
    });
    res.status(200).json({message: 'Movie was updated successfully', status: 'success', person: movie});
  } catch (error) {
    next(error);
  }
}

exports.destroy = async (req, res, next) => {
  try {
    await Movie.findByIdAndDelete( req.params.id);
    res.status(200).json({message: 'Movie was deleted successfully', status: 'success'});
  } catch (error) {
    next(error);
  }
}
