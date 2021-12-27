const currentHire = require("./currentHire");

class Engineer extends currentHire {
  constructor (name, email, id, role, github){
    super(name, email, id)
    this.role = role;
    this.github = github;
  }
  getRole() {
    return "Engineer"
  }
  getGithub() {
    return this.github
  }
} 

module.exports = Engineer;