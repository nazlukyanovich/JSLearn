var phoneNumber = "+1-234-567-8901";
var myExp = /\d-\d\d\d-\d\d\d-\d\d\d\d/;
phoneNumber = phoneNumber.replace(myExp, "00000000000");
document.write(phoneNumber);