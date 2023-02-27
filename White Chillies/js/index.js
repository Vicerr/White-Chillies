window.addEventListener('load', ()=>{
    document.body.classList.remove('d-none')
})
const secondaryNav = document.getElementById("navhead")
window.onscroll = function (){
   
    // get offset position 
    if(
        window.scrollY >= document.body.scrollTop + secondaryNav.scrollHeight
        ){
        secondaryNav.classList.add("sticky")
    }
    else{
        secondaryNav.classList.remove("sticky")

    }
}


// open / close  navigation 
    const slideNav = document.querySelector("nav");
    const slideNava = document.querySelector(".innernav");
    const openBtn = document.querySelector(".openNav");
    const closeBtn = document.querySelector(".closeNav");
    const section = document.querySelector("section");
    const dropdown = document.querySelector(".dropdown");
    const dropdownList = document.querySelector(".dropdown-list");



    openBtn.addEventListener("click", () => {
        section.style.filter = "blur(5px)";
        secondaryNav.style.filter = "blur(5px)";
        slideNav.classList.add("slide");
    });
    closeBtn.addEventListener("click", () => {
        slideNav.classList.remove("slide");
        section.style.filter = "blur(0)";
    });
    slideNav.addEventListener('click', event =>{
        if(!slideNava.contains(event.target)){
        slideNav.classList.remove("slide");
        section.style.filter = "blur(0)";
        secondaryNav.style.filter = "blur(0)";

        }
    })

// select link based on page 
const links = document.querySelectorAll(".nav_link");
const currentPage = window.location.href;
links.forEach(link =>{
    if(link.href == currentPage){
        link.setAttribute('aria-current', 'page')
    }
})


dropdown.addEventListener("click", ()=>{
    dropdownList.classList.toggle('slide-dropdown')
})
// // make an item favourite 
// const hearts = document.querySelectorAll(".heart-icon")
// hearts.forEach(heart =>{
//     console.log(heart)
//     heart.addEventListener("click", ()=>{
//         // this.classList.toggle("favourite")
//         console.log("worked")
//     })
// })

























// function validated(){
//     let password = document.getElementById("password").value
//     let email = document.getElementById("email").value
//     let username = document.getElementById("username").value
//    addEventListener("blur", ()=>{
//     if(username.trim() == "" || email.trim() == "" || password.trim() == ""){
//         let formInputs = form.querySelectorAll("input")
//         formInputs.forEach(formInput=>{
//            formInput.style.border = "1px solid red"
//         console.log("no go")
            
//         })
//         return false
//     }else{
//         return true
//     }
//    })
// }
// let form = document.getElementById('form')
// let formInputs = form.querySelectorAll("input")
// formInputs.forEach(formInput=>{
//    var trimmedInput = formInput.value.trim()
//    if(trimmedInput !== ""){
//    console.log( formInput.dataset.placeholder)
//    }
    
    
// })