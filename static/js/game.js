'use strict'

let game = {
    /**
     * функция вызывает проверку статуса игры
     * , получает поле на котором происходит клик
     * вызывает функцию написания символа и функцию проверки на выигрыш
     *
     */
    getCellWithSymbol() {

        let cellAll = document.querySelectorAll('td');
        for (let i = 0; i < cellAll.length; i++) {
            cellAll[i].addEventListener('click', function (event) {
                data.arrayMan.push([event.target.dataset.x, event.target.dataset.y])
                if (getVerifyStatus()) {
                    game.renderSymbol(event);
                    // win.checkWhoWon();
                }
            });
        }

    },

        /**
     * Функция получает координа активной клетки
     * вызывает проверку  заполнения клетки
     * вызывает функции занесения нужного символа в массив
     * и вывода в таблицу
     *
     * @param {*} event
     */
    renderSymbol(event) {
        let dataX = +event.target.dataset.x;
        let dataY = +event.target.dataset.y;

        if (this.isCellEmpty(dataX, dataY)) {
            // this.addInArray(dataX, dataY);
            this.rederInCell(event);
        }
    },

    /**
     * функция проверяет пустая ли клетка поля
     * @param {} dataX
     * @param {*} dataY
     */
    isCellEmpty(dataX, dataY) {
        return data.arrayValue[dataX][dataY] === '';
    },
    /**
     * функция выводит нужный символ в клетку игрового поля
     * @param {} event
     */
    rederInCell(event) {
        let gameCell = document.querySelectorAll('td');
        event.target.innerHTML = '<img src="static/img/man_1.png" alt="">';

    },


}