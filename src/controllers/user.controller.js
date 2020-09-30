const User = require("../models/user.model");
const { response, responseError } = require("../helpers/response.helper");

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        responseError(res, "Content can not be empty!");
    }

    // Create a User
    const user = new User({
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        refreshToken: req.body.refreshToken,
        createdDate: req.body.createdDate,
        modifiedDate: req.body.modifiedDate,
    });

    // Save User in the database
    User.create(user, (err, data) => {
        if (err)
            responseError(res, err.message || "Some error occurred while creating the User.", 500);
        else response(res, 'Create user successfully', data);
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            responseError(res, err.message || "Some error occurred while retrieving user.", 500);
        else response(res, 'List user', data);
    });
};

// Find a single User with a userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                responseError(res, `Not found User with id ${req.params.userId}.`, 404);
            } else {
                responseError(res, `Error retrieving User with id ${req.params.userId}.`, 500);
            }
        } else response(res, 'User by id', data);
    });
};

// Update a User identified by the userId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        responseError(res, "Content can not be empty!", 400);
    }

    User.updateById(
        req.params.userId,
        new User(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    responseError(res, `Not found User with id ${req.params.userId}.`, 404);
                } else {
                    responseError(res, `Error updating User with id ${req.params.userId}`, 500);
                }
            } else response(res, 'Update user successfully', data);
        }
    );
};

// Delete a User with the specified userId in the request
exports.delete = (req, res) => {
    User.remove(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                responseError(res, `Not found User with id ${req.params.userId}.`, 404);
            } else {
                responseError(res, `Could not delete User with id ${req.params.userId}.`, 500);
            }
        } else response(res, 'User was deleted successfully!');
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.removeAll((err, data) => {
        if (err)
            responseError(res, err.message || "Some error occurred while removing all users.", 500);
        else response(res, 'All Users were deleted successfully!');
    });
};
