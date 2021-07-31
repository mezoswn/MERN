const express = require("express");
const Faker = require("faker");
const app = express();
const port = 8000;
    
// req is shorthand for request
// res is shorthand for response
class user{
    constructor(){
        this.id=Faker.datatype.uuid();
        this.name=Faker.name.firstName();
        this.lastname=Faker.name.lastName();
        this.phone=Faker.phone.phoneNumber();
        this.email=Faker.internet.email();
        this.password=Faker.internet.password();
    
    }
}

class company{
    constructor(){
        this.id=Faker.datatype.uuid();
        this.comname=Faker.company.companyName();
        this.st= Faker.address.streetName();
        this.state= Faker.address.state();
        this.city= Faker.address.city();
        this.country= Faker.address.country();
        this.zipCode= Faker.address.zipCode();

    }
}
app.get("/api/users/new", (req, res) => {
    var user1 = new user();
    res.json({
      results: user1
    });
});
app.get("/api/company/new", (req, res) => {
    var user1 = new company();
    res.json({
      results: user1
    });
});
app.get("/api/company/user", (req, res) => {
    var company1 = new company();
    var user1 = new user();
    res.json({
      results: {company1,user1}
    });
});


// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
