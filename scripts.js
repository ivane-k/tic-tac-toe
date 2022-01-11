const Player = (symbol) => {
    const getSymbol = () => symbol;
    return {getSymbol}
} 


const board = (() => {
    const grid = document.querySelector('.grid');
    const end = document.querySelector("#modal");
    const message = document.querySelector("#message");
    const playAgainButton = document.querySelector("#playAgain");

    let gameBoard = ['', '', '',
                     '', '', '',
                     '', '', ''];
    let changePlayer = true;
    const player1 = Player('X');
    const x = player1.getSymbol();
    const player2 = Player('O');
    const o = player2.getSymbol();

    playAgainButton.addEventListener('click', () => {
        end.style.display = 'none';
        location.reload();
    })

    const play = () => {
        grid.addEventListener('click', function(e) {
            if (e.target && e.target.className == 'square') {
                if (changePlayer === true) {
                    let id = e.target.id
                    gameBoard[id] = x
                    e.target.textContent = x
                    e.target.classList.add('pink')
                    changePlayer = false;
                }
                else if (changePlayer === false) {
                    let id = e.target.id
                    gameBoard[id] = o
                    e.target.textContent = o
                    e.target.classList.add('yellow')
                    changePlayer = true;
                }
            }   
            game.checkScore();
        });
    }
    play()
    return {gameBoard, x, o, end, message}
})()


const game = (() => {
    const x = board.x;
    const o = board.o;
    const end = board.end;
    const message = board.message;

    const gameOver = (result) => {
        end.style.display = "block";
        if (result === 'tie') {
            message.textContent = "It's a tie!";
        }
        else {
            message.textContent = `Player ${result} Won!`;
        }
    }

    const checkScore = () => {
        if (board.gameBoard[0] === x && board.gameBoard[1] === x && board.gameBoard[2] === x ||
            board.gameBoard[3] === x && board.gameBoard[4] === x && board.gameBoard[5] === x ||
            board.gameBoard[6] === x && board.gameBoard[7] === x && board.gameBoard[8] === x ||
            board.gameBoard[0] === x && board.gameBoard[3] === x && board.gameBoard[6] === x ||
            board.gameBoard[1] === x && board.gameBoard[4] === x && board.gameBoard[7] === x ||
            board.gameBoard[2] === x && board.gameBoard[5] === x && board.gameBoard[8] === x ||
            board.gameBoard[0] === x && board.gameBoard[4] === x && board.gameBoard[8] === x ||
            board.gameBoard[2] === x && board.gameBoard[4] === x && board.gameBoard[6] === x)
            {
            gameOver(x)
        }
        else if (board.gameBoard[0] === o && board.gameBoard[1] === o && board.gameBoard[2] === o ||
            board.gameBoard[3] === o && board.gameBoard[4] === o && board.gameBoard[5] === o ||
            board.gameBoard[6] === o && board.gameBoard[7] === o && board.gameBoard[8] === o ||
            board.gameBoard[0] === o && board.gameBoard[3] === o && board.gameBoard[6] === o ||
            board.gameBoard[1] === o && board.gameBoard[4] === o && board.gameBoard[7] === o ||
            board.gameBoard[2] === o && board.gameBoard[5] === o && board.gameBoard[8] === o ||
            board.gameBoard[0] === o && board.gameBoard[4] === o && board.gameBoard[8] === o ||
            board.gameBoard[2] === o && board.gameBoard[4] === o && board.gameBoard[6] === o)
            {
            gameOver(o)
        }
        else if (!board.gameBoard.includes('')) {
            gameOver('tie')
        } 
    }   
    return {checkScore}
})()

