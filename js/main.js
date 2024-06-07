// EMPORTING ELEMENTS FROM DOM 

const burger = document.querySelector('header nav .burger');
const burgerLines = document.querySelectorAll('header nav .burger div');
const navUlLinksContainer = document.querySelector('header nav ul');
const navHeader = document.querySelector('header');
const navLinks = document.querySelectorAll('header nav ul li a');
const sections = document.querySelectorAll('section');
const carsBrandsSectionOffset = $("#carsBrands").offset().top;

$(document).ready(function () {
    $("#loading .loader").fadeOut(1000 , function () {
        $("#loading").fadeOut(500 , function () {
            $(document.body).css("overflow-y" , "auto")         
        })
    })
    
})


$(window).scroll(()=>{
    const windowScroll = $(window).scrollTop();
    if(windowScroll > carsBrandsSectionOffset - 100) {
        $("#home .hero .content").fadeOut(1);
        // SCROLL TOP BTN 
        $("#btnUp").fadeIn(500, ()=>{
            $("#btnUp").click(function () {
                $(window).scrollTop(0);  
            })    
        })
      
    }else {
        $("#home .hero .content").fadeIn(1);
        $("#btnUp").fadeOut(500);
    }
})

// Adding Functionallity to Navbar 

$("header nav .burger").click(() => {
    $("header nav .burger div").toggleClass("close-animation");
    $("header nav ul").toggleClass('slide');
    $("header").toggleClass('nav-header-animation');
});

navLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        navUlLinksContainer.classList.remove('slide');
        navHeader.classList.remove('nav-header-animation');
        burgerLines.forEach(line => {
            line.classList.toggle('close-animation');
        });
    })
});


// ACTIVATING LINKS SCROLL


// window.addEventListener('scroll', () => {
//     let fromTop = window.scrollY;
//     sections.forEach(section => {
//         let sectionHeight = section.offsetHeight;
//         let sectionTop = section.offsetTop - 50;
//         let sectionId = section.getAttribute('id');
//         document.querySelector('header nav ul li a').classList.remove('active');
//         if (fromTop > sectionTop && fromTop < sectionTop + sectionHeight) {
//             document.querySelector(`header nav ul li a[href*='${sectionId}']`).classList.add('active');
//         }
//     });
// })


// Making Effect On Super Cars On Click

function selectElement(element, className) {
    document.querySelectorAll(element).forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'open-social-link' class from all items except the clicked one
            document.querySelectorAll(element).forEach(innerItem => {
                if (innerItem !== item) {
                    innerItem.classList.remove(className);
                }
            });
            // Toggle 'open-social-link' class on the clicked item
            item.classList.toggle(className);
            if($(item).hasClass(className)) {
                $("header").fadeOut(1)
                $("body").css({overflowY:'hidden'})
                $("#btnUp").fadeOut(500);
            }else{
                $("header").fadeIn(1)
                $("body").css({overflowY:'scroll'})
                $("#btnUp").fadeIn(500);


            }
        
        });

    
    });
}


selectElement(".container > *" , "expand");


// SHOW ALL GALLERY BUTTON


$(".show-more-btn").click((e)=>{
    const row2 = $(".gallery-container .row:nth-child(2)");
    row2.toggleClass("show");
    if(row2.hasClass("show")) {
        e.target.innerHTML = "Show Less";

    }else {
        e.target.innerHTML = "Show more";
    }
});



