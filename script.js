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