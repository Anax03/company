const hamburger = document.querySelector('.hambureger');
const hmbrBtn= document.querySelector('.fontAwsoneicons .fa-bars');
const SearchBtn= document.querySelector('.fontAwsoneicons .fa-search');
const SearchBtnBurger=document.querySelector('.hamb2 .fa-search');
const cancelBtnBurger=document.querySelector('.hamb2 .fa-times');
const inputText=document.querySelector('#text');
const littleUl=document.querySelector('#LittleUl');
const fatherA=document.querySelector('#fatherA')
let flag=true ;

let flag2=true;


hide();
inputText.style.display='none';
littleUl.style.display='none';



fatherA.addEventListener('click',(e)=>{
    if(flag && littleUl.style.display==='block'){
        littleUl.style.display='none';
        flag=true; 
    }
    
    if(flag){
        littleUl.style.display='block';
        flag=false;
    }
    else {
        littleUl.style.display='none';
        flag=true; 
    }
})
SearchBtn.addEventListener('click',(e)=>{
    
    show();
    inputText.style.display='block';
    
})

hmbrBtn.addEventListener('click',(e)=>{
    
    show();
    
})

cancelBtnBurger.addEventListener('click',(e)=>{
   
    hide();
})

SearchBtnBurger.addEventListener('click',(e)=>{
    
    if(flag2===true &&inputText.style.display==='block'){
        inputText.style.display='block';
        flag2=false;
    }
    if(flag2){
        inputText.style.display='block';
        flag2=false;
    }
    else {
        inputText.style.display='none';
        flag2=true; 
    }
})


function show(){
    hamburger.style.display='flex';
}

function hide(){
    hamburger.style.display='none';
}