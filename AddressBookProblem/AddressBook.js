/**
 * Ability to find a person with name delete it from the array
 * 
 * @author: SAYANI KOLEY
 * @since: 24.07.2021
 */

const prompt = require('prompt-sync')();
const UserMenu = require("./UserMenuData.js"); 
const AddressBookService = require("./AddressBookServiceClass.js"); 

let userMenu = new UserMenu();
let addressBookService = new AddressBookService();
let personInfoList = new Array();
flag = true;

while( flag ) {

    let option = userMenu.menu();
    switch( option ) {
        case 1:
            personInfoList = Array.from(addressBookService.insert(personInfoList));
            break;
        case 2:
            console.log(personInfoList);
            break;
        case 3:
            let fname = prompt("Enter the First Name of the Contact : ");
            personInfoList = addressBookService.editContact(personInfoList, fname);
            break; 
        case 4:
            let personName = prompt("Enter the First Name of the Contact : ");
            personInfoList = addressBookService.deleteContact(personInfoList, personName);
            break; 
        case 5:
            flag = false;
            break;    
        default:
            console.log("You have entered invalid input!");
            flag = false;
            break;
    }
}