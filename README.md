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
        <a href="https://github.com/LetsSafe/api/blob/master/get_report.php">Get a PDF report</a>
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

