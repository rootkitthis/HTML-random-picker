function pickForMe() {
    let userInput = document.getElementById('inputBox').value;
    let options = userInput.split(',');
    let trimOptions= options.map(option => option.trim());


    if (trimOptions.length > 1 && trimOptions[0] !== ''){
        let randomIndex = Math.floor(Math.random() * options.length);
        let randomOption = options[randomIndex];



        document.getElementById('theChoice').innerText = `The choice has been made: ${randomOption}`;
    } else {
        document.getElementById('theChoice').innerText = 'Please enter two or more options to choose from!!!!';

  }
}

function clearButton(){
    document.getElementById('inputBox').value = '';

    document.getElementById('theChoice').innerText='';

}