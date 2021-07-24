/**
 * Ability to create a Address Book Contact with first and last names, address, city, state, zip, phone number and email.
 * 
 * @author: SAYANI KOLEY
 * @since: 24.07.2021
 */

//importing another class file to the class file
const PersonInfo = require("./PersonInfoData.js"); 
const prompt = require('prompt-sync')();

//Ability to add values to the PersonInfoData
var personInfo = new PersonInfo("Sayani", "Koley", "Hwh", "Hwh", "WB", "711101", "7894561230", "sk@abc.in");
console.log(personInfo.toString());

personInfo.firstName = "Megha";
personInfo.lastName = "Ganguly";
personInfo.address = "Hinjewadi";
personInfo.city = "Pune";
personInfo.state = "Maharashtra";
personInfo.zip = "456123";
personInfo.phoneNumber = "8974561230";
personInfo.email = "mg@abc.in";
console.log(personInfo.toString());

//Ability to add user-defined values to the PersonInfoData
personInfo.firstName = prompt("Enter First Name : "); 
personInfo.lastName = prompt("Enter Last Name : "); 
personInfo.address = prompt("Enter Address : "); 
personInfo.city = prompt("Enter City : "); 
personInfo.state = prompt("Enter State : "); 
personInfo.zip = prompt("Enter Zip : "); 
personInfo.phoneNumber = prompt("Enter Phone Number : "); 
personInfo.email = prompt("Enter Email : "); 
console.log(personInfo.toString());