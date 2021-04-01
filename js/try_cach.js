// try {
//     console.log('Начинаем работу');
//     console.log(a);
//     console.log('result');

// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);

//     console.log(`Мы получили ошибку: ${error.name}`);

// }

// console.log('A budu rabotat dalshe..');

let json = '{"id":2}';

try {
    let user = JSON.parse(json);
    console.log(user);
    if (!user.name) {
        throw new Error('В этих данных нет имени');
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`Мы получили ошибку: ${error.name}`)

} finally {
    console.log('А я выполньюсь всегда')
}
console.log('A budu rabotat dalshe..')