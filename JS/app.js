' use strict '
// these command will apply on the all shops
let workHours = ['6 Am' , ' 7 Am' , ' 8 Am' , '9 Am' , '10 Am' , ' 11 Am' , ' 12 Pm' , ' 1 Pm' , ' 2 Pm' , ' 3 Pm' , ' 4 Pm', '5 pm', '6 Pm' , ' 7 Pm',]

function random(min , max){
  return Math.floor (Math.random()*(max-min+1)+min);
}

let seattle = {
  name:'Seattle',
  MinCust:23,
  MaxCust:65,
  AvgCookies:6.3,
  eachHourCust :[],
  eachHourCookies:[],
  total:0, 

//create method for object
calcEachHourCust:function(){
  for(let i=0 ; i<workHours.length;i++){
this.eachHourCust.push(Math.random(23,65))
   }
  },

// create another method for object
calcEachHourCookies:function(){
  for(let i=0; i<workHours.length;i++){
this.eachHourCookies.push(Math.floor(this.eachHourCust[i]*this.AvgCookies));
// to add total 
this.total+=this.eachHourCookies[i] 
  }
},

/*// randerd as a method 
function render(){
// get element by id :- 
let SalmonCookies = document.getElementById('SalmonCookies');
// we need to make a name 
let shopName = document.createElement('h3');
//appended to salmoncookies
SalmonCookies.appendChild(shopName);
// we need to add text 
shopName.textContent = this.location;

// Now we need to make unorderlist 
let unorderlist= document.createElement('ul');
// we need to appended
SalmonCookies.appendChild(unorderlist);

//for avarge we nedd loop

for(let i=0;i<workHours.length; i++)
// we need now to create li and appended it also give it a ontent
let listItem = document.createElement('li');
unorderlist.appendChild(listItem);
listItem.textContent = `rahaf`

// we need to add total 
let totalItem = document.createElement('li')
unorderlist.appendChild(totalItem);
totalItem.textContent= ` total : ${this.total} cookies `
}
}*/
render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  let shopName = document.createElement('h3');
  parent.appendChild(shopName);
  // give text content
  shopName.textContent = this.name;
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
  for(let i =0;i<workHours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${workHours[i]}: ${this.eachHourCookies[i]} cookies`
  }
  // create total elemnt:
  let totalItem = document.createElement('li');
  unorderedList.appendChild(totalItem);
  totalItem.textContent=`total: ${this.total} cookies`;
}
}

// for every fuction we need to call it
seattle.calcEachHourCust();
seattle.calcEachHourCookies();
seattle.render();

//******************************************** */

let Tokyo = {
  name:'Tokyo',
  MinCust:11,
  MaxCust:8,
  AvgCookies:3.7,
  eachHourCust :[],
  eachHourCookies:[],
  total:0, 

//create method for object
calcEachHourCust:function(){
  for(let i=0 ; i<workHours.length;i++){
// push eachhourcust:-
this.eachHourCust.push(Math.random(11,8))
   }
  },

// create another method for object
calcEachHourCookies:function(){
  for(let i=0; i<workHours.length;i++){
this.eachHourCookies.push(Math.floor(this.eachHourCust[i]*this.AvgCookies));
// to add total 
this.total+=this.eachHourCookies[i] 
  }
},

render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  let shopName = document.createElement('h3');
  parent.appendChild(shopName);
  // give text content
  shopName.textContent = this.name;
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
  for(let i =0;i<workHours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${workHours[i]}: ${this.eachHourCookies[i]} cookies`
  }
  // create total elemnt:
  let totalItem = document.createElement('li');
  unorderedList.appendChild(totalItem);
  totalItem.textContent=`total: ${this.total} cookies`;
}
}

// for every fuction we need to call it
Tokyo.calcEachHourCust();
Tokyo.calcEachHourCookies();
Tokyo.render();

/****************************************************** */

let Dubai = {
  name:'Dubai',
  MinCust:3,
  MaxCust:24,
  AvgCookies:1.2,
  eachHourCust :[],
  eachHourCookies:[],
  total:0, 

//create method for object
calcEachHourCust:function(){
  for(let i=0 ; i<workHours.length;i++){
// push eachhourcust:-
this.eachHourCust.push(Math.random(3,24))
   }
  },

// create another method for object
calcEachHourCookies:function(){
  for(let i=0; i<workHours.length;i++){
this.eachHourCookies.push(Math.floor(this.eachHourCust[i]*this.AvgCookies));
// to add total 
this.total+=this.eachHourCookies[i] 
  }
},

render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  let shopName = document.createElement('h3');
  parent.appendChild(shopName);
  // give text content
  shopName.textContent = this.name;
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
  for(let i =0;i<workHours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${workHours[i]}: ${this.eachHourCookies[i]} cookies`
  }
  // create total elemnt:
  let totalItem = document.createElement('li');
  unorderedList.appendChild(totalItem);
  totalItem.textContent=`total: ${this.total} cookies`;
}
}

// for every fuction we need to call it
Dubai.calcEachHourCust();
Dubai.calcEachHourCookies();
Dubai.render();

/***************************************************** */

let Paris = {
  name:'Paris',
  MinCust:20,
  MaxCust:38,
  AvgCookies:2.3,
  eachHourCust :[],
  eachHourCookies:[],
  total:0, 

//create method for object
calcEachHourCust:function(){
  for(let i=0 ; i<workHours.length;i++){
// push eachhourcust:-
this.eachHourCust.push(Math.random(20,38));
   }
  },

// create another method for object
calcEachHourCookies:function(){
  for(let i=0; i<workHours.length;i++){
this.eachHourCookies.push(Math.floor(this.eachHourCust[i]*this.AvgCookies));
// to add total 
this.total+=this.eachHourCookies[i] 
  }
},

render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  let shopName = document.createElement('h3');
  parent.appendChild(shopName);
  // give text content
  shopName.textContent = this.name;
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
  for(let i =0;i<workHours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${workHours[i]}: ${this.eachHourCookies[i]} cookies`
  }
  // create total elemnt:
  let totalItem = document.createElement('li');
  unorderedList.appendChild(totalItem);
  totalItem.textContent=`total: ${this.total} cookies`;
}
}

// for every fuction we need to call it
Paris.calcEachHourCust();
Paris.calcEachHourCookies();
Paris.render();

/**************************************************************** */

let Lima = {
  name:'Lima',
  MinCust:2,
  MaxCust:16,
  AvgCookies:4.6,
  eachHourCust :[],
  eachHourCookies:[],
  total:0,

//create method for object
calcEachHourCust:function(){
  for(let i=0 ; i<workHours.length;i++){
 // push eachhourcust:-
this.eachHourCust.push(Math.random(2,16))
   }
  },

// create another method for object
calcEachHourCookies:function(){
  for(let i=0; i<workHours.length;i++){
this.eachHourCookies.push(Math.floor(this.eachHourCust[i]*this.AvgCookies));
// to add total 
this.total+=this.eachHourCookies[i] 
  }
},
render:function(){
  // get the parent element by id:
  let parent= document.getElementById('parent');
  console.log(parent);
  let shopName = document.createElement('h3');
  parent.appendChild(shopName);
  // give text content
  shopName.textContent = this.name;
  // created an element 
  let unorderedList=document.createElement('ul');
  // append element to parent
  parent.appendChild(unorderedList);
  for(let i =0;i<workHours.length;i++){
    // create li
    let listItem=document.createElement('li');
    // append li
    unorderedList.appendChild(listItem);
    // give text content
    listItem.textContent = `${workHours[i]}: ${this.eachHourCookies[i]} cookies`
  }
  // create total elemnt:
  let totalItem = document.createElement('li');
  unorderedList.appendChild(totalItem);
  totalItem.textContent=`total: ${this.total} cookies`;
}
}

Lima.calcEachHourCust();
Lima.calcEachHourCookies();
Lima.render();










