function calculateagain(){
    document.getElementById("result").innerHTML = '';
}

function calculate(){

    let calculation = "";
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;   
    //alert(weight);
    //alert(height);
    if (weight === '' || weight <= 0 || weight === '' || height <= 0) {
        if(weight === '' || height === ''){
            document.getElementById("result").innerHTML = "Please enter some values"; 
        }
        else{
            document.getElementById("result").innerHTML = "Negative Values or zero are not Allowed";
        }
        
    }
    else{
        //calculation
        height /= 100; // change into metre
        height *= height; // calculate height * height
        bmi = weight/height; 
        bmi = bmi.toFixed(2);
        //alert(typeof(bmi));
        if (bmi < 18.5) {
            calculation = "Your BMI is " + bmi + " which means " + "you are underweight";
        } 
        else if (bmi >= 18.5 && bmi <= 24.9) {
            calculation = "Your BMI is " + bmi + " which means " + "you are healthy";
        } 
        else if (bmi >= 25 && bmi <= 29.9) {
            calculation = "Your BMI is " + bmi + " which means " + "you are overweight";
        } 
        else if (bmi >= 30 && bmi <= 34.9) {
            calculation = "Your BMI is " + bmi + " which means " + "you are obese";
        }   
        else if (bmi >= 35) {
        calculation = "Your BMI is " + bmi + " which means " + "you are extremely obese";
        }

        document.getElementById("result").innerHTML = calculation;
    }
    
}