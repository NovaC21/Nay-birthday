import { Nay } from "../userData.js";

const faKey = document.getElementById('keyOne');
const nameOfThree = document.getElementById('nameOfThree');
const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')
const text3 = document.getElementById('text3')
const inputHint = document.getElementsByClassName('input-hint')
const btnCheck = document.getElementById('btn-check');



btnCheck.addEventListener('click', (e)=>{
  e.preventDefault();
toCheckLogin()
});

function toCheckLogin() {
  for(let i = 0; i<3; i++) {
  text1.value !== Nay.herName && text2.value !== Nay.herNameByMe && text3.value !== Nay.iCallHer 
  ? inputHint[i].style.display = 'flex' 
  : window.location.replace('page1.html')}
 
}







faKey.addEventListener('click', (e)=>{
  e.preventDefault();
  toShowHidden()
})


function toShowHidden() {
  nameOfThree.style.display = 'flex'
  faKey.style.display = 'none'
}
