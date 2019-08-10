var age=Number(prompt("What is your age?"));
if(age<0){
	console.log("Age is negative");
}
else if(age==21){
	console.log("Happy 21st Birthday!");
}
else if(age % 2 !== 0){
	console.log("Your age is odd");
}
else if(age % Math.sqrt(age)==0){
	console.log("Your age is a Perfect Square");
}
else{
	console.log("Your age is ordinary");
}