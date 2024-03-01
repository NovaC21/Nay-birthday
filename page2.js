import { Nay } from "../userData.js";

const letter = document.getElementById('letter');
const faEnvelope = document.getElementById('btn')
const toUMyLove = document.getElementById('toUMyLove');
const line = document.getElementById('line')
const TML = document.getElementById('TML')

// localStorage.clear()
console.log(localStorage.getItem('herLetter'))






letter.addEventListener('click',(e)=>{
e.preventDefault();
setTimeout(()=>{
  toUMyLove.textContent = 'รู้ไว้ว่าเนย์ยังเป็นที่รักเสมอนะ จากรุ่ง'
}, 20000)


line.style.display = 'none'
letter.style.display = 'none'
TML.style.opacity = '1'
TML.style.display = 'flex'
toUMyLove.textContent = localStorage.getItem('herLetter')

})