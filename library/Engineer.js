const currentHire = require("./currentHire");

class Engineer extends currentHire {
  constructor (id, name, email, github) {
    super (id, name, email)
    this.github= github
  }
  promptRole() {
    return "Engineer"
  }
  promptGithub() {
    return this.github
  }
} 

module.exports = Engineer;