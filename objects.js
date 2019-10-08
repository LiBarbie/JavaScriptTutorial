//objects

const person={
	name: 'John',
	surname: 'Doe',
	age : 30,
	hobbies : ['music','movies','sports','...'],
	address : {
		street : '50 main st',
		city : 'Boston',
		state : 'MA'
	}
}

person.number = '+44 074 238 5839';

const todos=[
	{
		id : 1,
		text : "Take out trash",
		isCompleted: true
	},
	{
		id :2,
		text : "Meeting with boss",
		isCompleted: true
	},
	{
		id : 3,
		text : "Dentist appointment",
		isCompleted: false
	}
];

/*
console.log(person.hobbies[1]);
console.log(person.address.city);
console.log(person.number);
*/
console.log(todos[1].text);
