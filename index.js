let addTheStyle = document.getElementsByTagName("h2")
let addTheStyleP = document.getElementsByClassName("addTheStyleP")
let addTheStyleImg = document.getElementsByClassName("addTheStyleImgClass")
let addTheStyleH3 = document.getElementsByTagName("h3")
let editH3 = document.querySelectorAll(".title h3")
let editP = document.querySelectorAll(".content p")
let showHide = document.getElementsByClassName("container")
let elModalWrapper = document.querySelector(".modal_wrapper")

function addTheStyleH2() {
    for (let i = 0; i< addTheStyle.length; i++) {
        addTheStyle[i].style = "color: red; text-shadow: 0 0 8px blue; box-shadow 0 0 8px green"
               
    }
}

function addTheStyleP1() {
    for (let i = 0; i< addTheStyleP.length; i++) {
     addTheStyleP[i].style = "color: red; font-weight: bolder; text-decoration: underline"
    }
}

function addTheStyleImg1() {
    for (let i = 0; i< addTheStyleImg.length; i++) {
        if(i % 2 != 0){
            addTheStyleImg[i].style = "border-radius: 50%"
        } else {
            addTheStyleImg[i].style = "border-radius: 20px"
        }
    }
}

function addTheColor() {
    for (let i = 0; i< addTheStyleH3.length; i++) {
        addTheStyleH3[i].style = "color: red;"
               
    }
}

function addTextShadow() {
    for (let i = 0; i< addTheStyleH3.length; i++) {
        addTheStyleH3[i].style = "text-shadow: 0 0 8px violet;"
               
    }
}

function addTheShadow() {
    for (let i = 0; i< addTheStyleH3.length; i++) {
        addTheStyleH3[i].style = "box-shadow: 0 0 8px blue;"
               
    }
}

function editH31() {
    for (let i = 0; i< editH3.length; i++) {
        editH3[i].style = "width: 200px; background-color: black; color: white"
               
    }
}0

function editP1() {
    for (let i = 0; i< editP.length; i++) {
        editP[i].style = "width: 200px; background-color: white; color: black"
               
    }
}

let mode = true

function showHideB(){
    for(let i = 0; i < showHide.length; i++){
        if(mode){
            showHide[i].style = "display: none"
            }else{
                showHide[i].style = "display: block"
            }
        }
        mode = !mode    
}

function disableImages(){
    document.body.style.addTheStyleImg = "display: none"
}

window.onclick = (e) => {
    if(e.target == elModalWrapper){
    elModalWrapper.style.display = "none"
        
    }    
}

function openModal(){
    elModalWrapper.style.display = "flex"
}

function closeModal(){
    elModalWrapper.style.display = "none"
}