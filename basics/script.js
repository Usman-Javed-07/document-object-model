// 4 pillars 

// seleceting an element 
// changing html
// changing css
// add event listner



let a = document.querySelector('h1') ;
a.innerHTML = 'good by pakistan';

a.style.backgroundColor = 'black';
a.style.color = 'red';


a.addEventListener('click', function(){
    //    console.log('hii');
    a.innerHTML = 'hope you well come again ';
    a.style.color = '#fff'
    a.style.backgroundColor = "red";
});