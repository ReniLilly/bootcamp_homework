function tellFortune(number_of_childern,patner_name,geo_location,title){
    console.log("You will be "+title+"in"+geo_location+",and married to "+patner_name+"with"+number_of_childern+"kids")
}
tellFortune(2,"Raj","Tampa","Teacher");
tellFortune(3,"Jo","NewJersey","Business");
tellFortune(3,"Benny","Edison","Engineer");


function calculateDogAge(puppyage,conversionRate) {
  var  dogage=puppyage*conversionRate;
console.log("your doggie is"+dogage +"years old in dog year")
}
calculateDogAge(2,8)
calculateDogAge(5,9)
calculateDogAge(4,10)


function calculateSupply(age,amount_per_day){
 var max_age=85;
 var rest_of_the_life=max_age-age;
 amount_needed=rest_of_the_life *365*amount_per_day;
 console.log("You will need"+amount_needed+"to last you until the ripe old age of"+max_age);
}

calculateSupply(40,2);
calculateSupply(35,3);
calculateSupply(25,4);
calculateSupply(35,2.45687);


function calCircumference(radius){
    var r=30;
    var Circumference_of_the_circle=2*3.14*r;
console.log("The circumference is"+Circumference_of_the_circle);
}

calCircumference(30);

function calArea(radius){
    var r=30;
    var Area_of_the_circle=3.14*30*30;
    console.log("The area is"+Area_of_the_circle);
}

calArea(30);

function celsiusToFahrenheit(celsius){
    var Fahrenheit=(celsius*9/5)+32;
    console.log("celsius is "+Fahrenheit);
}

celsiusToFahrenheit(45);

function fahrenheitToCelsius(fahrenheit){
     var celsius=(fahrenheit-32)*5/9;
     console.log("fahrenheit is" +celsius);
}

fahrenheitToCelsius(65);

function circleValues_Perimeter(radius){
    var r=25;
    var perimeter_of_the_circle=2*3.14*r;
    console.log("perimeter is"+perimeter_of_the_circle);
}

circleValues_Perimeter(25);





 
