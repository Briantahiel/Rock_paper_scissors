const message = document.querySelector('.message');
const score = document.querySelector('.score');
const options = document.querySelectorAll('img');
const winnerScores = [0,0];

// It adds an evenlistener to every option
for ( let i = 0 ; i < options.length ; i++){
    options[i].addEventListener('click', play);
}

function play(){
    let player = this.alt;
    console.log(player)
    //It selects a number between 0 and less than 1
    let computer = Math.random();

    //if computerSelection is less than .34, computer selects Rock
    if (computer < 0.35){
        computer = 'Rock';
    } else if (computer <= 0.65){
        computer = 'Paper';
    } else {
        computer = 'Scissors';
    }
    
    // It compares both results
    let result = winner(player, computer);

    // It shows the score
    if (result === 'Player'){
        result += ' wins!!!';
    //It updates it
        winnerScores[0]++;
    }

    if (result === 'Computer'){
        result += ' wins!!!';
        winnerScores[1]++;
    }

    if (result === 'Draw'){
        result += '. It\'s a tie!!!'
    }
    score.innerHTML = 'Player:  ' + winnerScores[0]+ '  Computer:  ' + winnerScores[1] + ' ';
    messenger('Player: ' + player + ' Computer: ' + computer + '<br>' + result);
}

/* A function that takes a parameter and sets the innerHTML of the message element to the parameter. */
function messenger(selectionMessage){
    message.innerHTML = selectionMessage;
}

function winner(player, computer){
    if (player === computer){
        return 'Draw';
    }

    if (player === 'Rock'){
        if(computer === 'Paper'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Paper'){
        if (computer === 'Scissors'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Scissors'){
        if (computer === 'Rock'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}