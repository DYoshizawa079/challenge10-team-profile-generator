const currentHire = require("./currentHire");

class Engineer extends currentHire {
  constructor (name, email, id, role, github){
    super(name, email, id)
    this.role = role;
    this.github = github;
  }
  promptRole() {
    return "Engineer"
  }
  promptGithub() {
    return this.github
  }
} 

module.exports = Engineer;