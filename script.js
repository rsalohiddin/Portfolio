let num =document.querySelectorAll('#num')
let num1 =document.querySelectorAll('#num1')
let num3 =document.querySelectorAll('#num3')
let num4 =document.querySelectorAll('#num4')
let num5 =document.querySelectorAll('#num5')

num.forEach(item=>{
    item.addEventListener('click',()=>{
    let main =document.querySelector('.cont')
    main.style.marginTop=-770+'px'
})
})

num1.forEach(item=>{
    item.addEventListener('click',()=>{
    let main1 =document.querySelector('.cont')
    main1.style.marginTop=0*-770+'px'
})
})


num3.forEach(item=>{
    item.addEventListener('click',()=>{
    let main2 =document.querySelector('.cont')
    main2.style.marginTop=2*-770+'px'
})
})

num4.forEach(item=>{
    item.addEventListener('click',()=>{
    let main2 =document.querySelector('.cont')
    main2.style.marginTop=3*-770+'px'
})
})

num5.forEach(item=>{
    item.addEventListener('click',()=>{
    let main2 =document.querySelector('.cont')
    main2.style.marginTop=4*-770+'px'
})
})

let menu = document.querySelectorAll('.menyu')
let x = document.querySelector('.section6')
menu.forEach(item=>{
    item.addEventListener('click',()=>{
    x.style.display='block'
    x.style.marginLeft=70+'px'
    x.style.zIndex=3
    x.style.opacity=0.9
})
})
let close = document.querySelector('#close')
    close.addEventListener('click',()=>{
    x.style.display='none'
})
let matn = document.querySelectorAll('#matn')
let text = document.querySelector('#text')

matn.forEach(item=>{
    item.addEventListener('click',()=>{
    matn.style.color='white'
    matn.style.color='white'
})
})
     