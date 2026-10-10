const express = require('express');
const Stone = require('../models/stone');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  Stone.find()
    .then((stones) => res.json(stones))
    .catch((err) => next(err));
});

router.get('/:id', async (req, res, next) => {
  Stone.findById(req.params.id)
    .then((stone) => {
      if (!stone) {
        res.statusMessage = 'Stone not found';
        return res.status(404).json({ error: 'Stone not found' });
      }
      res.json(stone);
    })
    .catch((err) => next(err));
});

router.post('/', async (req, res, next) => {
  if (!req.body || !req.body.name) {
    res.statusMessage = 'Name is required';
    return res.status(400).json({ error: 'Name is required' });
  }

  const newStone = new Stone({ name: req.body.name });
  newStone
    .save()
    .then((stone) => res.status(201).json(stone))
    .catch((err) => next(err));
});

router.delete('/:id', async (req, res, next) => {
  Stone.findByIdAndDelete(req.params.id)
    .then((stone) => {
      if (!stone) {
        res.statusMessage = 'Stone not found';
        return res.status(404).json({ error: 'Stone not found' });
      }
      res.status(204).end();
    })
    .catch((err) => next(err));
});

router.put('/:id', async (req, res, next) => {
  if (!req.body || !req.body.name) {
    res.statusMessage = 'Name is required';
    return res.status(400).json({ error: 'Name is required' });
  }

  Stone.findById(req.params.id)
    .then((stone) => {
      if (!stone) {
        res.statusMessage = 'Stone not found';
        return res.status(404).json({ error: 'Stone not found' });
      }
      stone.name = req.body.name;
      return stone.save();
    })
    .then((updatedStone) => res.json(updatedStone))
    .catch((err) => next(err));
});

module.exports = router;
