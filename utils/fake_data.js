var faker = require ('faker');

var fake = function(){
    return{
        email: faker.internet.email()
    }
}

module.exports = fake;