'use strict';

exports.response = function (res, msg, data) {
    const result = {
        'message': msg,
        'data': data
    };
    res.json(result);
    res.end();
};

exports.responseError = function (res, msg, code = null) {
    const result = {
        'message': msg
    };
    res.status(code ? code : 400).send(result);
    res.end();
};
