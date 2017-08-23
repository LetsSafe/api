var request = require("request");

var _useTestApi = true;
var _apiKey = 'api key here'

function _apiUrl() {
    if (_useTestApi) {
        return 'https://portal.letssafe.com/testapi/v2';
    }
    else {
        return 'https://portal.letssafe.com/api/v2'
    }
}

function init(apiKey, useTestApi) {
    _apiKey = apiKey;
    _useTestApi = useTestApi;
}

function submit(tenancyDetails) {
    let options = {
        method: 'POST',
        url: _apiUrl() + '/references',
        headers:
        {
            'cache-control': 'no-cache',
            apikey: _apiKey,
            'content-type': 'application/json'
        },
        body: JSON.stringify(tenancyDetails)
    };

    const promise = new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error) {
                throw new Error(error);
                reject(error);
            }
            resolve(body);
        });
    });

    return promise;
}

function completedReferences(odata = "") {

    const options = {
        method: 'GET',
        url: _apiUrl() + '/applicants/completed?' + odata,
        headers:
        {
            'cache-control': 'no-cache',
            apikey: _apiKey
        }
    };

    const promise = new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error) {
                throw new Error(error);
                reject(error);
            }
            resolve(JSON.parse(body));
        });
    });

    return promise;
}

module.exports = { submit, completedReferences, init };