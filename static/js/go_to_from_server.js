'use strict'

function sendToServer() {
    let button_send = document.querySelector('.send');
    button_send.addEventListener('click', function () {
        console.log(data.arrayMan);
        let result = '';
        let xhr = new XMLHttpRequest();
        let url = 'http://127.0.0.1:5000/v1';

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

         xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {

                    // Print received data from server
                    result = this.responseText;
                    console.log(result)
                }
            };

         let data_j = JSON.stringify({ "man_coord": data.arrayMan,});
         xhr.send(data_j);
    })
}
