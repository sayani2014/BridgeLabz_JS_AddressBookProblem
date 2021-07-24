/**Ability to create a New Address Book array 
 * Add new Contacts to it
 * 
 * @author: SAYANI KOLEY
 * @since: 24.07.2021
 */

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
            personInfoList = addressBookService.insert(personInfoList);
            break;
        case 2:
            console.log(personInfoList);
            break;
        case 3:
            flag = false;
            break;    
        default:
            console.log("You have entered invalid input!");
            flag = false;
            break;
    }
}