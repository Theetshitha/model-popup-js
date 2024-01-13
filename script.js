//     var div3=document.createElement("div");
//     div3.id="model";
//     div3.className='model'
//     document.body.append(div3);
//     model.style.backgroundColor='white'

//     var img1=document.createElement('img');
//     img1.id="img1";
//     img1.className='img1'
//     img1.src='hero1.jpeg'
//     document.body.append(img1);
//     // model.style.backgroundColor='white'

    
//     var div1=document.createElement("div");
//     div1.id="main";
//     div3.append(div1);
//     main.style.backgroundColor='white'
    
//     var h1=document.createElement("h1");
//     h1.innerText="Model Project";
//     div1.append(h1);
    
    
//     var btn1=document.createElement("button");
//     btn1.id="btn";
//     btn1.innerText="open model";
//     div1.append(btn1);
    
//     var div2=document.createElement("div");
//     div2.id="inner";
//     div3.append(div2);
//     inner.style.backgroundColor='red'

//     var btn2=document.createElement("h1");
//     btn2.id="btn";
//     btn2.innerText="X";
//     div2.append(btn2);

//     var h2=document.createElement("h1");
//     h2.innerText="Model Content";
//     div2.append(h2);

//     div2.style.display='none';   

// var a=document.getElementsByClassName('model');
// function click(){
//     div2.style.display='block';
//     div1.style.display='none';
//     a.classList.add('bg')
    
// }

// btn1.addEventListener('click',click);


// function close(){
//     div1.style.display='block';
//     div2.style.display='none'
//     a.classList.remove('bg')
   
// }

// btn2.addEventListener('click',close);


var div1= document.createElement("div");
div1.className="container";
document.body.append(div1);




var img1 = document.createElement("img");

img1.src='hero1.jpeg';
div1.append(img1)
img1.className="pic";

var div2= document.createElement("div");
   div2.setAttribute('class','container2');
div1.append(div2)



let head=document.createElement("h1");
let span=document.createElement("p");
    span.innerText = 'x'
    span.addEventListener('click',closing)
head.innerText="Model project"
div2.append(span)
div2.append(head)

var btn1=document.createElement("button");
div2.append(btn1)
btn1.className="btn";
btn1.innerText="OPEN MODEL";

btn1.addEventListener('click',change)

function change(){
    btn1.style.display = 'none';
    head.innerText="Model content";
    span.style.display = 'block';
    div1.classList.add("overlap");



}

function closing(){
    btn1.style.display = 'block';
    head.innerText="Model Project";
      span.style.display = 'none';
      div1.classList.remove("overlap");
}