// import {inputsValidation} from './src/formValidation'

// const { SingleEntryPlugin } = require("webpack")

// const productsList = [
//     {code: "01", name: "Chleb wieloziarnisty", price: 5.75, category: "Pieczywo"},
//     {code: "02", name: "Kajzerka", price: 0.75, category: "Pieczywo"},
//     {code: "03", name: "Mleko UHT 1,5%", price: 2.75, category: "Nabiał"},
//     {code: "04", name: "Ser kozi", price: 6, category: "Nabiał"},
//     {code: "05", name: "aŁosoś norweski", price: 27.99, category: "Ryby"}
// ];

//
// // task 1
// function getProductsByCategory(list, category) {
// return list.filter(item => item.category === category)
// }
// //
// console.log("Task 1:", getProductsByCategory(productsList, "Pieczywo"));
//
// //task 2
// function getPriceByCode(list, code) {
//     list.forEach(element => {
//         if (element.code === code)
//         console.log (element.price)
//     });
// }

//
// //task 3
// function getCategories(list) {
//    return list.map(item => item.category)
// }
// // getCategories(productsList)
//
// console.log("Task 3:", getCategories(productsList));
//

// const otherList = [true, true, true, false, false, true];
//
// function getNumberOfTrue(list) {
//    return list.filter(item => item === true).length
//
// }
//
// console.log("number of true values is: ", getNumberOfTrue(otherList));
//
// // =======================================================================================================
// // In what order would those functions be executed?
//
// const functionWithFive = () => console.log(5);
//
// setTimeout(() => functionWithFive());
//
// console.log(1);
//
// setTimeout(() => console.log(2), 2000);
//
// setTimeout(() => console.log(3), 1000);
//
// console.log(4);

// const otherList = [4, 2, 1, 3, 2];
//
// function sortDesc(list) {
//
//     return list.sort((a, b) => b-a)
// }
//
// console.log("Descending:", sortDesc(otherList));

// const otherList = [
//     { name: "szparagi", type: "warzywa", quantity: 5 },
//     { name: "bananay", type: "owoce", quantity: 0 },
//     { name: "kozy", type: "mięso", quantity: 23 },
//     { name: "wiśnie", type: "owoce", quantity: 5 },
//     { name: "ryby", type: "mieśo", quantity: 22 }
// ];
//
// // return the list WITHOUT given element:
// function removeElement(list, name) {
//     const filtered = list.filter(item =>{
//         return item.name !== name
//     })
//
//     return filtered;
// }
//
// console.log("Lista bez elementu 'kozy':", removeElement(otherList, "kozy"));

//
// const places = [
//     { name: 'Restaurant', location: 'Poznan' },
//     { name: 'Gym', location: 'Krakow' },
//     { name: 'Museum', location: 'Poznan' }
// ]
//
//
// const searchLocation = (arr, place) => {
// return arr.filter(({location}) =>location === place)
// }
//  console.log (searchLocation(places, 'Poznan'))

// Napisz funkcję, która zwróci id obiektu dla warunku name = Gym

// const array = [
//     {name: 'ala', age: 22, yo: ['ee', 'oo', 'rr']},
//     {name: 'olek', age: 25, yo: ['oo', 'jj', 'kk']}
// ]
//
// const age = array.reduce((aku, item) => {
//     return [...aku,
//         item.age > 22]
// }, [])
//
//
// console.log('wynik', age)

// const date = {match: '1651744228685'}

//
// const getDate = (string) => {
//     const dateObj = new Date(+string)
//     const day = dateObj.getDay() + 1
//     const month = dateObj.getMonth() + 1
//     const year = dateObj.getFullYear()
//     const hour = dateObj.getHours()
//     const minute = dateObj.getMinutes()
//     return `${day}. ${month} ${year}  ${hour} ${minute}`
// }

// const typy = {1: 'Wpływy - inne', 2: 'Wydatki - zakupy', 3: 'Wpływy - wynagrodzenie', 4: 'Wydatki - inne'}

// const lista = [{date: '2022-11-12', amount: -231.56, description: 'Biedronka 13', balance: 4337.25, type: 2},
// {date: '2022-11-12', amount: -31.56, description: 'PayU Spółka Akcyjna', balance: 4572.18, type: 4},
// {date: '2022-11-12', amount: 2137.69, description: 'Wynagrodzenie z tytułu Umowy o Pracę', balance: 2420.47, type: 3},
// {date: '2022-11-10', amount: -136, description: 'Lidl', balance: 2555.55, type: 2},
// {date: '2022-11-10', amount: 25, description: 'Zrzutka na prezent dla Grażyny', balance: 2847.66, type: 1},

// {date: '2022-11-09', amount: -111.11, description: 'Biedronka 13', balance: 3000, type: 2},
// {date: '2022-11-09', amount: -78.33, description: 'PayU Spółka Akcyjna', balance: 3027.51, type: 4}]

// const jeden = {date: '2022-11-09', amount: -78.33, description: 'PayU Spółka Akcyjna', balance: 3027.51, type: 4}

// const filt = lista.map((i)=> {
//     if (i.type === 1) {
//        return i.type = typy[1]
//     }
//     if (i.type === 2) {
//         return i.type = typy[2]
//      }
//      if (i.type === 3) {
//         return i.type = typy[3]
//      }
//      if (i.type === 4) {
//         return i.type = typy[4]
//      }

// })

// const count = filt.reduce((accumulator, value) => {
//   return {...accumulator, [value]: (accumulator[value] || 0) + 1};
// }, {});

// const arr = Object.values(count)

// const emailValue = "ola@wp.pl"
// const regularExpressionEmail =
// /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

// const text = "huj 12ala 2a7ę"

// const lE = /[a-z]/

// /\s/g - spacja
// const litery = /[a-zA-Z0-9]/g

// const cyfry = /\d{2}/g

// console.log(cyfry.test(text))

// ([a-zA-Z]{5})(\d{2})[]

// const obje = {
//    name: "ala"
// }

// const obj2 = JSON.parse(JSON.stringify(obje))

// console.log(obj2 == obje)
const body = document.querySelector("body");

const table = document.querySelector("table");
const btn = document.querySelector("button");
const temp = document.getElementById("tbodtyTemplate");
const td = document.querySelectorAll("td");
console.log("", btn);
const text = "ppyy" 


  const all = temp.content.cloneNode(true);

