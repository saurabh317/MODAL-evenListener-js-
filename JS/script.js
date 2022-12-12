'use strict';
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const showmodal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
// opening of the box by clicking on the buttons***************

for(let i = 0; i< showmodal.length; i++){
    showmodal[i].addEventListener('click' , function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

// closing using the close button***************

closeModal.addEventListener('click',function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

// closing using the escape key***************

document.addEventListener('keydown',function(event){
    if(event.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
} 
});

// closing by simply clicking anywhere on the screen***************

overlay.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

});



