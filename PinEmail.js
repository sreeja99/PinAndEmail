let pincodePattern=RegExp('^[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{2}\\s[0-9]{3}');
let emailPattern=RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$");
//uc1
let pincode1=pincodePattern.test(400088);
console.log(pincode1);
//uc2
let pincode2=pincodePattern.test(A400088);
console.log(pincode2);
//uc3
let pincode3=pincodePattern.test(400088B);
console.log(pincode3);
//email
let email1=emailPattern.test("abc@yahoo.com");
let email2=emailPattern.test("abc+100@gmail.com");
//invalid test cases
let email3=emailPattern.test("abc.@gmailcom");