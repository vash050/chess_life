'use strict'


window.addEventListener('load', function () {
    const gameBoard = new Board();
    gameBoard.renderGameBoard();
    // game.getCellWithSymbol();
    // resetGame();

});

document.addEventListener('click', function (e) {
    // const man = document.createElement('a');
    // man.innerHTML
    let el = e.target;
    el.innerHTML = '<img src="static/img/man_1.png" alt="">'

    console.log(el)
    console.log(e.target.dataset.x, e.target.dataset.y);
});
