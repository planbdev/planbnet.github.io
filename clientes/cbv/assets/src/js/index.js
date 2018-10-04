import $ from '../../node_modules/jquery';
window.$ = $;
window.jQuery = $;
jQuery = $;
import WOW from '../../node_modules/wow.js';
import '../../node_modules/owl.carousel';
import '../../node_modules/@fancyapps/fancybox';
import '../../node_modules/bootstrap-datepicker';
import '../js/featherlight.js';
import '../js/featherlight.gallery.js';

$("document").ready(function(){
    var wow = new WOW(
    {
        mobile: false
    });

    wow.init();

    $.fn.extend({
        animateCss: function(animationName, callback) {
            var animationEnd = (function(el) {
                var animations = {
                    animation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    MozAnimation: 'mozAnimationEnd',
                    WebkitAnimation: 'webkitAnimationEnd',
                };

                for (var t in animations) {
                    if (el.style[t] !== undefined) {
                        return animations[t];
                    }
                }
            })(document.createElement('div'));

            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);

                if (typeof callback === 'function') callback();
            });

            return this;
        },
    });

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).scroll(function(event){
        var current = $(this).scrollTop();		
        if (current > 100){
            $('header').addClass('reduzido');
        }
        else {
            $('header').removeClass('reduzido');
        }
    });

    $('.carrossel-pedagogico').owlCarousel({
        nav:false,
        loop:false,
        dots: false,
        autoplay: false,
        animateOut: false,
        animateIn: false,
        items:5,
        navText:['<div class="seta-esq"></div>','<div class="seta-dir"></div>'],
        responsive : {
            0 : {
                items:1,
                dots:true,
            },

            450 : {
                items:2,
                dots:true,
            },

            700 : {
                items:3,
                dots:true,
            },

            970 : {
                items:4,
                dots:true,
            },

            1180 : {
                items:5,
            }
        }
    });
    
    $('.carrossel-programas').owlCarousel({
        nav:true,
        loop:true,
        dots: false,
        autoplay: false,
        animateOut: 'flipInX',
        animateIn: 'flipInX',
        items:1,
        smartSpeed:450,
        navText:['<div class="seta-esq"></div>','<div class="seta-dir"></div>'],
    });

    $(".menu-item").click(function(){
        $(this).parent().parent().find(".menu-item").each(function(){
            $(this).removeClass('ativo');
        });
        
        $('.menu-mobile').removeClass('ativo');
        $(this).addClass('ativo');
    });


    $(window).on('resize scroll', function() {
        $('.anchor-end').each(function() {
            if ($(this).isInViewport()) {

                var id = $(this).attr('id');
                $(".menu-item").each(function(){
                    $(this).removeClass('ativo');
                });
        
                $("." + id).addClass('ativo');

                if(id.includes('formulario'))
                {
                    $('#master-cta').addClass('d-none');
                }else{
                    $('#master-cta').removeClass('d-none');
                }
            }
        });
    });

    $(".seta-esq").click(function(){
        $('.programa-1').animateCss('flipInX');
        $('.programa-2').animateCss('flipInX');
    });

    $(".seta-dir").click(function(){
        $('.programa-1').animateCss('flipInX');
        $('.programa-2').animateCss('flipInX');
    });

    $(".select-drop-item").click(function(){
        $(this).closest(".select").find(".select-drop-title").html($(this).html());
        $(this).closest(".select").addClass('ativo');

        var selectId = "#" + $(this).closest(".select").attr('select');
        $(selectId).val($(this).html()).change();
    });

    $(".select-dropdown-btn").click(function(){
        $(this).toggleClass('open'); 
        $(this).closest(".select").toggleClass('focus');
    });

    $(".open-btn").click(function(){
        $('.menu-mobile').addClass('ativo');
    });

    $(".close-btn").click(function(){
        $('.menu-mobile').removeClass('ativo');
    });

    $(".botao").click(function(){
        console.log($(this).attr('id'));

        if(!$(this).hasClass('ativo'))
        {
            $('.botao').not(this).removeClass('ativo');            
            $(this).toggleClass('ativo');
            
            $('.owl-carousel').addClass('d-none');

            $('#colecao-galeria' + $(this).attr('id')).removeClass('d-none');            
        }
    });

    $(".scroll-to").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    $(".programa-3").on("touchstart mousedown", function(e) {
        // Prevent carousel swipe
        e.stopPropagation();
    });

    
    $('#js-add-card').on('click', () => {
        addCard('<div class="card"><h2 class="heading-beta">Another Card!</h2></div>');
    });

    $('#js-add-tall-card').on('click', () => {
        addCard('<div class="card"><h2 class="heading-beta">A<br />Tall<br />Card!</h2></div>');
    });

    $('#js-remove-card').on('click', () => {
        let $activeCard = $stackedCards.children().slice(-1);
        $activeCard.removeClass('card--added');
        setTimeout(() => {
            requestAnimationFrame(() => {
                $activeCard.remove();
            });
        }, 400); // Match CSS transition time
    });

    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        var imgStyle = $img.attr('style');
        var imgGradient = $img.attr('gradient');
        var noOvercolor = $img.attr('no-overcolor');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            if(typeof imgStyle !== 'undefined') {
                $svg = $svg.attr('style', imgStyle);
            }

            if(typeof noOvercolor ===  'undefined')
            {
                var paths = $svg.find('path');
                var poly = $svg.find('polygon');
                var rect = $svg.find('rect');
                var circle = $svg.find('circle');

                CurrentColor(paths);
                CurrentColor(poly);
                CurrentColor(rect);
                CurrentColor(circle);

                if(typeof imgGradient !== 'undefined') {
                    var colors = imgGradient.split(",");
                    var gradientId = colors[0].replace('#', '') +  colors[1].replace('#', '');
                    var colorGradient = '<linearGradient id="' + gradientId + '" gradientTransform="rotate(90)"><stop offset="0%" stop-color="' + colors[0] + '"/><stop offset="100%" stop-color="'+ colors[1] + '"/></linearGradient>';
                    $svg.append(colorGradient);

                    var paths = $svg.find('path');

                    $(paths).each(function () {
                        $(this).css({ fill: gradientId });
                    });

                    $svg.html($svg.prop('innerHTML').replace('fill="currentColor"', 'fill="url(#' + gradientId + ')"'));
                }
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});

let $stackedCards = $('.stacked-cards');

function addCard(cardContent) {
    let $newCard = $(cardContent);
    $stackedCards.append($newCard);
    setTimeout(() => {
        requestAnimationFrame(() => {
            $newCard.addClass('card--added');
        });
    }, 10);
}