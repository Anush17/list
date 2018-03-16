'use strict';

$(function () {

    //Creating User List function, to see users when typing `@` sign
    function userList() {

        let names = ['Armen Gevorgyan', 'Gurgen Surenyan', 'Armine Sahakyan', 'Hermine Gareginyan'],
            text = '',
            txtArea = $('#txt'),
            list = $('#list'),
            box = $('#box'),
            start = txtArea.prop('selectionStart');

        //Binding Events and getting left and right arrow positions
        function eventBind() {

            txtArea.on('keydown', function (e) {
                let keyCode = e.keyCode;
                if (keyCode === 37) {
                    console.log(txtArea.prop('selectionStart'));
                } else if (keyCode === 39) {
                    console.log(txtArea.prop('selectionStart'));
                } else {
                    list.empty();
                    //this function is for getting current position of cursor
                    if (start >= 0) {
                        checkSign();
                    }
                }
            });
        }

        //filling data into list
        function fillData() {
            box.append(text).removeClass('disNone');
            for (let i = 0; i < names.length; i++) {
                list.append('<li id="' + names[i] + '">' + names[i] + '<br>' + '</li>');
                $("#list li").click(function (e) {
                    if (e.target && e.target.nodeName === "LI") {
                        txtArea.val(txtArea.val() + $(this).attr('id') + ' ');
                        box.addClass('disNone');
                    }
                });
            }
            list.each(function () {
                $(this).children().slice(0, 3).hide();
            });
        }

        //checking if have a `@` sign or not
        function checkSign() {
            let lastChar = txtArea.val().slice(-1);
            if (lastChar === '@') {
                fillData();
            } else {
                box.addClass('disNone');
            }
        }

        eventBind();
    }

    userList();
});