'use strict';

$(function () {
    function user_list() {

        let names = ['Armen Gevorgyan', 'Gurgen Surenyan', 'Levon Levonyan', 'Armine Sahakyan', 'Hermine Gareginyan'];
        let text = '';

        $('#box').addClass('block');
        $('#txt').on('keyup', function (e) {
            e.preventDefault();

            if (this.value.match(/[@]/)) {
                for (let i = 0; i < names.length; i++) {
                    text += names[i] + "<br>";
                }
                $('#box').append(text).removeClass('block');
            } else {
                $('#box').addClass('block');
                this.value = '';
            }
        });
    }

    user_list();
});

