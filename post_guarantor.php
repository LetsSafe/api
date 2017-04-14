<?php

$apiKey = "";
$applicantId = "";
$payload = "{ \"ApplicantFirstName\": \"GTOR JULIA\", \"ApplicantLastName\": \"AUDI\", \"ApplicantEmailAddress\": \"api@letssafe.com\", \"ApplicantPhoneNumber\": \"123\" }";

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://portal.letssafe.com/api/v2/applicants/" + $applicantId + "/gtors/add",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $payload,
  CURLOPT_HTTPHEADER => array(
    "apikey: " + $apiKey,
    "cache-control: no-cache",
    "content-type: application/json"
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