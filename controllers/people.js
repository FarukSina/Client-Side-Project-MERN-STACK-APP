const Person = require('../models/person');

exports.index = async (req, res, next) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    next(error);
  }
}

exports.show = async (req, res, next) => {
  try {
    const person = await Person.findById(req.params.id);
    res.status(200).json(person);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const { name, age, gender, date } = req.body;
    const newPerson = await Person.create({
      name,
      age,
      gender,
      date: new Date(date)
    });
    res.status(200).json({message: 'Person was created successfully', status: 'success', person: newPerson});
  } catch (error) {
    next(error);
  }
}

exports.update = async (req, res, next) => {
  try {
    const { id, name, age, gender, date } = req.body;
    const person = await Person.findByIdAndUpdate( id , {
      name,
      age,
      gender,
      date: new Date(date)
    });
    res.status(200).json({message: 'Person was updated successfully', status: 'success', person: person});
  } catch (error) {
    next(error);
  }
}

exports.destroy = async (req, res, next) => {
  try {
    await Person.findByIdAndDelete( req.params.id);
    res.status(200).json({message: 'Person was deleted successfully', status: 'success'});
  } catch (error) {
    next(error);
  }
}
