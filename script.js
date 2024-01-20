var crs=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove" ,function(dest){
    crs.style.left=dest.x+30+"px"
    crs.style.top=dest.y+"px"
    blur.style.left=dest.x-250+"px"
    blur.style.top=dest.y-250+"px"
})
// this is for nav bar select 
var h4All=document.querySelectorAll("#nav h4")
h4All.forEach(function(elem){
 elem.addEventListener("mouseenter" ,function() {
    crs.style.scale=3;
    crs.style.border="1px solid #fff";
    crs.style.backgroundColor="transparent";
 })

 elem.addEventListener("mouseleave" ,function() {
    crs.style.scale=1;
    crs.style.border="0px solid #95C11E";
    crs.style.backgroundColor="#95C11E";
 })

})
//  this for footer
var footerr=document.querySelectorAll("#footer h1")
footerr.forEach(function(elem){
 elem.addEventListener("mouseenter" ,function() {
    crs.style.scale=3;
    crs.style.border="1px solid #fff";
    crs.style.backgroundColor="transparent";
 })

 elem.addEventListener("mouseleave" ,function() {
    crs.style.scale=1;
    crs.style.border="0px solid #95C11E";
    crs.style.backgroundColor="#95C11E";
 })

})



//gsap js liberry for animations
gsap.to("#nav" ,{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5 ,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
        // markers:true
    }
})

gsap.to("#main" , {
    backgroundColor:"#000" ,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body" ,
        markers:true,
        start:"top -25%",
        end:"top -70%" ,
         scrub:2
    }
})

// about us animation
gsap.from("#about-us img, #about-us-in" , {
    y:90,
    opacaity:0,
    duration :1 ,
    
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body" ,
        // markers:true,
        start:"top 60%" ,
        end:"top 58% ",
        scrub :2
    }
})
// card Animation
gsap.from(".card" , {
    scale:0.8,
    opacaity:0,
    duration :1 ,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body" ,
        // markers:true,
        start:"top 70%" ,
        end:"top 65% ",
        scrub :1
    }
})

// Animtion for scroller
gsap.from("#colon1" , {
    y:-70,
    x:-70 , 
    scrollTrigger:{
        trigger:"#colon1" ,
        scroller:"body" ,
        // markers:true ,
        start :"top 55%" ,
        end :"top 45%" ,
        scrub:4
    }
}) 
gsap.from("#colon2" , {
    y:70,
    x:70 , 
    scrollTrigger:{
        trigger:"#colon1" ,
        scroller:"body" ,
        // markers:true ,
        start :"top 55%" ,
        end :"top 45%" ,
        scrub:4
    }
}) 

gsap.from("#page4 h1" , {
    y:50 ,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page4 h1" ,
        scroller:"body" ,
        // markers:true ,
        start :"top 75%" ,
        end :"top 70%" ,
        scrub:3
    }
})

