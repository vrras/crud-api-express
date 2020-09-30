const dotenv = require('dotenv');
dotenv.config();

exports.get = (key) => {
    return process.env[key];
}

exports.getNumber = (key) => {
    return parseInt(process.env[key], 10);
}

exports.getBoolean = (key) => {
    return process.env[key] === 'true';
}
