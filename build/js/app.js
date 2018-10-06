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
            nav:false,
            dots: false,
        },
        600:{
            items:1,
            dots: false,
            autoWidth:false,        
        },
        945:{
            items:1,
            dots: false,
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
            margin: 5,
            nav:false
        },
        622:{
            items:1,
            autoWidth:false, 
            margin: 5,  
            nav :true
        },

        999:{
            items:1,
            autoWidth:false,  
            margin: 5, 
            nav :true
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
    items : 4,
    margin: 28,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            margin:5,
            nav:false
        },
        498:{
            items:2,
            margin:10,
            nav: false,
        },
        622:{
            items:2, 
            nav: true
        },

        748:{
            items:3,
            margin:10,
            nav: true,

        },

        1000:{
            items:4,
        }
    }

});
