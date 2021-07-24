//importing another class file to the class file
const PersonInfo = require("./PersonInfoData.js"); 
const prompt = require('prompt-sync')();

class AddressBookService {
    personInfoList = new Array();
    insert(personInfoList) {
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

            personInfoList.push(personInfo);

            return personInfoList;
        } catch ( e ) {
            console.error(e);
        }
    }
}

module.exports = AddressBookService;