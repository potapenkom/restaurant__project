$('#first').owlCarousel({
    items:1,
    loop:true,
    nav:false,
    dots: true,
    pagination : true,
    autoWidth:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            autoWidth:false,        
        },
        1000:{
            items:1,
            autoWidth:false,
        }
    }
})


$('#second').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav:true,
    navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots: false,
    pagination : false,
    responsive:{
        600:{
            items:1
        }
    }
});

$('#third').owlCarousel({
    loop:true,
    nav:true,
    navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots: false,
    pagination : false,
    responsive:{
        1000:{
            items:4
        }
    }
});
