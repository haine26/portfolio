// ul card
var mainNav = document.getElementById("mainNav");
//  li card 
var listNav = mainNav.getElementsByTagName("li");
for (var i = 0; i < listNav.length; i++) {
    listNav[i].addEventListener("click", function () {
        // find active class card
        var current = document.querySelector("#mainNav .active");
        // delete active class card 
        current.className = current.className.replace("active", "");
        // gắn active cho thẻ đang đc click 
        this.className += " active";
    });
}

/* Sidebar Mini */
var toggleBtn = document.querySelector('.sideBarMini__button');
var sideBarMini = document.querySelector ('.sideBarMini');
var switchBtn = document.querySelector('#checkbox')

toggleBtn.addEventListener('click',function(){
    sideBarMini.classList.toggle('is-opened');
})

switchBtn.addEventListener('click',function(){
    document.querySelector('body').classList.toggle('darkMode')
})



