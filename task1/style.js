
const shell = document.querySelector('.shell')
const box = document.querySelectorAll('.shell .box')
const ctrl = document.querySelector('.nav .left_ .ctrl')
// console.log(ctrl)
ctrl.addEventListener('click', function () {
  if (ctrl.checked === false) {
    shell.style.visibility = 'visible'
    shell.style.width = '120px'
    for (let i = 0; i < box.length; i++) {
      box[i].style.left = 0
    }
  }
  if (ctrl.checked === true) {
    shell.style.visibility = 'hidden'
    shell.style.width = '50px'
    for (let i = 0; i < box.length; i++) {
      box[i].style.left = '30px'
    }
  }
})




const picks = document.querySelectorAll('.picks div')
// console.log(picks)
picks[0].addEventListener('mouseenter', function () {
  picks[0].classList.toggle('over1')
  picks[1].classList.toggle('over2')
  picks[2].classList.toggle('over3')
  picks[3].classList.toggle('over4')
  picks[4].classList.toggle('over5')
})
picks[0].addEventListener('mouseleave', function () {
  picks[0].classList.toggle('over1')
  picks[1].classList.toggle('over2')
  picks[2].classList.toggle('over3')
  picks[3].classList.toggle('over4')
  picks[4].classList.toggle('over5')
})
picks[1].addEventListener('mouseenter', function () {
  picks[0].classList.toggle('over2')
  picks[1].classList.toggle('over1')
  picks[2].classList.toggle('over2')
  picks[3].classList.toggle('over3')
  picks[4].classList.toggle('over4')
})
picks[1].addEventListener('mouseleave', function () {
  picks[0].classList.toggle('over2')
  picks[1].classList.toggle('over1')
  picks[2].classList.toggle('over2')
  picks[3].classList.toggle('over3')
  picks[4].classList.toggle('over4')
})
picks[2].addEventListener('mouseenter', function () {
  picks[0].classList.toggle('over3')
  picks[1].classList.toggle('over2')
  picks[2].classList.toggle('over1')
  picks[3].classList.toggle('over2')
  picks[4].classList.toggle('over3')
})
picks[2].addEventListener('mouseleave', function () {
  picks[0].classList.toggle('over3')
  picks[1].classList.toggle('over2')
  picks[2].classList.toggle('over1')
  picks[3].classList.toggle('over2')
  picks[4].classList.toggle('over3')
})
picks[3].addEventListener('mouseenter', function () {
  picks[0].classList.toggle('over4')
  picks[1].classList.toggle('over3')
  picks[2].classList.toggle('over2')
  picks[3].classList.toggle('over1')
  picks[4].classList.toggle('over2')
})
picks[3].addEventListener('mouseleave', function () {
  picks[0].classList.toggle('over4')
  picks[1].classList.toggle('over3')
  picks[2].classList.toggle('over2')
  picks[3].classList.toggle('over1')
  picks[4].classList.toggle('over2')
})
picks[4].addEventListener('mouseenter', function () {
  picks[0].classList.toggle('over5')
  picks[1].classList.toggle('over4')
  picks[2].classList.toggle('over3')
  picks[3].classList.toggle('over2')
  picks[4].classList.toggle('over1')
})
picks[4].addEventListener('mouseleave', function () {
  picks[0].classList.toggle('over5')
  picks[1].classList.toggle('over4')
  picks[2].classList.toggle('over3')
  picks[3].classList.toggle('over2')
  picks[4].classList.toggle('over1')
})


const arrow_L = document.querySelector('.BR .icon-cc-arrow-left-circle')
const arrow_R = document.querySelector('.BR .icon-cc-arrow-right-circle')
const BR = document.querySelector('.BR')
arrow_L.addEventListener('click', function () {
  arrow_L.style.visibility = 'hidden'
  arrow_R.style.visibility = 'visible'
  BR.style.left = '15px'

})
arrow_R.addEventListener('click', function () {
  arrow_L.style.visibility = 'visible'
  arrow_R.style.visibility = 'hidden'
  BR.style.left = '-15px'
})


// --------------Recommended-----------

const leftarr_2 = document.querySelector('.rcm i:nth-child(1)')
const rightarr_2 = document.querySelector('.rcm i:nth-child(2)')
const ul_2 = document.querySelector('.rcm div ul')
// console.log(ul);
let count2 = 0
if (count2 === 0) {
  ul_2.style.left = 0
  rightarr_2.style.visibility = 'visible'
  leftarr_2.style.visibility = 'hidden'
}


rightarr_2.addEventListener('click', function () {
  count2++
  if (count2 === 1) {
    ul_2.style.left = '-25%'
    leftarr_2.style.visibility = 'visible'
  }
  if (count2 === 2) {
    ul_2.style.left = '-50%'
    leftarr_2.style.visibility = 'visible'
  }
  if (count2 === 3) {
    rightarr_2.style.visibility = 'hidden'
    leftarr_2.style.visibility = 'visible'
    ul_2.style.left = '-75%'
  }
})

leftarr_2.addEventListener('click', function () {
  count2--
  if (count2 === 2) {
    ul_2.style.left = '-50%'
    rightarr_2.style.visibility = 'visible'
  }
  if (count2 === 1) {
    ul_2.style.left = '-25%'
    rightarr_2.style.visibility = 'visible'
  }
  if (count2 === 0) {
    ul_2.style.left = '0'
    rightarr_2.style.visibility = 'visible'
    leftarr_2.style.visibility = 'hidden'
  }
})




// --------gallery---------
const leftarr_1 = document.querySelector('.gallery i:nth-child(1)')
const rightarr_1 = document.querySelector('.gallery i:nth-child(2)')
const ul_1 = document.querySelector('.gallery div ul')
// console.log(ul);
let count1 = 0
if (count1 === 0) {
  ul_1.style.left = 0
  rightarr_1.style.visibility = 'visible'
  leftarr_1.style.visibility = 'hidden'
}


rightarr_1.addEventListener('click', function () {
  count1++
  if (count1 === 1) {
    ul_1.style.left = '-56%'
    leftarr_1.style.visibility = 'visible'
  }
  if (count1 === 2) {
    ul_1.style.left = '-112%'
    leftarr_1.style.visibility = 'visible'
  }
  if (count1 === 3) {
    rightarr_1.style.visibility = 'hidden'
    leftarr_1.style.visibility = 'visible'
    ul_1.style.left = '-168%'
  }
})

leftarr_1.addEventListener('click', function () {
  count1--
  if (count1 === 2) {
    ul_1.style.left = '-112%'
    rightarr_1.style.visibility = 'visible'
  }
  if (count1 === 1) {
    ul_1.style.left = '-56%'
    rightarr_1.style.visibility = 'visible'
  }
  if (count1 === 0) {
    ul_1.style.left = '0'
    rightarr_1.style.visibility = 'visible'
    leftarr_1.style.visibility = 'hidden'
  }
})




// ---------lastpic-----------
const leftarr = document.querySelector('.lastpic i:nth-child(1)')
const rightarr = document.querySelector('.lastpic i:nth-child(2)')
const ul = document.querySelector('.lastpic ul')
console.log(ul);
let cnt = 0
if (cnt === 0) {
  ul.style.left = 0
  rightarr.style.visibility = 'visible'
  leftarr.style.visibility = 'hidden'
}


rightarr.addEventListener('click', function () {
  cnt++
  if (cnt === 1) {
    ul.style.left = '-33%'
    leftarr.style.visibility = 'visible'
  }
  if (cnt === 2) {
    ul.style.left = '-66%'
    leftarr.style.visibility = 'visible'
  }
  if (cnt === 3) {
    rightarr.style.visibility = 'hidden'
    leftarr.style.visibility = 'visible'
    ul.style.left = '-101%'
  }
})

leftarr.addEventListener('click', function () {
  cnt--
  if (cnt === 2) {
    ul.style.left = '-66%'
    rightarr.style.visibility = 'visible'
  }
  if (cnt === 1) {
    ul.style.left = '-33%'
    rightarr.style.visibility = 'visible'
  }
  if (cnt === 0) {
    ul.style.left = '0'
    rightarr.style.visibility = 'visible'
    leftarr.style.visibility = 'hidden'
  }
})