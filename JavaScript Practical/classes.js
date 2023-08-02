class Person{

    constructor(uname,uage){
        this.name= uname;
        this.age=uage;
    }

    details(){
        console.log(`The person's name is ${this.name} and age is ${this.age}`);
    }

}
const person1 = new Person("Nurat",12);
person1.details();
