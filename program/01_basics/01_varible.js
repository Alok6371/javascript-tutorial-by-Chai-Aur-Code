const accountId = 6371277537;
let accountEmail = "palok2406@gmail.com";
var accountPassword = "12345"
accountCity = "ganjam";
let accountState;

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// accountId=2;  // Not allowed

accountEmail = "alokpra572@gmail.com";
accountPassword = "21212121";
accountCity = "Bhubaneswar";

console.log(accountId);

/*
prefer do not use var 
beacause of issue in block   scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity])