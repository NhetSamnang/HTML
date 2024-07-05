const signuplink=document.querySelector('.signupbtn-link');
const signinlink=document.querySelector('.signinbtn-link');
const wrapper=document.querySelector('.wrapper');
signuplink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
})
signinlink.addEventListener('click',()=>{
    wrapper.classList.toggle('active');
})