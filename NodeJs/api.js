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

function _headers(){
    return {
        'cache-control': 'no-cache',
        apikey: _apiKey,
        'content-type': 'application/json'
    }
}

function _references(odata, endpoint){
    const options = {
        method: 'GET',
        url: _apiUrl() + '/applicants'+ endpoint +'?' + odata,
        headers: _headers()
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

function init(apiKey, useTestApi) {
    _apiKey = apiKey;
    _useTestApi = useTestApi;
}

function submit(tenancyDetails) {
    let options = {
        method: 'POST',
        url: _apiUrl() + '/references',
        headers: _headers(),
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

function addAGuarantor(applicantId, guarantorDetails) {
    let options = {
        method: 'POST',
        url: _apiUrl() + '/applicants/' + applicantId + '/gtors/add',
        headers: _headers(),
        body: JSON.stringify(guarantorDetails)
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
    return _references(odata, '/completed');
}

function inprogressReferences(odata = "") {
    return _references(odata, '/inprogress');
}

function references(odata = "") {    
    return _references(odata, '');
}

function count() {
    const options = {
        method: 'GET',
        url: _apiUrl() + '/applicants/$count',
        headers: _headers()
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

function applicant(applicantId){
    const options = {
        method: 'GET',
        url: _apiUrl() + '/applicants/'+ applicantId,
        headers: _headers()
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

function deleteApplicant(applicantId){
    const options = {
        method: 'DELETE',
        url: _apiUrl() + '/applicants/'+ applicantId,
        headers: _headers()
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

function credits() {
    const options = {
        method: 'GET',
        url: _apiUrl() + '/credits',
        headers: _headers()
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

function pdfReport(applicantId){
    const options = {
        method: 'GET',
        url: _apiUrl() + '/applicants/'+ applicantId + '/pdf',
        headers: _headers()
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

module.exports = { init, submit, addAGuarantor, deleteApplicant, references, completedReferences, inprogressReferences, count, credits, applicant, pdfReport };