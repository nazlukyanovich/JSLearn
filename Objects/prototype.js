function User(pName, pAge) {
  this.name = pName;
  this.age = pAge;
  this.displayInfo = function(){
    document.write("Name: " + this.name + "; Age: " + this.age + "<br/>");
  };
};
User.prototype.hello = function(){
  document.write(this.name + " Says: 'Hello!'<br/>");
};
User.prototype.maxAge = 110;
var tom = new User ('Tom', 26);
tom.hello();
var john = new User ("John", 28);
john.hello();
console.log(tom.maxAge);
console.log(john.maxAge);