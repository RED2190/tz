let body = document.getElementsByTagName('body')
let burger = document.getElementById('burger');
let lines = document.getElementsByClassName('line')
let nav = document.getElementsByClassName('nav')[0]
let reserveBtn = document.getElementById('reserve')
let form = document.getElementById('form')
let close = document.getElementById('close')
let isOpen = false;

window.onresize = function(event) {
    body[0].style.width = window.innerWidth + 'px'
    
};

var mySwiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})

burger.addEventListener('click', () => {
    if(!isOpen)
    {
        nav.style.left = 0
        lines[0].style.transform = "translate(0px, 14px) rotate(45deg)"
        lines[1].style.filter = "opacity(0)"
        lines[2].style.transform = "rotate(-45deg)"
    }
    else{
        nav.style.left = '-100%'
        lines[0].style.transform = "none"
        lines[1].style.filter = "none"
        lines[2].style.transform = "none"
    }
    isOpen = !isOpen
})

reserveBtn.onclick = function(){
    form.style.top = '20%'
}
close.addEventListener('click', () => {
    form.style.top = '-100%'
})

$(document).ready(function(){
    $('#sendBtn').click(function(){

        let phone = $('#phone').val();

        $.ajax({
            url: "https://www.google.com/", 
            type: "post", 
            data: { 
                "phone": phone,
            },
            error:function(){alert("Failed! Try later!")}, 
            success: function(){                     
                alert("Success! We are got your phone. will call you later!")             
            }  
        });
        form.style.top = '-100%'
    });
});