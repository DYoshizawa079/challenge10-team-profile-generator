const currentHire = require("./currentHire");

class Intern extends currentHire {
    constructor (id, name, email, school) {
      super (id, name, email)
      this.school= school
    }
    promptRole() {
      return "Intern"
    }
    promptGithub() {
      return this.school
    }
  } 
  
  module.exports = Intern;