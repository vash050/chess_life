'use strict'


window.addEventListener('load', function () {
    const gameBoard = new Board();
    gameBoard.renderGameBoard();
    game.getCellWithSymbol();
    // resetGame();

});

let data = {

    status: "game",
    symbol: '',

    arrayValue: [
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', ''],
    ],
/**
 * функция очищяет массив
 */
    clearArray() {
        for(let value of this.arrayValue) {
            value.splice(0, 3, '', '', '');
        }
    }
}

// document.addEventListener('click', function (e) {
//     let el = e.target;
//     el.innerHTML = '<img src="static/img/man_1.png" alt="">'
//
//     console.log(el)
//     console.log(e.target.dataset.x, e.target.dataset.y);
// });
