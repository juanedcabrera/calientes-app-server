// 12
// Episode API
// constants
const express = require('express');
const router = express.Router();
const db = require('../models');

// episode routes
// GET /episodes - return all episodes
router.get('/episodes', (req, res) => {
  db.Episode.find()
    .sort({ overallEpisodeNumber: 'asc' })
    .then((episodes) => {
      res.json({ episodes });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          'Database Error: This error usually is a result of an error in the code or program rather than with the web server itself.',
      });
    });
});

// GET /api/v1/episodes/:id - return a specific episode
router.get('/episodes/:id', (req, res) => {
  db.Episode.findById(req.params.id)
    .then((episode) => {
      if (episode) {
        res.json(episode);
      } else {
        res.status(404).send({
          message:
            'Episode not located. This error is usually a problem with the URL link.',
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          'Database Error: This error usually is a result of an error in the code or program rather than with the web server itself.',
      });
    });
});

// POST /api/v1/episodes - create a new episode
router.post('/episodes', (req, res) => {
  db.Episode.create(req.body)
    .then((newEpisode) => {
      res.status(201).json(newEpisode);
    })
    .catch((err) => {
      console.log('Error while creating', err);
      if (err.name === 'ValidationError') {
        res.status(406).send({ message: 'Validation Error' });
      } else {
        res.status(500).send({
          message:
            'Database Error: This error usually is a result of an error in the code or program rather than with the web server itself.',
        });
      }
    });
});

// guest routes
// GET /guests - return all guests
router.get('/guests', (req, res) => {
  db.Guest.find()
    .then((guests) => {
      res.json({ guests });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          'Database Error: This error usually is a result of an error in the code or program rather than with the web server itself.',
      });
    });
});

// GET /api/v1/guests/:id - return a specific guest
router.get('/guests/:id', (req, res) => {
  db.Guest.findById(req.params.id)
    .then((guest) => {
      if (guest) {
        res.json(guest);
      } else {
        res.status(404).send({
          message:
            'Episode not located. This error is usually a problem with the URL link.',
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          'Database Error: This error usually is a result of an error in the code or program rather than with the web server itself.',
      });
    });
});

// POST /api/v1/guests - create a new guest
router.post('/guests', (req, res) => {
  db.Guest.create(req.body)
    .then((newGuest) => {
      res.status(201).json(newGuest);
    })
    .catch((err) => {
      console.log('Error while creating', err);
      if (err.name === 'ValidationError') {
        res.status(406).send({ message: 'Validation Error' });
      } else {
        res.status(500).send({
          message:
            'Database Error: This error usually is a result of an error in the code or program rather than with the web server itself.',
        });
      }
    });
});

// sauces routes
// GET /sauces - return all sauces
router.get('/sauces', (req, res) => {
  db.Sauce.find()
    .then((sauces) => {
      res.json({ sauces });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          'Database Error: This error usually is a result of an error in the code or program rather than with the web server itself.',
      });
    });
});

// GET /api/v1/sauces/:id - return a specific sauce
router.get('/sauces/:id', (req, res) => {
  db.Sauce.findById(req.params.id)
    .then((sauce) => {
      if (sauce) {
        res.json(sauce);
      } else {
        res.status(404).send({
          message:
            'Episode not located. This error is usually a problem with the URL link.',
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          'Database Error: This error usually is a result of an error in the code or program rather than with the web server itself.',
      });
    });
});

// POST /api/v1/sauces - create a new sauce
router.post('/sauces', (req, res) => {
  db.Sauce.create(req.body)
    .then((newSauce) => {
      res.status(201).json(newSauce);
    })
    .catch((err) => {
      console.log('Error while creating', err);
      if (err.name === 'ValidationError') {
        res.status(406).send({ message: 'Validation Error' });
      } else {
        res.status(500).send({
          message:
            'Database Error: This error usually is a result of an error in the code or program rather than with the web server itself.',
        });
      }
    });
});

// seasons routes
// GET /seasons - return all seasons
router.get('/seasons', (req, res) => {
  db.Season.find()
    .then((seasons) => {
      res.json({ seasons });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          'Database Error: This error usually is a result of an error in the code or program rather than with the web server itself.',
      });
    });
});

// GET /api/v1/seasons/:id - return a specific season
router.get('/seasons/:id', (req, res) => {
  db.Season.findById(req.params.id)
    .then((season) => {
      if (season) {
        res.json(season);
      } else {
        res.status(404).send({
          message:
            'Episode not located. This error is usually a problem with the URL link.',
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message:
          'Database Error: This error usually is a result of an error in the code or program rather than with the web server itself.',
      });
    });
});

// POST /api/v1/seasons - create a new season
router.post('/seasons', (req, res) => {
  db.Season.create(req.body)
    .then((newSeason) => {
      res.status(201).json(newSeason);
    })
    .catch((err) => {
      console.log('Error while creating', err);
      if (err.name === 'ValidationError') {
        res.status(406).send({ message: 'Validation Error' });
      } else {
        res.status(500).send({
          message:
            'Database Error: This error usually is a result of an error in the code or program rather than with the web server itself.',
        });
      }
    });
});

module.exports = router;
