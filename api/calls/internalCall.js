'use strict'

const axios = require('axios').default;

async function adCall() {
    return axios({
        method: 'GET',
        url: `http://127.0.0.1:3000/anuncios`,
    })
        .then(function (response) {
            //console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            const throwError = ['error', error];
            return throwError;
        })
}

module.exports = adCall;