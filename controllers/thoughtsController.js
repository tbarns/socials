const Thoughts = require('../models/Thoughts');
//these are the CRUD operations
module.exports = {

    getThoughts(req, res) {
        Thoughts.find()
            .then((Thoughts) => res.json(Thoughts))
            .catch((err) => res.status(500).json(err));
    },

    getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.userId })
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
        Thoughts.findOneAndDelete({ _id: req.params.userId })
            .select('-__v')
            .then((Thoughts) =>
                !Thoughts
                    ? res.status(404).json({ message: 'No Thoughts with that ID' })
                    : res.json(Thoughts)
            )
            .catch((err) => res.status(500).json(err));
    },


    updateSingleThought(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No thoughts with this id!' })
                    : res.json(thoughts)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //function that reachtion post
    addSingleReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: { reactions: req.body } },
            { runValidators: true, new: true }
        )
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No thoughts with this id!' })
                    : res.json(thoughts)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    removeReaction(req, res) {
        Thoughts.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
          .then((reactions) =>
            !reactions
              ? res
                  .status(404)
                  .json({ message: 'No reaction found with that ID :(' })
              : res.json(reactions)
          )
          .catch((err) => res.status(500).json(err));
      },
    
    
};