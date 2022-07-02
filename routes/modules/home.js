const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  return Restaurant.find()
    .lean()
    .then(Restaurant => {
      const restaurants = Restaurant.filter(data => {
        return data.name.toLowerCase().includes(keyword.toLowerCase()) ||
          data.category.toLowerCase().includes(keyword.toLowerCase())
      })
      res.render('index', { restaurants, keyword })
    })
    .catch(error => console.log(error))
})

module.exports = router