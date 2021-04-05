document.addEventListener('DOMContentLoaded', () => {

    // Логика модалок
    let modals = document.querySelectorAll('.modal');

    function modal( modal, openBtn ){
        let btnOpen = document.querySelectorAll(`${openBtn}`);
        let btnClode = modal.querySelectorAll('.modal__close');

        btnOpen.forEach( btn => {
            btn.addEventListener('click', () => {
                modal.classList.add('open')
            })
        })
        btnClode.forEach( btn => {
            btn.addEventListener('click', () => {
                modal.classList.remove('open')
            })
        })
    }

    document.addEventListener('click', e => {
        if(e.target.classList.contains('modal')){
            modals.forEach( elem => {
                elem.classList.remove('open')
            })
        }
    } )

    modal( modals[0], '.modal-open-global');
    modal( modals[1], '.modal-open-sad');
    modal( modals[2], '.modal-open-shkol');
    modal( modals[3], '.modal-open-izo');
    modal( modals[4], '.modal-open-stud');
    modal( modals[5], '.modal-open-nyny');
    
    
    


})






document.addEventListener('DOMContentLoaded', () => {


    let dayBtn = document.querySelector('.day-open-mob');
    let dayContent = document.querySelectorAll('.day__elems')[1];
    dayBtn.addEventListener('click', () => {
        dayContent.classList.add('open');
        dayBtn.style.display = 'none';
    })


    let menuBtn = document.querySelector('.burder');
    let menu = document.querySelector('.nav__manu');
    let menuClose = document.querySelector('.clise-menu-btn');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('open');
    });


})



$(document).ready(function(){
    let tiacher = $("#tiacher");
    tiacher.owlCarousel(
        {
            margin:21.5,
            items: 3,
            nav: false,
            loop: false,
            dots: false,
            loop: true,
            autoWidth: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    margin:10.5,
                },
                // breakpoint from 480 up
                418 : {
                    items: 3,
                    autoWidth: true,
                }

            }
        }
    );
    $('.slider-btn-prev').click(function() {
        tiacher.trigger('prev.owl.carousel');
    })
    $('.slider-btn-next').click(function() {
        tiacher.trigger('next.owl.carousel', [300]);
    })
});


$(document).ready(function(){
    let utp = $("#utp");
    utp.owlCarousel(
        {
            margin:1,
            items: 1,
            nav: false,
            loop: false,
            dots: true,
            autoWidth: false,
            autoHeight: true,
            autoHeightClass: 'owl-height',
        }
    );
    $('.utp-prev').click(function() {
        utp.trigger('prev.owl.carousel');
    })
    $('.utp-next').click(function() {
        utp.trigger('next.owl.carousel', [300]);
    })
    $('.utp__counter span').click(function(){
        utp.trigger('to.owl.carousel', [$(this).index(), 300]);  
    })

    let listDots = document.querySelectorAll('.utp__counter span');
    utp.on('changed.owl.carousel', function(event) {
        var item = event.item.index;
        listDots.forEach( (elem, i) => {
            elem.classList.remove('active');
            if(item == i){
                elem.classList.add('active');
            }
        });
    })
});

$(document).ready(function(){
    let otzivi = $("#otzivi");
    otzivi.owlCarousel(
        {
            // margin:10,
            items: 1,
            nav: false,
            loop: false,
            dots: true,
            autoWidth: false,
            URLhashListener:true,
            startPosition: 'URLHash',
        }
    );

    let listDots = document.querySelectorAll('.otzivi__counter span');
    otzivi.on('changed.owl.carousel', function(event) {
        var item = event.item.index;
        console.log(item)
        listDots.forEach( (elem, i) => {
            elem.classList.remove('active');
            if(item == i){
                elem.classList.add('active');
            }
        });
    })
    $('.otzivi__counter span').click(function(){
        otzivi.trigger('to.owl.carousel', [$(this).index(), 300]);  
    })
});