document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        const slideNav = document.querySelector("nav");
        if (
            slideNav.classList.contains("slide")
        ) {
            slideNav.classList.remove("slide")
            this.body.style.display = "block"
            
        }
        else{
            this.body.style.display = "block"
        }

    }
      
    else if(document.readyState == "loading" || document.readyState == "interactive"){
        this.body.style.display = "none"
    }
}


    //   function myfun(callback{
    //         setTimeout( ()=> {
    //             callback()
    //         }, 1000);
    //     })
    //     validateAllFormGroups(formElement);     
    //     if(validateAllFormGroups(formElement).){
    //         fuv
    //         const redirect = formElement.getAttribute("action")
    //         window.location.href = redirect
    //     }
    // })
    // if(validateAllFormGroups(formElement) == true){
        //     // timeout popup
        //     let login = document.querySelector(".login-popup")
        //     var time = ()=>{
        //         login.classList.remove("hide-popup")
        //         console.log("timer")
        //     }
        //     var timing = ()=>{
        //         login.classList.add("hide-popup")
        //         clearTimeout(time)
        //     }
        //     setTimeout(time, 1000)
        //     setTimeout(timing, 5000)
        
          
        // }