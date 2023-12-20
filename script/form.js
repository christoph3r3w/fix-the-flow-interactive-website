var abort = document.querySelector(".abort");
// let background = document.getElementsByClassName('background')[0];
var formBtn = document.getElementById("submit");
let background = document.querySelector('.glass');
let pointer = document.getElementById('cursor');
const layDescribe = document.querySelector('section.layout-description');
const describeText = document.querySelectorAll('[description-text]');

if (formBtn) {
    var dialog = document.querySelector("dialog");
    formBtn.addEventListener('click',show);

    function show(){
        console.log('yes');
        dialog.showModal(); 
        //return(this)
    };
    console.log('Function executed on this page.');
}

 


// dialog.addEventListener('close',(e)=>{
//     console.log('yes')
// });



if (background && pointer) {
    
    background.addEventListener('mouseenter',mouse);

    function mouse(){
        pointer.classList.add('follow')
        // console.log('in');
        background.addEventListener('mousemove',(e)=>{
            pointer.style.setProperty('--y', e.pageY);
            pointer.style.setProperty('--x', e.pageX);
            // console.log('yes')
        } )   
    };
    
background.addEventListener('mouseleave',()=>{
    pointer.classList.remove('follow')
    // console.log('out')
});
   
}



