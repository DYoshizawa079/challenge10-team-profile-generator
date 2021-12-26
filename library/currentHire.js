class currentHire {
    constructor(email, name, id) {
        this.email = email;
        this.name = name;
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