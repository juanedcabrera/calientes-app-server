const db = require('./models');
const { data } = require('./data');

console.log(data.seasons);

const populateDb = async () => {
  episodes.map(async (episode) => {
    await db.Episode.create(episode);
  });
  guests.map(async (guest) => {
    await db.Guest.create(guest);
  });
  seasons.map(async (season) => {
    await db.Season.create(season);
  });
  sauces.map(async (sauce) => {
    await db.Sauce.create(sauce);
  });
};

//   populateDb();
