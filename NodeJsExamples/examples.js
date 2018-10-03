var letsSafeApi = require("lets-safe-api")

/* For the testing use the new sandbox site and set test api to false */
letsSafeApi.init('api key here', false, 'https://sandbox.letssafe.com/')

/* Get the number of credits available 

1 credit = A credit check | A guarantor reference check
2 credits = A tenant reference check */
letsSafeApi.credits().then((res) =>{
    console.log("Number for credits: ")
    console.log(res)
});

letsSafeApi.count().then((countRes) =>{
    console.log("Count: ")
    console.log(countRes)
})

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
        ApplicantFirstName: 'JULIA',
        ApplicantLastName: 'AUDI',
        ApplicantEmailAddress: 'api@letssafe.com',
        ApplicantPhoneNumber: '123',
        TenantShareOfRent: 400,
        Product: 1 // 1 = Tenant Reference Check, 3 = Guarantor Refernece Check, 4 = Credit Check
    }]
}

/* Step 1: Submit a new reference application
   Step 2: Get the applicants by reference id
   Step 3: Get the applicant by applicant id
   Step 4: Clean up the test, delete the applicant 
*/ 
letsSafeApi.submit(tenancyDetails).then((res) =>{
    console.log("Submit Response")
    console.log(res.body)
    letsSafeApi.references(`$filter=ReferenceId eq guid'${res.body.id}'`).then((res) =>{
        console.log("Get Applicants by Ref Id Response:")
        res.body.forEach(function(element) {            
            letsSafeApi.applicant(element.ApplicantId).then((applicantRes) =>{
                console.log("Get Applicant Response:")
                console.log(applicantRes.body.ApplicantFirstName + " " + applicantRes.body.ApplicantLastName)
                letsSafeApi.deleteApplicant(applicantRes.body.ApplicantId).then((deleteApplicantRes) =>{
                    console.log("Delete Applicant Response:")
                    console.log(deleteApplicantRes)
                })
            });
        });
    });
});
