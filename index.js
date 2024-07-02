// Masalalar    Massivlarga oid

//1-masala
// function removeElement(arr) {
//   let res = [];
//   res = arr.map(function (value) {});
// }

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
function removeGapPlace(str) {
  let res = str.split(" ");
  res = res.trim(" ");
  return res.join(" ");
}
console.log(removeGapPlace("   salom bola la r  "));
