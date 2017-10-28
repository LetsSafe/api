<h1>Lets Safe API</h1>

<p>All calls can be made using PHP, see our examples below.</p>

<p>To use the test API replace api/v2 with testapi/v2, the test API will return mocked data.<p>

<ul>
    <li>
        <a href="https://github.com/LetsSafe/api/blob/master/post_reference.php">Create a new tenant reference</a>
    </li>
    <li>
        <a href="https://github.com/LetsSafe/api/blob/master/post_guarantor.php">Add a guarantor to an applicant</a>
    </li>
    <li>
        <a href="https://github.com/LetsSafe/api/blob/master/get_applicant.php">Get an applicant</a>
    </li>
     <li>
        <a href="https://github.com/LetsSafe/api/blob/master/get_report.php">Get a PDF report (Does not work on the test api, only live data)</a>
    </li>
    <li>
        <a href="https://github.com/LetsSafe/api/blob/master/get_odata.php">Query using OData</a>
    </li>
    <li>
        <a href="https://github.com/LetsSafe/api/blob/master/get_inprogress.php">Get inprogress tenant references</a>
    </li>
    <li>
        <a href="https://github.com/LetsSafe/api/blob/master/get_completed.php">Get complate tenant references</a>
    </li>
    <li>
        <a href="https://github.com/LetsSafe/api/blob/master/delete_applicant.php">Delete an applicant</a>
    </li>
</ul>

<h2>Test API Mocked Urls</h2>
<p>
    https://portal.letssafe.com/testapi/v2/applicants/3fdc5a6f-09b8-459e-9b1d-129e761a485c<br />
    https://portal.letssafe.com/testapi/v2/credits<br />
    https://portal.letssafe.com/testapi/v2/references<br />
    https://portal.letssafe.com/testapi/v2/applicants/completed<br />
    https://portal.letssafe.com/testapi/v2/applicants/inprogress<br />
</p>

<h2>OData filtering examples</h2>
<ul>
    <li>/testapi/v2/applicants/completed?$filter=contains(ApplicantFirstName, 'Test')&$top=5</li>
    <li>/testapi/v2/applicants?$orderby=CreatedOn desc&$select=CreatedOn,ApplicantFirstName&$top=5</li>
    <li>/testapi/v2/applicants/completed?$filter=date(CreatedOn) gt 2017-09-11 and date(CreatedOn) lt 2017-11-11&$top=2</li>
    <li>/testapi/v2/applicants/completed?$filter=year(CreatedOn) gt 2016 and month(CreatedOn) lt 11&$top=2`</li>
    <li>/testapi/v2/references?$filter=ReferenceId eq 9937dec9-ff6c-47c8-a55b-3f1c21633f85</li>
</ul>

<h2>How to setup Webhooks</h2>
<p>
    To enable webhooks:
    1: Login to the Portal
    2: Go to Settings
    3: Add a webhook url   
</p>

<h2>Webhook Events</h2>
<ul>  
    <li>Referencing Events</li>
    <li>applicant/created, when a new reference is created</li>
    <li>applicant/gtor/created, when a guarantor is added to a reference</li>
    <li>applicant/deleted, when an applicant is delete from a reference</li>
    <li>applicant/details/completed, when an applicant completes their initial applicantion</li>
    <li>applicant/completed, when an applicants reference completes</li>
    <li>applicant/employer/completed, when the employer completes the reference</li>
    <li>applicant/futureemployer/completed, when the future employer completes the reference</li>
    <li>applicant/landlord/completed, when the landlord completes the reference</li>
    <li>applicant/previouslandlord/completed, when the previous landlord completes the reference</li>
    <li>Payments</li>
    <li>payment/created, when a payment is made on your account</li>
</ul>
<ul>  
    <li>Referencing Event Payload</li>
    <li>{ "Payload":"applicant id GUID", "AgentId":1, "EventType":"applicant/created" }</li>
    <li>{ "Payload":"applicant id GUID", "AgentId":1, "EventType":"applicant/gtor/created" }</li>
    <li>{ "Payload":"applicant id GUID", "AgentId":1, "EventType":"applicant/deleted"}</li>
    <li>{ "Payload":"applicant id GUID"," AgentId":1, "EventType":"applicant/details/completed"}</li>
    <li>{ "Payload":"applicant id GUID"," AgentId":1, "EventType":"applicant/completed"}</li>
    <li>{ "Payload":"applicant id GUID", "AgentId":1, "EventType":"applicant/employer/completed"}</li>
    <li>{ "Payload":"applicant id GUID", "AgentId":1, "EventType":"applicant/futureemployer/completed"}</li>
    <li>{ "Payload":"applicant id GUID", "AgentId":1, "EventType":"applicant/landlord/completed"}</li>
    <li>{ "Payload":"applicant id GUID", "AgentId":1, "EventType":"applicant/previouslandlord/completed"}</li>
    <li>Payments</li>
    <li>{ "Payload":"", "AgentId":1, "EventType":"payment/created" }</li>
</ul>

<h2>Product Types</h2>
<ul>
    <li>Full Tenant Reference = 1</li>
    <li>Guarantor Reference = 3</li>
    <li>Credit Check = 4</li>        
</ul>

<h2>Grade Types</h2>
<ul>
    <li>Pass = 1</li>
    <li>Failed = 2</li>
    <li>Inconclusive = 3</li>
    <li>Not Applicable = 4</li>
    <li>In Progress = 5</li>
    <li>Warning = 6</li>
</ul>

<h2>Employment Types</h2>
<ul>
    <li>Employed = 1</li>
    <li>Employed Part Time = 2</li>
    <li>Self Employed = 3</li>
    <li>Unemployed = 4</li>
    <li>Contract = 5</li>
    <li>Retired = 6</li>
    <li>Student = 7</li>
</ul>

<h2>Residential Type</h2>
<ul>
    <li>Property Owner = 1</li>
    <li>Council Tenant = 2</li>
    <li>Private Tenant = 3</li>
    <li>Living With Friends Or Relatives = 4</li>
</ul>

<h2>Title Types</h2>
<ul>
    <li>Mr = 1</li>
    <li>Mrs = 2</li>
    <li>Miss = 3</li>
    <li>Ms = 4</li>
    <li>Dr = 5</li>
    <li>Rev = 6</li>
    <li>Lord = 7</li>
    <li>Lady = 8</li>
    <li>Sir = 9</li>
    <li>Professor = 10</li>
    <li>Captian = 11</li>
    <li>Colonel = 12</li>
    <li>Hon = 13</li>
    <li>Major = 14</li>        
</ul>
