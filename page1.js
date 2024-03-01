import { Nay } from "../userData.js";
import { ToTalkToHer } from "../conver.js";


const textie = document.getElementById('textie');
const next = document.getElementById('next')
const ageInput = document.querySelectorAll('.ageInput')[0]
const age = document.getElementById('age')
const screenCThing = document.getElementsByClassName('screenCThing')[0];
const currentThing = document.getElementById('currentThing');
const wishContain = document.getElementsByClassName('wishContain')[0];
const wishTo = document.getElementById('wishTo')


  function handle(i,e) {
    let clicked = false;
    if(e&&!clicked){
      textie.textContent = ToTalkToHer[i][`word${i+1 }`]
      clicked = true
      console.log(clicked)
      console.log(i)
    }
    
  }
 
  
  
  let i = 0
  next.addEventListener('click',(e)=>{
    e.preventDefault()
    handle(i,e)
    
    i++
   
    if(i==4){
     ageInput.style.display = 'flex';
    } else if (i==5){
      ageInput.style.display = 'none';
    } else if (i==6 || i==12 ) {
      screenCThing.style.display = 'flex'
    } else if(i==7 || i==13) {
      screenCThing.style.display = 'none'
    } else if(i==17){
      wishContain.style.display = 'flex'
    } else if(i==18){
      wishContain.style.display = 'none'
    } else if(i==22){
      window.location.replace('page2.html')
    }
     return i
  })

  


  wishContain.addEventListener('focusout',(e)=>{
    if(e) {
       localStorage.setItem('herLetter',wishTo.value)
        console.log(localStorage.getItem('herLetter'))
    }
    

    
   
  })
  // age.addEventListener('mouseout',(e)=>{
  //   e.preventDefault()
    
  //   const ten = age.value
  //   Nay.age = ten
  //   console.log(ToTalkToHer[4])
    
    
  // })

  // currentThing.addEventListener('focusout',(e)=>{
  //   e.preventDefault()
  //   // console.log(Nay.age)
  //   Nay.currentThing = currentThing.value
  //   // console.log(Nay.currentThing)
  // })


    
     
    
 












// textie.textContent = Nay.toTalkToHer[1].word2

    
  
   

    




// document.addEventListener('click', (e)=>{
//   e.preventDefault();
//   let clicked = 0;
//   if(e){
//     clicked = 1;
//     line.forEach((lines, index) =>{
//       setTimeout(()=>{
//         lines.style.opacity = '1'
        
//       }, index * 1000)
      
//     })
//     clicked = 0
//     console.log(clicked)
//   } 
  
//   else if(clicked != 0) {

//   }
  

// })