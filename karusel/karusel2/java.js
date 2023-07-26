let a  = document.querySelector('#underline_line')
son= 0
let b = document.querySelector('.scan_design')
let c = document.querySelector('.brutalism_design')
let e = document.querySelector('.industrial_design')
b.onclick =function(event){
son = 0
let d  = document.querySelector('.scan')
a.style.marginLeft = son +'px'
d.src = 'scan.webp'
console.log(event.target.getAttribute('son0'))
}

c.onclick =function(event){
son = 327
let d  = document.querySelector('.scan')
a.style.marginLeft =  son +'px'
d.src = 'brutalism.jpg'
console.log(event.target.getAttribute('son1'))

}
e.onclick = function(event){
son = 625
let d  = document.querySelector('.scan')
a.style.marginLeft =  son +'px'
d.src = 'industrial.jpg'
console.log(event.target.getAttribute('son2'))

}


let d  = 0
let f = document.querySelector('.ten_five');
let son1  = f.innerHTML;
function onbesh(){
 let  i =    setTimeout(()=>{
d++
f.innerHTML = d
onbesh()
},100)
if(d==son1){
    clearTimeout(i)
}
}
onbesh()

let i  = 0
let l = document.querySelector('.five_zero');
let son2  = l.innerHTML;
function onbesh2(){
 let  p = setTimeout(()=>{
i++
l.innerHTML = i
onbesh2()
},100)
if(i==son2){
    clearTimeout(p)
}
}
onbesh2()

let s  = 0
let q = document.querySelector('.ten_five2');
let son3  = q.innerHTML;
function onbesh3(){
 let  p = setTimeout(()=>{
s++
q.innerHTML = s
onbesh3()
},400)
if(s==son3){
    clearTimeout(p)
}
}
onbesh3()

let x  = 0
let z = document.querySelector('.five_zero2');
let son4  = z.innerHTML;
function onbesh4(){
 let  p = setTimeout(()=>{
x++
z.innerHTML = x
onbesh4()
},100)
if(x==son4){
    clearTimeout(p)
}
}
onbesh4()