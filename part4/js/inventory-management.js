function display_menu() {
    "use strict";
    console.log("Welcome to Product Inventory Management System ");
    console.log("");
    console.log("COMMAND MENU");
    console.log("view - View all products");
    console.log("update - Quantity");
    console.log("exit - Exit the program");
    console.log("");
}

function toString(product){
    "use strict";
    return product[0] + "\t" +product[1] + "\t" +"("+product[2]+") \t$"+product[3];
}


// For viewing the inventory list
function viewInventory(inventory) {
    "use strict";
    inventory.forEach(function (product){
        window.console.log(toString(product));
    });
    window.console.log("");
}


// For updating an existing product’s inventory (quantity)
function updatedInventory(inventory){
    "use strict";
    var sku = window.prompt("Enter Sku :");
    var quantity = window.prompt("Enter quantity to update:");
    var i;
    while (true){
        for(i = 0; i <inventory.length; i++){
            var product = inventory[i];
            if (sku == product[0]){
                product[2] = parseInt(quantity);
                return true;
            }
        }
    }
}


// Executing the commands
function main(){
    "use strict";
    var inventory,command;

    display_menu();

    var product1 = [4000, "Shirt", 10, 15.99];
    var product2 = [5000, "Jeans", 20, 39.99];
    var product3 = [6000, "Socks", 30, 9.99];
    var product4 = [7000, "Hat", 40, 14.99];
    var product5 = [8000, "Jacket", 50, 49.99];

    inventory = [product1 , product2 , product3 , product4 , product5];

    while(true) {
        command = window.prompt("Enter command 'view' or 'update' or 'exit'"); 
        if (command !== null){
            if (command === "view"){
                viewInventory(inventory);
            } else if (command === "update"){
                updatedInventory(inventory);
            } else if (command === "exit"){
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    console.log("Program terminated.");
}
main();