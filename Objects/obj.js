var country = {
 
  name: "Швейцария",
  languages: ["немецкий", "французский", "итальянский"],
  capital:{
   
      name: "Берн",
      population: 126598
  },
  cities: [
      { name: "Цюрих", population: 378884},
      { name: "Женева", population: 188634},
      { name: "Базель", population: 164937}
  ]
};

document.write("<h3>Официальные языки Швейцарии</h3>");
for(var i=0; i < country.languages.length; i++)
  document.write(country.languages[i] + "<br/>");
   

document.write("<h3>Города Швейцарии</h3>");
for(var i=0; i < country.cities.length; i++)
  document.write(country.cities[i].name + "<br/>");