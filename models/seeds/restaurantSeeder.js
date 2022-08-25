const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant')
const User = require('../user')
const seederData = require('../../restaurant.json').results
const db = require('../../config/mongoose')

const SEEDER_USER = [{
  name: 'user1',
  email: 'user1@example.com',
  password: '12345678',
  restaurantId: [1, 2, 3]
},{
  name: 'user2',
  email: 'user2@example.com',
  password: '12345678',
  restaurantId: [4, 5, 6]
}]

db.once('open', () => {
  Promise.all(SEEDER_USER.map(seederUser => {
    bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(seederUser.password, salt))
      .then(hash => User.create({
        name: seederUser.name,
        email: seederUser.email,
        password: hash
      }))
      .then(user => {
        const userId = user._id
        const seedRestaurant = seederData.filter(data => seederUser.restaurantId.includes(data.id))
        return Promise.all(seedRestaurant.map(data => {
          data.userId = userId
          return Restaurant.create(data)
        }))
      })
      .then(() => {
        console.log('done')
        process.exit()
      })
  }))
})
