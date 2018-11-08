<h1>Lets Safe API</h1>

<p>All calls can be made using PHP, see our examples below.</p>
<p>Or npm install lets-safe-api</p>

<p>To test the API use the sandbox site. https://sandbox.letssafe.com/ and go to https://sandbox.letssafe.com/swagger/ui/index to see all the api calls available.<p>
    
<p><a href="https://portal.letssafe.com/swagger">View our Swagger documents here</a></p>

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
        <a href="https://github.com/LetsSafe/api/blob/master/get_completed.php">Get completed tenant references</a>
    </li>
    <li>
        <a href="https://github.com/LetsSafe/api/blob/master/delete_applicant.php">Delete an applicant</a>
    </li>
</ul>

<h2>Billing Api Examples</h2>

<ul>    
    <li>
        <a href="https://github.com/LetsSafe/api/blob/master/get_billing_orders.php">Get all orders</a>
    </li>
    <li>
        <a href="https://github.com/LetsSafe/api/blob/master/get_billing_order.php">Get an order</a>
    </li>
    <li>
        <a href="https://github.com/LetsSafe/api/blob/master/get_billing_order_pdf.php">Get an orders pdf</a>
    </li>
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
    <li>applicant/created, when a new reference is created</li>
    <li>applicant/gtor/created, when a guarantor is added to a reference</li>
    <li>applicant/deleted, when an applicant is delete from a reference</li>
    <li>applicant/details/completed, when an applicant completes their initial application</li>
    <li>applicant/completed, when an applicant's reference completes</li>
    <li>applicant/employer/completed, when the employer completes the reference</li>
    <li>applicant/futureemployer/completed, when the future employer completes the reference</li>
    <li>applicant/landlord/completed, when the landlord completes the reference</li>
    <li>applicant/previouslandlord/completed, when the previous landlord completes the reference</li>
    <li>Payments</li>
    <li>payment/created, when a payment is made on your account</li>
</ul>
<h2>Webhook Events Payloads</h2>
<ul>  
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

<ul>
    <li>GradeCcId: Credit Check</li>
    <li>GradePorId: Proof of Residence Grade</li>
    <li>GradeEmpId: Employer Reference Grade</li>
    <li>GradeFtrEmpId: Future Employer Reference Grade</li>
    <li>GradeLlId: Landlord Reference Grade</li>
    <li>GradePrvLlId: Previous Landlord Reference Grade</li>
    <li>GradeAcctId: Accountant Reference Grade</li>
    <li>GradeGtorId: Guarantor Reference Grade</li>
    <li>GradeIrrId: Income to Rent Ratio Grade</li>
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
