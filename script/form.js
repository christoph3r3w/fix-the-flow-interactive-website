
var abort = document.querySelector(".abort");
// let background = document.getElementsByClassName('background')[0];

var formBtn = document.getElementById("submit");

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
let background = document.querySelector('section:nth-of-type(1)');
let pointer = document.getElementById('cursor');



if (background && pointer) {
    
    background.addEventListener('mouseenter',mouse);

function mouse(){
    pointer.classList.add('follow')
    // console.log('in');
    background.addEventListener('mousemove',(e)=>{
        pointer.style.top = e.pageY + 'px';
        pointer.style.left = e.pageX + 'px';   
        // console.log('yes')
    } )   
    };
    
background.addEventListener('mouseleave',()=>{
    pointer.classList.remove('follow')
    // console.log('out')
});
   
}



