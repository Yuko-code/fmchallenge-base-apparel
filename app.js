const form=document.getElementById('email-form');
const email=document.getElementById('email');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    //checkInputs();
    console.log("submitted");
})

function checkInputs(){
    const emailValue=email.value.trim();
}

