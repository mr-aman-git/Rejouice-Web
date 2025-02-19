let page1Content= document.querySelector(".page1-content");

let mouse= document.querySelector(".mouse");

page1Content.addEventListener("mousemove", function(event){
    gsap.to(mouse, {
        x:event.x,
        y:event.y
    })
});

page1Content.addEventListener("mouseenter", function(){
    gsap.to(mouse, {
        scale:1,
    })
})

page1Content.addEventListener("mouseleave", function(){
    gsap.to(mouse, {
        scale:0,
    })
})