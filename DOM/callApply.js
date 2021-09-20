const normalPerson = {
    firstName: 'Dip',
    lastName: 'Baidya',
    salary: 15000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tax, tip) {
        console.log(this);
        this.salary = this.salary - amount - tax - tip;
        return this.salary;
    }
}

// normalPerson.chargeBill(500);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 25000
}
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(5000);
// heroChargeBill(3000);
// console.log(heroChargeBill(5000));
// console.log(heroChargeBill(5000))

// normalPerson.chargeBill.call(heroPerson, 500, 300, 600);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [600,50,40]);
console.log(heroPerson.salary);
