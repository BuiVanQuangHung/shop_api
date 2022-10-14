const Card = require("../models/Card");

const createCard = async (req, res, next) => {
  const newCard = new Card(req.body);
  try {
    const saveCard = await newCard.save();
    res.status(200).json(saveCard);
  } catch (error) {
    next(error);
  }
};
const updateCard = async (req, res, next) => {
  try {
    const updateCard = await Card.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCard);
  } catch (error) {
    next(error);
  }
};

const deleteCard = async (req, res, next) => {
  try {
    await Card.findByIdAndDelete(req.params.id);
    res.status(200).json("Card has been deteted");
  } catch (error) {
    next(error);
  }
};

const getUserCard = async (req, res) => {
  try {
    const card = await Card.findOne({ userId: req.params.userId });
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = {
  createCard,
  updateCard,
  deleteCard,
  getAllCards,
  getUserCard,
};
