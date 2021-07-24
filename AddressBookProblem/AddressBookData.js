/**
 * Ability to ensure Valid Contacts are added.
     - First Name and Last Name should start with Capital and Minimum 3 Characters
     - Address, City and State should also have minimum 4 characters
     - Zip, Phone and Email should be valid as done in the Pattern Exercise
     - Throw Error if the RegEx test fails
 * 
 * @author: SAYANI KOLEY
 * @since: 24.07.2021
 */

//importing another class file to the class file
const PersonInfo = require("./PersonInfoData.js"); 
const prompt = require('prompt-sync')();

try{
    let personInfo = new PersonInfo();
    personInfo.fName = prompt("Enter First Name : "); 
    personInfo.lName = prompt("Enter Last Name : "); 
    personInfo.addressName = prompt("Enter Address : "); 
    personInfo.cityName = prompt("Enter City : "); 
    personInfo.stateName = prompt("Enter State : "); 
    personInfo.zipNumber = prompt("Enter Zip : "); 
    personInfo.phoneNumberInput = prompt("Enter Phone Number : "); 
    personInfo.emailInput = prompt("Enter Email : "); 
    console.log(personInfo.toString());
} catch ( e ) {
    console.error(e);
}