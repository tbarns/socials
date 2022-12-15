// **`/api/users`**
const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
} = require('../../controllers/userController');

// * `GET` all users
router.route('/').get(getUsers)

// * `GET` a single user by its `_id` and populated thought and friend data
router.route('/:userId').get(getSingleUser);

// * `POST` a new user: DOES THIS NEED TO BE A ENDPOINT
router.route('/').get(getUsers).post(createUser);
// ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// ```

// * `PUT` to update a user by its `_id`

// * `DELETE` to remove user by its `_id`

// **BONUS**: Remove a user's associated thoughts when deleted.

// ---

// **`/api/users/:userId/friends/:friendId`**

// * `POST` to add a new friend to a user's friend list

// * `DELETE` to remove a friend from a user's friend list

// ---

// /api/users

// /api/users/:userId

module.exports = router;
