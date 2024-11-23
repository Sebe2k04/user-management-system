const express = require('express');
const {
  createTeam,
  getAllTeams,
  updateTeam,
  deleteTeam,
} = require('../controllers/teamController');

const router = express.Router();

router.post('/', createTeam); // Create a team
router.get('/', getAllTeams); // Get all teams
router.put('/:id', updateTeam); // Update a team
router.delete('/:id', deleteTeam); // Delete a team

module.exports = router;
