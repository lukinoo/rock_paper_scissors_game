const hands = document.querySelectorAll('button');
const fullGame = () => {
    const computerValues = ['rock',
                            'paper',
                            'scissors'];
    const player_score = document.querySelector('.pscore');
    const computer_score = document.querySelector('.cscore');
    const match = document.querySelector('.match-info');
    let pScore = 0, cScore = 0;
    hands.forEach(hand => {
        hand.addEventListener('click', function() {
            const random_num = Math.floor(Math.random() * computerValues.length);
            const computer_choice = computerValues[random_num];
            // gameoption function called here.
            gameOptions(this.className,computer_choice);
        });
    })
    function gameOptions(playerchoice,computerchoice) {
        switch(playerchoice+computerchoice) {
            // player Choice
            case 'rockscissors':
            case 'paperrock':
            case 'scissorspaper':
                match.textContent = `Computer choice is ${computerchoice} Player wins`;
                player_score.textContent = pScore++;
                break;
            // computer options
            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock':
                match.textContent = `Computer choice is ${computerchoice} Computer wins`;
                computer_score.textContent = cScore++;
                break;
            // it's tie
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                match.textContent = `It's tie`;
                break;
        }
    }
}

fullGame();