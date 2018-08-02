var faker = require ('faker');

var fake = function(){
    return{
        email: faker.internet.email(),
        libraryName: "Conquer" + faker.address.city() + " " + "Library",
        address: faker.address.streetAddress(),
        phone: faker.phone.phoneNumber(),
        message: faker.lorem.sentence()
    }
}

module.exports = fake;