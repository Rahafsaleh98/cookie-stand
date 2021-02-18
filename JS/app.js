'use strict'
let Clock = ['6 Am', ' 7 Am', ' 8 Am', '9 Am', '10 Am', ' 11 Am', ' 12 Pm', ' 1 Pm', ' 2 Pm', ' 3 Pm', ' 4 Pm', '5 pm', '6 Pm', ' 7 Pm',]

let Shops = [];

function Shop(name, minimum, MaxCust, AverageCookies) {
    this.name = name;
    this.minimum = minimum;
    this.MaxCust = MaxCust;
    this.AverageCookies = AverageCookies;
    this.eachHourCust = [];
    this.eachHourCookies = [];
    this.total = 0;
    Shops.push(this);
}

Shop.prototype.random = function (minimum, MaxCust) {
    return Math.floor(Math.random() * (MaxCust - minimum + 1) + minimum);
}
Shop.prototype.calacEachHourCust = function () {
    for (let i = 0; i < Clock.length; i++) {
        this.eachHourCust.push(this.random(this.minimum, this.MaxCust));
    }
}
Shop.prototype.calceachHourCookies = function () {
    for (let i = 0; i < this.eachHourCust.length; i++) {
        this.eachHourCookies.push(Math.floor(this.AverageCookies * this.eachHourCust[i]));
        this.total += this.eachHourCookies[i];
    }
}

let Seattle = new Shop('Seattle', 23, 65, 6.3);
let Tokyo = new Shop('Tokyo', 3, 24, 1.2);
let Dubai = new Shop('Dubai', 11, 38, 3.7);
let Paris = new Shop('Paris', 20, 38, 2.3);
let Lima = new Shop('Lima', 2, 16, 4.6);




let Salmon = document.getElementById('Cookies');
let table = document.createElement('table');
table.setAttribute("class", "border_class");
Salmon.appendChild(table);
function Headers() {

    let Row1 = document.createElement('tr');
    table.appendChild(Row1);
    let Headers2 = document.createElement('th');
    Row1.appendChild(Headers2);
    Headers2.textContent = 'Shop Name';

    for (let i = 0; i < Clock.length; i++) {
        let headers3 = document.createElement('th');
        Row1.appendChild(headers3);
        headers3.textContent = Clock[i];
    }
    let headers3 = document.createElement('th');
    Row1.appendChild(headers3);
    headers3.textContent = ('Daily Location Total');
}
Headers();


Shop.prototype.body = function () {
    let data = document.createElement('tr');
    table.appendChild(data);

    let row2 = document.createElement('td');
    data.appendChild(row2);
    row2.textContent = (this.name);

    for (let i = 0; i < Clock.length; i++) {
        let content = document.createElement('td');
        content.textContent = this.eachHourCookies[i]
        data.appendChild(content);
    }
    let totalOfEachData = document.createElement('td');
    data.appendChild(totalOfEachData);
    totalOfEachData.textContent = (this.total);
}


for (let i = 0; i < Shops.length; i++) {
    Shops[i].calacEachHourCust();
    Shops[i].calceachHourCookies();
    Shops[i].body();
}



let footer = function () {
    let totalOfAllRows = document.createElement('tr');
    table.appendChild(totalOfAllRows);

    let names = document.createElement('th')
    totalOfAllRows.appendChild(names);
    names.textContent = ('Totals');

    let totalOfTotal = 0;

    for (let i = 0; i < Clock.length; i++) {
        let totalEachHour = 0;

        for (let j = 0; j < Shops.length; j++) {
            totalEachHour += Shops[j].eachHourCookies[i];
            totalOfTotal += Shops[j].eachHourCookies[i];
        }

        let FinalTotal = document.createElement('th');
        totalOfAllRows.appendChild(FinalTotal);
        FinalTotal.textContent = totalEachHour;
    }

    let AllTotals = document.createElement('th');
    totalOfAllRows.appendChild(AllTotals);
    AllTotals.textContent = (totalOfTotal) 
}
footer()


let newShop = document.getElementById('differentShops');
newShop.addEventListener('submit', submitter);
function submitter(event) {
    event.preventDefault();

totalOfAllRows.textContent = ''
let name = event.target.nameField.value;
let min1 = event.target.minimum.value;
let max1 = event.target.maximum.value;
 let avg = event.target.avgOfCookies.value;
let newShops = new Shop(name, min1, max1, avg );

        newShops.calacEachHourCust();
        newShops.calceachHourCookies();
        newShops.footer();

    }

