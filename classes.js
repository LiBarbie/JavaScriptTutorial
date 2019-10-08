/*//Constructor Function
function Person(name, surname, dateOfBirth){
	this.name = name;
	this.surname = surname;
	this.dateOfBirth = dateOfBirth;
	this.getBirthYear = function(){
		return this.dateOfBirth.substr(6,4);
	}
	this.getFullName = function(){
		return this.name+" "+this.surname;
	}
}//Person
*/
//Class
class Person{
	constructor(name,surname,dateOfBirth){
		this.name = name;
		this.surname = surname;
		this.dateOfBirth = dateOfBirth;
	}//constructor
	getBirthYear(){
		return this.dateOfBirth.substr(6,4);
	}//getBirthYear
	getFullName(){
		return this.name+" "+this.surname;
	}//getFullName
}//Person

//instatiate an object
const p1 = new Person("Alice","Willington","15/03/1990");
const p2 = new Person("Mary","Smith","07/06/2000");

console.log(p1);
console.log(p2.getBirthYear());
console.log(p2.getFullName());