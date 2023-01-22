"use strict";

const { db, Players} = require("../server/db");
const { faker } = require("@faker-js/faker");
const fs = require("fs");
const { parse } = require("csv-parse");

const playerData = [];

fs.createReadStream("./playerData/allSkaterData.csv")
  .pipe(
    parse({
      delimiter: ",",
      columns: true,
      ltrim: true,
    })
  )
  .on("data", function (row) {
    // 👇 push the object row into the array
    playerData.push(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    // 👇 log the result array
    console.log("parsed csv data:");
  });


/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  Players.bulkCreate(playerData)

  console.log('Players successfully seeded')
}

// seed()


module.exports = seed;
