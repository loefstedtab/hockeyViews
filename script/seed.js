'use strict'

const {db} = require('../server/db');
const {User, Products} = require('../server/db')
const {faker} = require('@faker-js/faker')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
// This function creates an array of 100 random users, which we will then use to bulkCreate to seed our database
 function createUsers(){
  let users = [];
  for (let i = 0; i < 100; i++){
    users.push({
      isAdmin: faker.datatype.boolean(),
      password: faker.internet.password(8),
      address: faker.address.streetAddress(true),
      telephone: faker.phone.number(),
      first_Name: faker.name.firstName(),
      last_Name:faker.name.lastName(),
      email: faker.helpers.unique(faker.internet.email)
    })
  }
  return users
}

function createProducts(){
  let products = [];
  for (let i = 0; i < 100; i++){
    products.push({
      name: faker.commerce.productName(),
      quantity: faker.random.numeric(3),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price()
    })
  }
  return products
}

async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = createUsers();
  // Creating Products
  const products = createProducts()

  User.bulkCreate(users)
  Products.bulkCreate(products)

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

seed()


/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
// async function runSeed() {
//   console.log('seeding...')
//   try {
//     await seed()
//   } catch (err) {
//     console.error(err)
//     process.exitCode = 1
//   } finally {
//     console.log('closing db connection')
//     await db.close()
//     console.log('db connection closed')
//   }
// }

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
// if (module === require.main) {
//   runSeed()
// }

module.exports = seed
