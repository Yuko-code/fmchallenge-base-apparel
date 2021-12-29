const form=document.getElementById('email-form');
const email=document.getElementById('email');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
   checkInputs();
})

function checkInputs(){
    const emailValue=email.value.trim();
    /*
    if(emailValue ===''){
        showError();
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)){
        showSuccess();
    }else{
       // showError();
        console.log('nope')
    }
    */
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)){
        showSuccess();
    }else if(emailValue ===''){
        showError();
    }
    else{
        showError();
    }


}
/*
function reset(){
    const small=document.querySelector('small');
    const errorIcon=document.querySelector('#error-icon');
    const border=document.querySelector('#email');
    small.classList.add('noShow');
    small.innerText="";
    small.style.color="";
    errorIcon.classList.add('noShow');
    border.classList.remove('error-border');
}
*/
function showError(){
    const small=document.querySelector('small');
    const errorIcon=document.querySelector('#error-icon');
    const border=document.querySelector('#email');
    small.classList.remove('noShow');
    small.innerText="Please provide a valid email";
    small.style.color="hsl(0, 93%, 68%)";
    errorIcon.classList.remove('noShow');
    border.classList.add('error-border');
}
function showSuccess(){
    const small=document.querySelector('small');
    const errorIcon=document.querySelector('#error-icon');
    const border=document.querySelector('#email');
    small.classList.remove('noShow');
    small.innerText="Thank you!";
    small.style.color="hsl(0, 6%, 24%)";
    errorIcon.classList.add('noShow');
    border.classList.remove('error-border');
    email.value=''
    form.ariaExpanded;


}