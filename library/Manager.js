const currentHire = require("./currentHire");

class Manager extends currentHire {
    constructor (name, email, id, role, officeNumber){
        super(name, email, id)
        this.role = role;
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager"
    } 
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager;