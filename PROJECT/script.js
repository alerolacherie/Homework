const person = {
    firstName:"Kate"
    lastName:"Smith"
    age:"30"
    address: { 
        street:"Mountain"
        city:"Mountain"
        postCode:"Mountain"
    }
    greet:function () {
        console.log("Hello, I am ${this.firstName} ${this.lastName}.")
    }
};

console.log(person.firstName);

person.greet{};

