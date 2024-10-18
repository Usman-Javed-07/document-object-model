// 4 pillars 

// seleceting an element 
// changing html
// changing css
// add event listner



// let a = document.querySelector('h1') ;
// a.innerHTML = 'good by pakistan';

// a.style.backgroundColor = 'black';
// a.style.color = 'red';


// a.addEventListener('click', function(){
//     //    console.log('hii');
//     a.innerHTML = 'hope you well come again ';
//     a.style.color = '#fff'
//     a.style.backgroundColor = "red";
// });



// bulb 

let bulb = document.querySelector ('.bulb');
let btn = document.querySelector ('button');
let flag = 0;
btn.addEventListener ('click', function (){
  if (flag === 0) {  
bulb.style.backgroundColor = 'yellow';
btn.innerHTML = 'OFF';
flag = 1;
  }
  else {
    bulb.style.backgroundColor = '#fff';
btn.innerHTML = 'ON';
flag = 0;
  }
});