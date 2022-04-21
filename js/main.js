let star=document.getElementById("star");
let moon=document.getElementById("moon");
let mountain3=document.getElementById("mountain3");
let mountain4=document.getElementById("mountain4");
let river=document.getElementById("river");
let boat=document.getElementById("boat6");
let mountain5=document.getElementById("mountain7");
let nouvil=document.querySelector('.nouvil');
let cover=document.querySelector('.cover')
window.onscroll=function(){
    let value=scrollY;
    star.style.left= value +'px';
    moon.style.top= value*3+'px';
    mountain3.style.top= value*1.5+'px';
    mountain4.style.top= value*2 +'px';
    river.style.top= value*2+'px';
    boat.style.left= value*5+'px'; 
    boat.style.top= value*1.5+'px'; 

       mountain5.style.top= value+'px';
if(scrollY<=62){
           nouvil.style.fontSize= value+'px';
           nouvil.style.postion= 'fixed';

}
if(scrollY>=192){
cover.style.background='linear-gradient(#084298,#dee2e6)'
}
else{
    cover.style.background='linear-gradient(#15013b,#580656)'

}
}
