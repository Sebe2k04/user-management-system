const Team = require('../models/teamSchema');

exports.createTeam = async (req, res) => {
  try {
    const { name, members } = req.body;

    const team = new Team({
      name,
      members,
      createdBy: req.user.id, // `req.user`  via authentication middleware
    });

    await team.save();
    res.status(201).json(team);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate('members createdBy');
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);

    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }

    Object.assign(team, req.body);
    await team.save();
    res.json(team);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);

    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }

    await team.remove();
    res.json({ message: 'Team deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
