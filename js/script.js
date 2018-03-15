'use strict';

$(function () {
    function userList() {

        let names = ['Armen Gevorgyan', 'Gurgen Surenyan', 'Levon Levonyan', 'Armine Sahakyan', 'Hermine Gareginyan'],
            text = '',
            txtArea = $('#txt'),
            start = txtArea.prop('selectionStart'),
            end = txtArea.prop('selectionStart');
            $('#box').addClass('block');

        function eventBind() {
            txtArea.on('click ', function (e) {
                currentPosition();
                e.preventDefault();
            });
            txtArea.on('keydown', function (e) {
                if (e.keyCode === 37) {
                    console.log(txtArea.prop('selectionStart'));
                } else if (e.keyCode === 39) {
                    console.log(txtArea.prop('selectionStart'));
                }
            });
        }

        function currentPosition() {
            let txtAreaVal = $('#txt').val();
            if (start >= 0 && start === end) {
                if (txtAreaVal.match(/[@]/g)) {
                    for (let i = 0; i < names.length; i++) {
                        text += names[i] + "<br>";
                    }
                    $('#box').append(text).removeClass('block');
                } else {
                    $('#box').addClass('block');
                }
            }
        }
        eventBind();
    }
    userList();
});
