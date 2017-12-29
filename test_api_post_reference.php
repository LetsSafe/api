<?php

$request = new HttpRequest();
$request->setUrl('https://portal.letssafe.com/testapi/v2/references');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'postman-token' => 'b3e3f85d-e798-a4c2-e13c-b2425885fc07',
  'cache-control' => 'no-cache',
  'apikey' => '',
  'content-type' => 'application/json'
));

$request->setBody('{"TenancyTerm": 2,"TenancyAddressPostcode" : "SW11 1XZ","TenancyStartDate": "11/11/2017","TenancyAddressLine1": "1","TenancyAddressTown": "Test Town","TenancyAddressCounty": "Test County","TenancyMonthlyRent": "400","Applicants": [{ "ApplicantFirstName": "CC JULIA", "ApplicantLastName": "AUDI", "ApplicantEmailAddress": "api@letssafe.com", "ApplicantPhoneNumber": "123", "TenantShareOfRent": 400, "Product": 4 }]}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}

?>