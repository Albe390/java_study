// let options = {
//     width: 1385,
//     height: 768,
//     background: 'red',
//     font: {
//         zise: '20px',
//         color: '#f5f5ff5',
//     }
// };
// // console.log(JSON.stringify(options));
// console.log(JSON.parse(JSON.stringify(options)));


let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    // request.open(method,url,async,login,pass);
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // request.send(body);
    request.send();

    //status
    // statustext
    // responseText - response
    //readyState

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);


            inputUsd.value = inputRub.value / data.usd;

        } else {
            inputUsd.value = ' Что то пошло не так';
        }
    });

});