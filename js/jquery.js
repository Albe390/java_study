$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');

    });
    // $(document).ready('InitPage', function InitPage() {
    //     $("p").text("Структура документа загружена и полностью сформирована, пора действовать!");
    // });
    // $(document).ready(function() {
    //     alert('Структура страницы сформирована, можно приступать!');
    // });
    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');

    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'

        }, 3000);
    });
});

//document.querySelectorAll('.list-item').forEach()
// clasList();
//.addEventListener();
//$.ajax - fetch();
//Animations