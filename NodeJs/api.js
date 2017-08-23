var request = require("request");

var useTestApi = true;
var apiKey = 'api key here'

function apiUrl() {
    if (useTestApi) {
        return 'https://portal.letssafe.com/testapi/v2';
    }
    else {
        return 'https://portal.letssafe.com/api/v2'
    }
}

function submit(tenancyDetails) {
    let options = {
        method: 'POST',
        url: apiUrl() + '/references',
        headers:
        {
            'cache-control': 'no-cache',
            apikey: apiKey,
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
            resolve(JSON.parse(body));
        });
    });

    return promise;
}

function completedReferences(odata = "") {

    const options = {
        method: 'GET',
        url: apiUrl() + '/applicants/completed?' + odata,
        headers:
        {
            'cache-control': 'no-cache',
            apikey: apiKey
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

/* 
//Get a list of completed ref, odata can be used to filter the data 
completedReferences('$top=5&$skip=0').then((res) => {
    console.log(res.length)
});
*/

/* 
// Sample payload for submitting a reference 
const tenancyDetails = {
    TenancyTerm: 2,
    TenancyAddressPostcode: 'SW11 1XZ',
    TenancyStartDate: '11/11/2017',
    TenancyAddressLine1: '1',
    TenancyAddressTown: 'Test Town',
    TenancyAddressCounty: 'Test County',
    TenancyMonthlyRent: '400',
    Applicants:
    [{
        ApplicantFirstName: 'CC JULIA',
        ApplicantLastName: 'AUDI',
        ApplicantEmailAddress: 'api@letssafe.com',
        ApplicantPhoneNumber: '123',
        TenantShareOfRent: 400,
        Product: 4
    }]
}

submit(tenancyDetails).then((res) => {
    console.log(res)
})
 */