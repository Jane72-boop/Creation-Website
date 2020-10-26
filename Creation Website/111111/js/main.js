const homeBtn = document.querySelector(".home")
const creationBtn = document.querySelector(".creation")
const aboutBtn = document.querySelector(".about")
const contactBtn = document.querySelector(".contact")
const homeTxt = document.querySelector(".homeTxt")
const comingTxt = document.querySelector(".comingTxt")
const allBtns = document.querySelector(".buttonss")
const titleTxt = document.querySelector(".titleTxt")
const aboutCont = document.querySelector(".aboutCont")
const contactCont = document.querySelector (".contactCont")




allBtns.addEventListener("click", () => {
    const isButton = event.target.nodeName === 'BUTTON' || 'TEXT';
    let checkBtn = event.target
    let actualCheckBtn = checkBtn.innerText
    console.log(isButton)
    console.log(checkBtn)
    console.log(actualCheckBtn)

    if (isButton === true || 'TEXT') {
        if (actualCheckBtn == "Home" ) {
            if (homeTxt.innerText === "Home") { 
                console.log("You're already at Home!") 
            }

            else if (homeTxt.innerText !== "Home") {
                showHome()
            }

        } else if (actualCheckBtn == "Creations") {
            if (homeTxt.innerText === "Creations") { 
                console.log("You're already at Creations!") 
            }  else if (homeTxt.innerText !== "Creations") {
                    showCreate()
                
            }
        } else if (actualCheckBtn == "About") {
            if (homeTxt.innerText === "About") { 
                console.log("You're already at About!") 
            }  else if (homeTxt.innerText !== "About") {
                showAbout()
            }
        } else if (actualCheckBtn == "Contact") {
            if (homeTxt.innerText === "Contact") { 
                console.log("You're already at Contact!") 
            }  else if (homeTxt.innerText !== "Contact") {
                showContact()
            }
        } 
    
    } 
       
})

function showHome() {
    homeTxt.style.animationName = "tesAnimEnd"
    checkAbtCont()
    homeTxt.addEventListener("animationend", () => {
    homeTxt.style.opacity = "0"
    homeTxt.innerText = "Home"
    homeTxt.style.animationName = "tesAnim"
    titleTxt.classList.remove("moveCreaTitle", "moveAbtTitle", "moveContTitle")
    allBtns.classList.remove("moveCreaBtn", "moveAbtBtn", "moveContBtn")
    setTimeout(()=> {
        homeTxt.style.opacity = "1"
    }, 100)
})
}

function showCreate() {
    homeTxt.style.animationName = "tesAnimEnd"
    checkAbtCont()
    homeTxt.addEventListener("animationend", () => {
    homeTxt.style.opacity = "0"
    homeTxt.innerText = "Creations"
    homeTxt.style.animationName = "tesAnim"
    titleTxt.classList.remove("moveAbtTitle", "moveContTitle")
    allBtns.classList.remove("moveAbtBtn", "moveContBtn")
    titleTxt.classList.add("moveCreaTitle");
    allBtns.classList.add("moveCreaBtn")
    console.log(allBtns)
    setTimeout(()=> {
        homeTxt.style.opacity = "1"
    }, 100)
})
}



function showAbout() {
    showDpText()
    homeTxt.style.animationName = "tesAnimEnd"
    homeTxt.addEventListener("animationend", () => {
        homeTxt.style.opacity = "0"
        homeTxt.innerText = "About"
        homeTxt.style.animationName = "tesAnim"
        titleTxt.classList.remove("moveCreaTitle", "moveContTitle")
        allBtns.classList.remove("moveCreaBtn", "moveContBtn")
        titleTxt.classList.add("moveAbtTitle");
        allBtns.classList.add("moveAbtBtn")
        setTimeout(()=> {
            homeTxt.style.opacity = "1"
        }, 100)
        
    })
}

function showDpText() {
    const aboutImg = document.createElement("div")
    aboutImg.classList.add("aboutImg")
    let aboutActualImg = document.createElement("img")
    aboutActualImg.style.opacity = "0"
    aboutActualImg.src = "../imgs/DP2.png"
    aboutActualImg.classList.add("aboutActualImg")
    console.log(aboutActualImg)
    aboutImg.appendChild(aboutActualImg)
    aboutCont.appendChild(aboutImg)

    const aboutTxt = document.createElement("div")
    aboutTxt.classList.add("aboutTxt")
    let aboutActualTxt = document.createElement("p")
    aboutActualTxt.style.opacity = "0"
    aboutActualTxt.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ab deleniti officiis voluptas expedita alias eum numquam ad maxime saepe sequi dolorum pariatur inventore odio asperiores laudantium obcaecati dolorem praesentium omnis, similique culpa sed iure sunt? Rem quas voluptas similique non perferendis aliquam asperiores quia deserunt. Quidem qui velit odio!"
    aboutActualTxt.classList.add("aboutActualTxt")
    aboutTxt.appendChild(aboutActualTxt)
    aboutCont.appendChild(aboutTxt)
    homeTxt.addEventListener("animationend", () => {
        aboutActualImg.style.animationName = "moveAboutImg"
        aboutActualImg.style.display = "flex"

        aboutActualTxt.style.animationName = "moveAboutImg"
        aboutActualTxt.style.display = "flex"
    })
    setTimeout(() => {
        aboutActualImg.style.opacity = "1"
    }, 1000)
}



function showContact() {
    homeTxt.style.animationName = "tesAnimEnd"
    checkAbtCont()
    homeTxt.addEventListener("animationend", () => {    
        homeTxt.style.opacity = "0"
        homeTxt.innerText = "Contact"
        homeTxt.style.animationName = "tesAnim"
        titleTxt.classList.remove("moveCreaTitle", "moveAbtTitle")
        allBtns.classList.remove("moveCreaBtn", "moveAbtBtn")
        titleTxt.classList.add("moveContTitle");
        allBtns.classList.add("moveContBtn")
        setTimeout(()=> {
            homeTxt.style.opacity = "1"
        }, 100)
    })
}

function showContactInfo() {
     
}

function checkAbtCont() {

    let checkAboutCont = aboutCont.hasChildNodes()
    /*
    let checkImgChild = aboutImg.hasChildNodes()
    let aboutActualImg = aboutImg.childNodes[0]
    let aboutActualTxt = aboutTxt.childNodes[0]
   */

    if (checkAboutCont === true) {
        
        let aboutImg = aboutCont.childNodes[0]
        let aboutActualImg = aboutImg.childNodes[0]
    
        let aboutTxt = aboutCont.childNodes[1]
        let aboutActualTxt = aboutTxt.childNodes[0]

        if (aboutActualImg.style.display == "flex") {
            aboutActualImg.style.animationName = "moveOutAboutImg"
            aboutActualTxt.style.opacity = "1"
            aboutActualTxt.style.animationName = "moveOutAboutImg"
            
        
            homeTxt.addEventListener("animationend", () => {
                aboutActualImg.style.display = "none"
                aboutImg.remove()
                aboutActualImg.remove()
                aboutTxt.remove()
                aboutActualTxt.remove()
            })
        } else {
            console.log("nothing")
        }
    } else {
        console.log("no")
    }
    
}




