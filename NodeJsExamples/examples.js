var letsSafeApi = require("lets-safe-api")

letsSafeApi.init('api key here', true)

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

letsSafeApi.submit(tenancyDetails).then((res) =>{
    console.log(res)
});
