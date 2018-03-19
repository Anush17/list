'use strict';

$(function () {

    //Creating User List function, to see users when typing `@` sign
    function userList() {

        let names = ['Armen Gevorgyan', 'Gurgen Surenyan', 'Armine Sahakyan', 'Hermine Gareginyan' ],
            text = '',
            txtArea = $('#txt'),
            list = $('#list'),
            box = $('#box'),
            start = txtArea.prop('selectionStart');

        //Binding Events and getting left and right arrow positions
        function eventBind() {

            txtArea.on('keydown', function (e) {
                searchUser($(this), e);
                let keyCode = e.keyCode;
                if (keyCode === 37) {
                    console.log(txtArea.prop('selectionStart'));
                } else if (keyCode === 39) {
                    console.log(txtArea.prop('selectionStart'));
                } else {
                    list.empty();
                    //get current position of cursor
                    if (start >= 0) {
                        checkSign();
                    }
                }
            });
        }

        //fill data into list and mention users
        function fillData() {
            box.append(text).removeClass('disNone');

            function addClickHandler(link, i) {
                link.addEventListener('click', function (e) {
                    txtArea.val(txtArea.val() + $(this).attr('id') + ' ');
                    box.addClass('disNone');
                    e.stopPropagation();
                }, false)
            }

            let li = document.getElementsByTagName('li');
            for (let i = 0, len = names.length; i < len; i++) {
                list.append('<li id="' + names[i] + '">' + names[i] + '<br>' + '</li>');
                addClickHandler(li[i], i);
            }
            list.each(function () {
                $(this).children().slice(0, 2).hide();
            });
        }

        // checking if have a `@` sign or not
        function checkSign() {
            let lastChar = txtArea.val().slice(-1);
            if (lastChar === '@') {
                fillData();
            } else {
                box.addClass('disNone');
            }
        }

        //searching Users from List
        function searchUser(that, eve) {
            // let charCode = String.fromCharCode(eve.keyCode);
            let value = that.val().toLowerCase();
            let splitWord;
            if ((txtArea.val()) === '') {
                console.log('empty');
            } else {
                splitWord = value.split('@')[1];
                splitWord = splitWord.split(' ')[0];
                console.log('splitWord ' + splitWord);
            }
            names.filter(function (item) {
                return item.toLowerCase().indexOf(splitWord) >= -1
            });

        }

        eventBind();
    }

    userList();
});