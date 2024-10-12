
window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}

// BMI calulator Button
function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    // validate the input field

    if(!height || isNaN(height) || height < 0) {
    

        result.innerText = "Please provide valid height";
        
    }
   else if (!weight || isNaN(weight) || weight < 0) {
    
         result.innerText = "Please provide valid weight";
        
    }

    // Calculate the BMI using the formula
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // using the if else if to verify the required condition

    if (bmi < 18.5) 
    {
        result.innerText = `You are under Weigth: ${bmi}`;
    }

    else if (bmi >= 18.5 && bmi < 24.9) 
    {
        result.innerText = `You are normal Weight: ${bmi}`;
    }
    else if (bmi >= 25 && bmi < 29.9)
     {
        result.innerText = `You are OverWeight: ${bmi}`;
    }
    else if (bmi >= 30 && bmi < 34.9) 
    {
        result.innerText = `obesity: ${bmi}`;
    }
    else 
    {
        result.innerText = ` Extrem obesity: ${bmi}`;
    }

    document.getElementById("weight").value = '';
    document.getElementById("height").value = '';

    }
    
           
        
    
