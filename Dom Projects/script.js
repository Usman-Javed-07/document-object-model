let isstatus = document.querySelector('h5');
let addfriend = document.querySelector('#add');
// let removefriend = document.querySelector('#remove');

let check = 0; 


addfriend.addEventListener ('click', function(){
    if (check === 0) {
isstatus.innerHTML = 'Friends';
isstatus.style.color = 'green';
addfriend.innerHTML = 'Remove Friend';
addfriend.style.backgroundColor = '#dadada';
addfriend.style.color = '#111';
check = 1;
    }
    else {
            isstatus.innerHTML = 'Stranger';
            isstatus.style.color = 'red';
            addfriend.innerHTML = 'Add Friend';
            addfriend.style.backgroundColor = 'cadetblue';
            addfriend.style.color = '#fff';
            check = 0;
        }
        
});

