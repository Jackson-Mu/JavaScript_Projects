function bmiCalculator (weight, height) {
    var weight= prompt("Hey could you provide me your weight in Kilograms?  ");
    var height= prompt("and Your height in Meters?  ");
    var bmi; 
    bmi= (weight)/height^2
    
   
    if (bmi>24.9){
        alert(  "Your BMI is: " + bmi + " You are overweight.");
        
   
    }
    
     if(bmi<18.5){
         alert("Your BMI is: " + bmi +  " You are Underweight.");
     }
     else {
         alert( "Your BMI is:  " + bmi  + " Cool, you are on normal BMI range");
     }
    
    
    return bmi
    
}





