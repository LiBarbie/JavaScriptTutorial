const x = '10';

if(x===10){
	console.log("x is 10");
}//if
else{
	console.log("x is not 10");
}//else

//Condition on variables
const color = x >= 10 ? 'blue' : 'red';
console.log(color);

switch(color){
	case 'red' : console.log("color is red");break;
	case 'blue' : console.log("color is blue");break;
	default : console.log("undefined");break;
}