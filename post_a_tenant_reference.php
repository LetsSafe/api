<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_PORT => "51838",
  CURLOPT_URL => "https://portal.letssafe.com/api/v2/references",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n\t\"TenancyTerm\": 2,\n\t\"TenancyAddressPostcode\" : \"SW11 1XZ\",\n\t\"TenancyStartDate\": \"11/11/2017\",\n\t\"TenancyAddressLine1\": \"1\",\n\t\"TenancyAddressTown\": \"Test Town\",\n\t\"TenancyAddressCounty\": \"Test County\",\n\t\"TenancyMonthlyRent\": \"400\",\n\t\"Applicants\": [ \n\t\t{ \"ApplicantFirstName\": \"CC JULIA\", \"ApplicantLastName\": \"AUDI\", \"ApplicantEmailAddress\": \"api@letssafe.com\", \"ApplicantPhoneNumber\": \"123\", \"TenantShareOfRent\": 400, \"Product\": 4 }\n\t]\n}",
  CURLOPT_HTTPHEADER => array(
    "apikey: --APIKEY HERE--",
    "cache-control: no-cache",
    "content-type: application/json",
    "postman-token: adbd1e14-5827-3c5e-1c2e-e2b845f845a0"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}