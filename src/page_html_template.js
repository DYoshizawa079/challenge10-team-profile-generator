
// This file generates the HTML code for the app

// Generate the HTML code for an employee card
// The parameter "answer" for this function is the answer that was collected by the Node.js prompts in index.js
let generateEmployee = (answer) => {
    return `
        <div class='employee'>
            <h2>${answer.name}</h2>
            <h3>Position: ${answer.role}</h3>
            <ul>
                <li>ID: ${answer.id}</li>
                <li>Email:<a href="mailto:${answer.email}"> ${answer.email}</a></li>
                <li>Misc:</li>
            </ul>
        </div>
    `;
}

// The parameter "answer" for this function is the answer that was collected by the Node.js prompts in index.js
let htmlCode = (answer) => {

    // Get the HTML code for an employee card by using the function that's generated above
    // The code that's collected will be used further down this function
    let html = generateEmployee(answer);
    
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
  