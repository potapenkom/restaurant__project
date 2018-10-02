$('#first').owlCarousel({
    items:1,
    loop:true,
    nav:false,
    dots: true,
    pagination : true,
    autoWidth : false,
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
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        982:{
            items:1,
            autoWidth:false,   
            nav :false,
            margin: 5
        },

        999:{
            items:1,
            autoWidth:false,   
            nav :false
        },
        1000:{
            items:1,
            autoWidth:false,
        }
    }


});

$('#third').owlCarousel({
    loop:true,
    nav:true,
    navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    dots: false,
    pagination : false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        999:{
            items:3,
            autoWidth:false,   
            center: true     
        },
        1000:{
            items:4,
            autoWidth:false,
        }
    }

});
