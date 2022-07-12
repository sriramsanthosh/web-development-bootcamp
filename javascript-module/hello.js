// alert("Hello");
// alert("World");
// window.alert("Hello, World!!")

// var myName = "Google Chrome";
// var yourName = prompt("What is your name?");
// alert("My name is " + myName + ", Welcome to my Browser "+ yourName+"!");

// myName.slice(0,1);

// alert(prompt("Write your tweet....").slice(0,140));

// capital_name = myName.toUpperCase();
// small_name = myName.toLowerCase();

// var name = prompt("What is your name?");
// name = name.toLowerCase();
// var first_part = name.slice(0,1);
// first_part = first_part.toUpperCase();
// final_name = first_part + name.slice(1, name.length);
// alert("Welcome to Chrome ..." + final_name + "!");


// Dog Age to Human Age Formula :
                                    // humanAge = (dogAge-2)*4+21;

// var dogAge = prompt("What's your dog age?");
// var humanAge = (dogAge-2)*4+21;
// alert("Your dog's Human Age is "+ humanAge);

// console.log is only visible to developer in the console 
``
// function getMilk() {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }

var bottles = prompt("How many bottles?");

function getMilk(bottles) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy " + bottles + " bottles of Milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(bottles);