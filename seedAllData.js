// filename "seedAllData" signifies that the logic here is designed specifically for starting with a fresh/blank db and populating a new environment with ALL needed data.  for this project, it may be useful to also have a "seedNewData" script that can be run periodically to add only the most recent episode and guest, etc.  but in practice, it's possible that the logic will end up being nearly identical and we'll determine the distinction to be redundant.

const db = require('./models');
const { data } = require('./data');

const checkSeasonOfEpisode = (episodeNumber) => {
  if (episodeNumber < 9) {
    return 1;
  }
  if (episodeNumber < 48) {
    return 2;
  }
  if (episodeNumber < 72) {
    return 3;
  }
  if (episodeNumber < 94) {
    return 4;
  }
  if (episodeNumber < 110) {
    return 5;
  }
  if (episodeNumber < 123) {
    return 6;
  }
  if (episodeNumber < 135) {
    return 7;
  }
  if (episodeNumber < 147) {
    return 8;
  }
  if (episodeNumber < 159) {
    return 9;
  }
  if (episodeNumber < 171) {
    return 10;
  }
  if (episodeNumber < 180) {
    return 11;
  }
  if (episodeNumber < 190) {
    return 12;
  }
  if (episodeNumber < 200) {
    return 13;
  }
  if (episodeNumber < 212) {
    return 14;
  }
  if (episodeNumber < 224) {
    return 15;
  }
  if (episodeNumber < 237) {
    return 16;
  }
  if (episodeNumber < 249) {
    return 17;
  }
  if (episodeNumber < 261) {
    return 18;
  }
  if (episodeNumber < 273) {
    return 19;
  }
  if (episodeNumber < 285) {
    return 20;
  }
};

const populateDb = async () => {
  data.seasons.map(async (season) => {
    await db.Season.create(season);
  });
  data.episodes.map(async (episode, index) => {
    const newEpisode = await db.Episode.create(episode);
    let seasonNumber = checkSeasonOfEpisode(index + 1);
    let [season] = await db.Season.find({ seasonNumber });
    season.episodeIds.push(newEpisode._id);
    season.episodeTitles.push(newEpisode.title);
    // following line is particularly important because each episode is seeded with a dummy ObjectId on creation to avoid errors (it may eventually be preferable to instead change the schema so this field is not required at creation and then omit the dummy value).  if the season property is not correctly set during this function, episodes will have a value for season that does not actually point to anything in the seasons collection.
    newEpisode.seasonId = season._id;
    newEpisode.seasonNumber = seasonNumber;
    await newEpisode.save();
    await season.save();
  });
  data.guests.map(async (guest) => {
    const newGuest = await db.Guest.create(guest);
    const episodeDates = newGuest.episodeDates;
    episodeDates.forEach(async (episodeDate) => {
      let [foundEpisode] = await db.Episode.find({ airDate: episodeDate });
      newGuest.episodes.push(foundEpisode._id);
      foundEpisode.guests.push(newGuest._id);
      await foundEpisode.save();
    });
    // something funky happening with the save here -- log shows that the episode IDs are getting added to guest's episodes array for a couple guests, but not all.  maybe map functions are happening simultaneously and need to be sequenced?  weirdly it seems like the guests' IDs are making it into the episode documents just fine though.  (can't save newGuest up in the forEach because then we get mongoose parallel save errors)
    await newGuest.save();
    console.log(newGuest);
  });
  data.sauces.map(async (sauce) => {
    await db.Sauce.create(sauce);
  });
};

populateDb();
