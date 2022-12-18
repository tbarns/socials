const Thoughts = require('../models/Thoughts');
//these are the CRUD operations
module.exports = {

    getThoughts(req, res) {
        Thoughts.find()
            .then((Thoughts) => res.json(Thoughts))
            .catch((err) => res.status(500).json(err));
    },

    getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtsId })
            .select('-__v')
            .then((Thoughts) =>
                !Thoughts
                    ? res.status(404).json({ message: 'No Thoughts with that ID' })
                    : res.json(Thoughts)
            )
            .catch((err) => res.status(500).json(err));
    },

    createThought(req, res) {
        Thoughts.create(req.body)
            .then((dbThoughtsData) => res.json(dbThoughtsData))
            .catch((err) => res.status(500).json(err));
    },


    deleteSingleThought(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.thoughtsId })
            .select('-__v')
            .then((Thoughts) =>
                !Thoughts
                    ? res.status(404).json({ message: 'No Thoughts with that ID' })
                    : res.json(Thoughts)
            )
            .catch((err) => res.status(500).json(err));
    },


    updateSingleThought(req, res) {
        const update = req.body
        Thoughts.findOneAndUpdate({ _id: req.params.thoughtsId, update })
            .select('-__v')
            .then((Thoughts) =>
                !Thoughts
                    ? res.status(404).json({ message: 'NoThoughts with that ID' })
                    : res.json(Thoughts)
            )
            .catch((err) => res.status(500).json(err));
    },

};