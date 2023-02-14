'use strict'

class Board {
    constructor() {
        this.table = document.querySelector('.game');
    }


    /**
     * функция создает игровое поле 3 * 3
     * в виде строки
     * @returns{String}
     */
    renderGameBoard() {
        let cell = '';
        let number = 0;
        for (let i = 0; i < 9; i++) {
            cell += "<tr>";
            for (let j = 0; j < 9; j++) {
                cell += `<td data-x="${i}" data-y="${j}">`;
                if ((i === 0) || (j === 0)) {
                    if (number > 8){
                        number = 1;
                    }
                    cell += `${number} `;
                    number += 1;
                }
                cell += `</td>`
            }
            cell += "</tr>";
        }
        this.addBoard(cell);
    }


    /**
     * функция добавляет строку в таблицу
     * @param {*} cell
     */
    addBoard(cell) {
        this.table.insertAdjacentHTML("afterBegin", cell);
    }


}