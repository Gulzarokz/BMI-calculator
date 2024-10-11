
window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}

function calculateBmi() {
    const height = document.querySelector('#height');
    const width = document.querySelector('#width');
    console.log(document.querySelector('#height').value);
    
    
}