const currentHire = require("./currentHire");

class Intern extends currentHire {
  constructor (name, email, id, role, school){
    super(name, email, id)
    this.role = role;
    this.school = school;
  }
  promptRole() {
    return "Intern"
  }
  promptGithub() {
    return this.school
  }
} 

module.exports = Intern;