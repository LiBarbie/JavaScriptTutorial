
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
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/

//For loops

/*for
for(let i=0; i<5; i++){
	console.log("Hello "+i+".");
}//for
*/

/*while
let i=0;
while (i<5){
	console.log("Hello "+i+".");
	i++;
}//while
*/

/*forEach
todos.forEach(function(todo){
	console.log(todo.text);
});
*/

/*map
const todoText = todos.map(function(todo){
	return todo.text;
});
*/

//map
const todoText = todos.filter(function(todo){
	return todo.isCompleted == true;
});

console.log(todoText);