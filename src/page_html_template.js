
// This file generates the HTML code for the app

// Generate the HTML code for an employee card
// The parameter "StaffData" for this function is the StaffData that was collected by the Node.js prompts in index.js
let generateEmployees = (StaffData) => {

    let staffHTML = "";

    StaffData.forEach(element => {
        //staffHTML += "Test";
        staffHTML += `
        <div class='employee'>
            <h2>${element.name}</h2>
            <h3>Position: ${element.role}</h3>
            <ul>
                <li>ID: ${element.id}</li>
                <li>Email:<a href="mailto:${element.email}"> ${element.email}</a></li>
                <li>Misc:</li>
            </ul>
        </div>
        `;

    });

    return staffHTML;
    /* return `
        <div class='employee'>
            <h2>${StaffData.name}</h2>
            <h3>Position: ${StaffData.role}</h3>
            <ul>
                <li>ID: ${StaffData.id}</li>
                <li>Email:<a href="mailto:${StaffData.email}"> ${StaffData.email}</a></li>
                <li>Misc:</li>
            </ul>
        </div>
    `; */
}

// The parameter "StaffData" for this function is the StaffData that was collected by the Node.js prompts in index.js
let htmlCode = (StaffData) => {

    // Get the HTML code for an employee card by using the function that's generated above
    // The code that's collected will be used further down this function
    let html = generateEmployees(StaffData);
    
    return `
<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                  ${html}
              </div>
          </div>
      </div>
  </body>
  </html>
      `;
};

// The generated code will be sent to index.js
module.exports = htmlCode;
  