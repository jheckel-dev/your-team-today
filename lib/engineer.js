const Employee =  require("./employee");

class Engineer extends Employee{
    constructor (name, id, email, gitHubUser){
    super (name, id, email);
    this.github = gitHubUser;
    this.role = "Engineer";
    }
    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getEmail(){
        return this.email;
    }
    
    getGithub(){
        return this.github;
    }
    
    getRole() {
        return this.role;
    }
    

}

module.exports = Engineer;