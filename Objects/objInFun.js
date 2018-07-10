function createUser(pName, pAge) {
  return {
    name: pName,
    age: pAge,
    displayInfo: function(){
      document.write("Имя:" + this.name + " возраст " + this.age + "<br/>");
    },
    driveCar: function(car){
      document.write(this.name + " ведет машину " + car.name + "<br/>");
    }
  };
};
function creareCar (mName, mYear){
  return{
    name: mName,
    year: mYear
  };
};
var tom = createUser("Том", 26);
tom.displayInfo();
var bently = creareCar("Бентли", 2004);
tom.driveCar(bently);