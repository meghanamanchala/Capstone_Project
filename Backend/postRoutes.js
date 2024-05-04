const express = require("express");
const PostModel = require('./postSchema.js')
const postRoute = express.Router();

postRoute.post('/queries', async (req, res) => {
    try {
      const { query } = req.body;
      const newQuery = await PostModel.create({ queries: query });
      res.status(201).json(newQuery);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = postRoute;  