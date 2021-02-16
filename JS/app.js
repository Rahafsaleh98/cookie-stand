'use strict'

let workHours = ['6 Am' , ' 7 Am' , ' 8 Am' , '9 Am' , '10 Am' , ' 11 Am' , ' 12 Pm' , ' 1 Pm' , ' 2 Pm' , ' 3 Pm' , ' 4 Pm', '5 pm', '6 Pm' , ' 7 Pm',]


function random(min , max){
    return Math.floor (Math.random()*(max-min+1)+min);
  }


function Location(name,MinCust,MaxCust,AvgCookies) {
    this.name=name;
    this.MinCust=MinCust;
    this.MaxCust=MaxCust;
    this.AvgCookies=AvgCookies;
    
}

Location.prototype.calcEachHourCust=function(){
    for(let i=0 ; i<workHours.length;i++){
  this.eachHourCust.push(Math.random(this.MaxCust , this.MaxCust));
     }
    } 

Location.prototype.calcEachHourCookies=function(){
    for(let i=0; i<workHours.length;i++){
        this.eachHourCookies.push(Math.floor(this.eachHourCust[i]*this.AvgCookies));
    }
}

let seattle= NewShop('seattle', 23,65,6.3)
let Tokyo = NewShop('Tokyo',3,24,1.2)
let Dubai = NewShop('Dubai', 11,38,2.3)
let paris = NewShop ('Paris', 20,38,2.3)
let Lima = NewShop('Lima', 2,16,4.6)


Location.calcEachHourCust();
Location.calcEachHourCookies();



// for create table
function runder (){
let Cookies  = document.getElementById('Cookies');
let table = document.createElement('table');
Cookies.appendChild(table);

for(let i=0 ; i<workHours.length ; i++){
let headerRow = document.createElement('th');
table.appendChild(headerRow)
headerRow.textContent=hours[i];
}




}
