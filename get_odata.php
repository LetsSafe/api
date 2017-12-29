<?php

$apiKey = "";
$odata = "$filter=ApplicantFirstName eq 'Test'";

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://portal.letssafe.com/api/v2/applicants?" + $odata,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "apikey: $apiKey",
    "cache-control: no-cache",
    "content-type: application/json",
    "postman-token: 98ef2c4f-a77f-56b9-1c6f-7e2fb0470458"
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

?>