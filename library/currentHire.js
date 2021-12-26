class currentHire {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }
    getEmail() {
        return this.email
    }
    getName() {
        return this.name
    }
    getID() {
        return this.id
    }
    getRole() {
        return "currentHire";
    }
}

module.exports = currentHire;