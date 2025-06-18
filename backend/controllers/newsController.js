const News = require('../models/newsModel');

const getAllNews = async (req, res) => {
  const news = await News.find({});
  res.json(news);
};

const getNewsById = async (req, res) => {
  const news = await News.findById(req.params.id);
  if (news) res.json(news);
  else res.status(404).json({ message: 'News not found' });
};

const getNewsByType = async (req, res) => {
  const type = req.params.type;
  const news = await News.find({ newsType: type });
  res.json(news);
};
const getNewsByTypeId = async (req, res)=>{
  const news = await News.findById(req.params.id);
  if (news) res.json(news);
  else res.status(404).json({ message: 'News not found' });
}

module.exports = { getAllNews, getNewsById, getNewsByType, getNewsByTypeId };
