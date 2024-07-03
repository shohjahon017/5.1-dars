//1-masala
//Scope qamrov degan manoni bildiradi.Scope-element(deklaration)korinadigan
// va boshqa kodga kirish mumkin bo`lgan hududni bildiradi.JSda 3xil scope mavjud
//1.Global scope
//2.Function/Local scope
//3.Block scope
// var a = 1;
// function outer() {
//   var b = 2;
//   function inner() {
//     var c = 3;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }
//   inner();
// }
// outer();
//Bu yerda a o`zgaruvchi global scopeda e`lon qilingan.b va c o`zgaruvchilar function scopeda joylashgan.
//function ichidagi bni  tashqarida  ishlatib bo1lmaydi.Lekin bu yerda declarationlar blokni ichida bo`lgani uchun consolda chiqadi.

//2-masala
//Hoisting - bu JSning (default xususiyatlaidan) biri bo`lib, unda o`garuvchilar va funksiyalar deklaratsiyasi avtomatik ravishda ularning qamrov qismining eng yuqorisiga ko`taradi.
// console.log(x);
// var x = 5;
// console.log(x);
//Bu yerda birinchi console undefined chiqadi, chunki  console o`zgaruvchidan oldin e`lon qilingan.
//Ikkinchisida esa consolega 5 chiqadi, chunki console o`zgaruvchidan keyin e`lon qilingan.

//3-masala
//Temporal Dead Zone - qisqartmasi TDZ.JSda let va const o`zgaruvchilarga murojat qilib bo`lmaydigan hudud yoki vaqt Temporal Dead zone  bo`ladi.
//Bu intervalda murojat qilishga harakat qilinganda ReferenceError yuzaga keladi
// console.log(y);
// let y = 10;
// console.log(y);
// Birinchi consoleda  o`zgaruvchi let yoki const bilan elon qilinganligi sabali, xatolik chiqaradi, xatolikda elon qilishdan ishlatolmisan degan javob chiqadi.
//Ikkinchi consoleda 10  chiqadi

// Masalalar    Massivlarga oid
//1-masala
// function removeElement(arr) {
//   let res = arr.split(" ").filter(function (value) {
//     return value.length >= 5;
//   });
//   let res1 = res.map(function (value) {
//     return value[0].toUpperCase() + value.slice(1);
//   });
//   return res1.join(" ");
// }
// console.log(removeElement("salom xayr hello"));

//2-masala
// function findElement(talaba) {
//   let res = talaba.find(function (value) {
//     return res;
//   });
//   return res;
// }
// let talaba = {
//   name: "Ali",
//   year: 23,
// };
// console.log(findElement(talaba));

//3-masala
// const arr = [
//   { name: "stul", price: 50 },
//   { name: "stol", grade: 200 },
//   { name: "eshik", grade: 180 },
// ];
// function findPrice(arr) {
//   let res = arr.filter(function (value) {
//     return value > 100;
//   });
//   return res.toString();
// }
// console.log(findPrice(arr));

//4-masala
// function someElement(arr) {
//   let res = arr.every(function (value) {
//     if (value > 0) {
//       console.log("Barcha sonlar musbat");
//     } else {
//       console.log("Musbat bo`lmagan sonlar bor");
//     }
//     return value;
//   });
//   return res;
// }
// console.log(someElement([1, 5, 6, 9, -5]));

//5-masala
// function concatElement(arr) {
//   let res = [];
//   arr.forEach(function (value) {
//     res.push(value);
//   });

//   return res.map(function (value) {
//     return value ** 2;
//   });
// }
// console.log(concatElement([1, 2, 5, 9, 6]));

//6-masala
// const xodimlar = findSalary([
//   { name: "Islom", salary: 2500 },
//   { name: "Aziz", salary: 1200 },
//   { name: "Bobur", salary: 2100 },
// ]);
// function findSalary(xodimlar) {
//   let res = xodimlar.filter(function (value) {
//     return value.salary > 2000;
//   });

//   res.map(function (element) {
//     return element.salary * 10;
//   });
//   return res;
// }
// console.log(findSalary(xodimlar));

// //7-masala
// const talaba = findStudent([
//   { name: "Asadbek", age: 18, ball: 72 },
//   { name: "Aziz", age: 17, ball: 85 },
//   { name: "Karim", age: 20, ball: 80 },
// ]);
// function findStudent(talaba) {
//   let res = talaba.find(function (value) {
//     return value.ball > 80;
//   });
//   // res.split(" ").filter(function (value) {
//   //   return value.ball > 80;
//   // });
//   res = res.map(function (element) {
//     return element.name.toUpperCase();
//   });
//   return res;
// }
// console.log(findStudent(talaba));

//Yozuvlarga oid.
//1-masala
// function toUpperCaseElement(str) {
//   let res = str.toUpperCase();
//   return res;
// }
// console.log(toUpperCaseElement("salom maktabim"));

//2-masala
// function findElement(str) {
//   return str.includes("salom");
// }
// console.log(findElement("salom dunyo"));

//3-masala
// function replaceElement(str) {
//   return str.replace("JavaScript", "JS");
// }
// console.log(
//   replaceElement(
//     "JavaScript odatda HTML va CSS kabi boshqa veb-texnologiyalar bilan birgalikda ishlatiladi."
//   )
// );

//4-masala
// function reverseElement(str) {
//   let res = [];
//   for (let i = str.length - 1; i > 0; i--) {
//     res.push(str[i]);
//   }
//   return res.join("");
// }
// console.log(reverseElement("Men 11-sinf o`quvchisiman"));

//5-masala
// function removeGapPlace(str) {
//   let res = str.trim();

//   return res;
// }
// console.log(removeGapPlace("   salom bolalar  "));
