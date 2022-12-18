// **`/api/users`**
const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteSingleUser,
    updateSingleUser,
} = require('../../controllers/userController');

// * `GET` all users
// * `PUT` to update a user by its `_id`
// * `POST` a new user: DOES THIS NEED TO BE A ENDPOINT
router.route('/').get(getUsers).post(createUser)
// ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// ```

// * `GET` a single user by its `_id` and populated thought and friend data
// * `DELETE` to remove user by its `_id`
router.route('/:userId').get(getSingleUser).delete(deleteSingleUser).put(updateSingleUser);   ;

module.exports = router;
