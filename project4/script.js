// let elem1 = document.querySelector ('#elem1');
// let elemImg = document.querySelector ('#elem1 img');

// elem1.addEventListener ('mousemove', function(dets){

//     elemImg.style.left = dets.x +'px';
//     elemImg.style.top = dets.y +'px';
    
// });
// elem1.addEventListener ('mouseenter' ,  function (){
//     elemImg.style.opacity = '1';

// });
// elem1.addEventListener ('mouseleave' , function (){

//     elemImg.style.opacity = '0';
// });

let elem = document.querySelectorAll ('.element');

elem.forEach(function (val){

 val.addEventListener ('mouseenter', function (){
    val.childNodes[3].style.opacity = '1';
    // val.style.backgroundColor = 'red';

 });
 val.addEventListener ('mouseleave', function (){
    val.childNodes[3].style.opacity = '0';
 });
 val.addEventListener ('mousemove', function (dets){
    val.childNodes[3].style.left = dets.x + 'px';
 });
            
});