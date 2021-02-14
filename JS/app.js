'use strict' 
 
let firstBranch = {
  location: 'Seattle',
  minimum: 23,
  mmaximum: 65,
  avrgeCookies: [],
  avrgCustomer: [],
  workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
  cookiesTotal: 0,
}
function total (){
  for (let i = 0; i < this.workHours.length; i++) {
    this.avrgeCustomer[i] = randomNum(this.minimum, this.mmaximum);
    this.avrgeCookies[i] = 6.3 * this.avrgCustomer[i];
    this.cookiesTotal += this.avrgeCookies[i];
  }
}
function Array1 () {

  for (let i = 0; i < firstBranch.length; i++) {
    firstBranch[i].total();
 }
}
Array1();

let secondBranch = {
  location: 'Tokyo',
  minimum: 3,
  mmaximum: 65,
  avrgeCookies: [],
  avrgCustomer: [],
  workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
  cookiesTotal: 0,
}
function total2 (){
  for (let i = 0; i < this.workHours.length; i++) {
    this.avrgeCustomer[i] = randomNum(this.minimum, this.mmaximum);
    this.avrgeCookies[i] = 1.2 * this.avrgCustomer[i];
    this.cookiesTotal += this.avrgeCookies[i];

  }

}
function Array2 () {
  for (let i = 0; i < secondBranch.length; i++) {
    secondBranch[i].total2();
 }
}
Array2();


let thirdBranch = {
  location: 'Dubai',
  minimum: 11,
  mmaximum: 38,
  avrgeCookies: [],
  avrgCustomer: [],
  workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
  cookiesTotal: 0,
}
function total3 (){
  for (let i = 0; i < this.workHours.length; i++) {
    this.avrgeCustomer[i] = randomNum(this.minimum, this.mmaximum);
    this.avrgeCookies[i] = 3.7 * this.avrgCustomer[i];
    this.cookiesTotal += this.avrgeCookies[i];

  }

}
function Array3 () {
  for (let i = 0; i < thirdBranch.length; i++) {
    thirdBranch[i].total3();
 }
}
Array3();


let forthBranch = {
  location: 'Paris',
  minimum: 20,
  mmaximum: 38,
  avrgeCookies: [],
  avrgCustomer: [],
  workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
  cookiesTotal: 0,
}
function total4 (){
  for (let i = 0; i < this.workHours.length; i++) {
    this.avrgeCustomer[i] = randomNum(this.minimum, this.mmaximum);
    this.avrgeCookies[i] = 2.3* this.avrgCustomer[i];
    this.cookiesTotal += this.avrgeCookies[i];

  }
}
function Array4 () {
  for (let i = 0; i < forthBranch.length; i++) {
    forthBranch[i].tota4();
 }
}
Array4();

let fifthBranch = {
  location: 'Lima',
  minimum: 2,
  mmaximum: 16,
  avrgeCookies: [],
  avrgCustomer: [],
  workHours: ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
  cookiesTotal: 0,
}
function total5 (){
  for (let i = 0; i < this.workHours.length; i++) {
    this.avrgeCustomer[i] = randomNum(this.minimum, this.mmaximum);
    this.avrgeCookies[i] = 4.6* this.avrgCustomer[i];
    this.cookiesTotal += this.avrgeCookies[i];
  }
}
function Array5 () {
  for (let i = 0; i < fifthBranch.length; i++) {
    fifthBranch[i].total5();
 }
}
Array5();



let salmonCookies =document.getElementById('salmonCookies');
for(let i =0 ; i<firstBranch , secondBranch , thirdBranch , 
    forthBranch , fifthBranch.length;i++){
    let title = document.createElement('h2');
    salmonCookies.appendChild(title);

  title.textContent= firstBranch , secondBranch , thirdBranch , forthBranch , fifthBranch[i].location;

  let unorderedList = document.createElement('ul');

  salmonCookies.appendChild(unorderedList);

  for (let r = 0; r < firstBranch , secondBranch , thirdBranch , forthBranch , fifthBranch[i].avrgeCookies.length; r++) {

    let listItem = document.createElement('li');

    unorderedList.appendChild(listItem);

    listItem.textContent= firstBranch , secondBranch , thirdBranch ,
     forthBranch , fifthBranch[i].workHours[r] + ' : ' + 
     firstBranch , secondBranch , thirdBranch , forthBranch , fifthBranch[i].avrgeCookies[r] + ' Cookies' ;


  }

  let allTotal = document.createElement('h3');

  salmonCookies.appendChild();

  allTotal.textContent= firstBranch , secondBranch , thirdBranch , forthBranch , fifthBranch[i].cookiesTotal + ' : Cookies';

}