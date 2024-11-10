let clik = document.querySelectorAll(".box")

document.addEventListener("click" , (e)=>{
       e.stopPropagation()
        document.querySelector(".box1").innerHTML = "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected device"
})

document.addEventListener("click" , (e)=>{
    e.stopPropagation()
    document.querySelector(".box2").innerHTML = "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts."
})
document.addEventListener("click" , (e)=>{
    e.stopPropagation()
    document.querySelector(".box3").innerHTML = "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
})
document.addEventListener("click" , (e)=>{
    e.stopPropagation()
    document.querySelector(".box4").innerHTML = "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
})
document.addEventListener("click" , (e)=>{
    e.stopPropagation()
    document.querySelector(".box5").innerHTML = "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
})
document.addEventListener("click" , (e)=>{
    e.stopPropagation()
    document.querySelector(".box6").innerHTML = "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
})

// clik.a("click" , ()=>{
//     console.log("You are click right box");
    
// })
// console.log(clik);

// ubuntu run
// for i in {1..100}; do echo Hacki ng Naxa $i**21; done && echo hacking compeletec