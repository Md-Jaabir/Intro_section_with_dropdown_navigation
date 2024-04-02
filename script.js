document.querySelectorAll("a.dropdown").forEach(link=>{
    link.addEventListener("mouseover",(event)=>{
        link.childNodes[5].style.display="flex";
    });
    link.addEventListener("mouseout",(event)=>{
        link.childNodes[5].style.display="none";
    });
});

document.querySelectorAll("a.dropdown .hover").forEach(element=>{
    element.addEventListener("mouseover",(event)=>{
        element.parentNode.childNodes[5].style.display="flex";
    });
    element.addEventListener("mouseout",(event)=>{
        element.parentNode.childNodes[5].style.display="none";
    });
});

document.querySelectorAll("a.dropdown .dropdown-list").forEach(list=>{
    list.addEventListener("mouseout",(event)=>{
        list.style.display="none";
    });
});

document.querySelectorAll(".dropdown-list li").forEach(item=>{
    item.addEventListener("click",(event)=>{
        item.parentNode.style.display="none";
    });
});

function openMenu(){
    document.querySelector(".mobile-menu").classList.add("show");
}

function closeMenu(){
    document.querySelector(".mobile-menu").classList.remove("show");
}

function openMobileDropdown1(){
    if(document.querySelector(".mobile-dropdown.one .dropdown-list").classList.contains("show")){
        document.querySelector(".mobile-dropdown.one .dropdown-list").classList.remove("show");
        document.querySelector(".mobile-dropdown.one .header .dropdown").innerHTML=`Features <img src="images/icon-arrow-down.svg" alt="">`;
    }else{
        document.querySelector(".mobile-dropdown.one .dropdown-list").classList.add("show");
        document.querySelector(".mobile-dropdown.one .header .dropdown").innerHTML=`Features <img src="images/icon-arrow-up.svg" alt="">`;
    }
}

function openMobileDropdown2(){
    if(document.querySelector(".mobile-dropdown.two .dropdown-list").classList.contains("show")){
        document.querySelector(".mobile-dropdown.two .dropdown-list").classList.remove("show");
        document.querySelector(".mobile-dropdown.two .header .dropdown").innerHTML=`Features <img src="images/icon-arrow-down.svg" alt="">`;
    }else{
        document.querySelector(".mobile-dropdown.two .dropdown-list").classList.add("show");
        document.querySelector(".mobile-dropdown.two .header .dropdown").innerHTML=`Features <img src="images/icon-arrow-up.svg" alt="">`;
    }
}