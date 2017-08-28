var letsSafeApi = require("lets-safe-api")

letsSafeApi.init('zX6LSRQ590lzzni9P5kMFc709q9JP5LuSwwSFkYfj1AngeacMqHs6oxveWWuTLwB', true)

/* Get the number of credits available 

1 credit = A credit check | A guarantor reference check
2 credits = A tenant reference check */
letsSafeApi.credits().then((res) =>{
    console.log("Number for credits" + res)
});

/* Submit a new tenant reference check

All fields are required and a max of 6 Applicants can be submitted per tenant refernece. */
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
        Product: 1 // 1 = Tenant Reference Check, 3 = Guarantor Refernece Check, 4 = Credit Check
    }]
}

letsSafeApi.submit(tenancyDetails).then((res) =>{
    console.log("Tenant reference id (Guid): " + res)
});
