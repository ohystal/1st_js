// console.log("privet mir");
// console.log(123);
// console.log('Hello ' + 'World');
// // alert('Hello world alert')


// // устаревший вариант но var можно вызвать через log раньше чем объявили переменную
// var a = 532
// a = 342
// console.log(a);
// // простой вариант создания переменной
// let b = 344
// b = 322
// console.log(b);
// // константы нельзя менять
// const c = 123
// console.log(c);


// Number

// Infinity - математическая бесконечность

// console.log(Infinity);

//NaN - ошибка в вычислении
// console.log(NaN**0);

//bigint - для увеличения отображаемого числа
// console.log(12412421591258215152n);

// string - строчный тип данных

// let str1 ="ilya"
// let str2 ='Ohystal'
// let str3 = `nemoguuje ${str1}`
// console.log(str1);
// console.log(str2);
// console.log(str3);

// // boolean - логический тип данных,  принимает 2 зачения true и false 
// let onChek = true
// let offChek = false
//console.log(1 < 34);

// // null - значение отсутствия значения
// let a=null
// console.log(a);

// // undefined - значение не определено
// let a;
// console.log(a);

// // typeof
// console.log(typeof 123);
// console.log(typeof "Ilya");
// console.log(typeof true);
// console.log(typeof 1000n);
// console.log(typeof undefined);
// console.log(typeof null);  



// // Homework
// let a=4
// console.log(a);
// let str = '4 oct'
// console.log(str);
// let str2 = ('Добро ' + 'Пожаловать'+' На курс'+' Илья')
// console.log(str2);

// alert("27 "+"march "+"2024")

// document.getElementById("one").innerHTML='1 <br>'
// document.getElementById("one").innerHTML+='2 <br>'
// document.getElementById("one").innerHTML+='3'

// document.write("qwe") для старых проектов, добавляет элемент в конец страницы

// document.querySelector('#first').innerHTML='Привет'

// document.querySelector('p').innerHTML="hakuna matata"

// let inp =document.querySelector('.text')
// let btn =document.querySelector('.check')
// let div =document.querySelector('.out')
// btn.onclick = function(){
//     let e = +inp.value
//     // console.log('вы нажали на кнопку');
//  div.innerHTML +=`${e}<br>`;
// }

// let myhappy = prompt('когда у тебя день рождения') //- появляется окно как в алерт но с таблицей ввода
// console.log(myhappy);

// if(myhappy == 21){
//     alert("yes")
// }else{
//     alert('no')
// }



// МАКЕТ if
// if(условие){
//     действие которое выпонится в случае истинности усовия  
// }


let a=prompt("введите число")
if(a > 100){
    document.getElementById("first").innerHTML=a
}else{console.log(a);}


