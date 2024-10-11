
window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}

// BMI calulator Button
function calculateBmi() {
    const height = document.querySelector('#height').value;
    const width = document.querySelector('#width').value;
    const result = document.querySelector('#result');

    // validate the input field
    if(!height || isNaN(height) || height < 0) {

        result.innerText = "Please provide valid height";
        
    }else if(!width || isNaN(width) || width < 0) {
        result.innerText = "Please provide valid width";
    }
    
    
}