(function($){"use strict";$(".search-open-btn").on("click",function(){$(".search__popup").addClass("search-opened");});$(".search-close-btn").on("click",function(){$(".search__popup").removeClass("search-opened");});$(".job-form-open-btn").on("click",function(){$(".job__form").slideToggle("job__form");});$('.it-service-2-item').on('mouseenter',function(){$(this).addClass('active').parent().siblings().find('.it-service-2-item').removeClass('active');});let device_width=window.innerWidth;var windowOn=$(window)
windowOn.on('load',function(){$('#loading').fadeOut(500);});if($("#it-header-lang-toggle").length>0){window.addEventListener('click',function(e){if(document.getElementById('it-header-lang-toggle').contains(e.target)){$(".it-lang-list").toggleClass("it-lang-list-open");}
else{$(".it-lang-list").removeClass("it-lang-list-open");}});}
windowOn.on('scroll',function(){var scroll=windowOn.scrollTop();if(scroll<500){$('.scroll-to-target').removeClass('open');}else{$('.scroll-to-target').addClass('open');}});if($('.header-height').length>0){var headerHeight=document.querySelector(".header-height");var setHeaderHeight=headerHeight.offsetHeight;$(".header-height").each(function(){$(this).css({'height':setHeaderHeight+'px'});});$(".header-height.header-sticky").each(function(){$(this).css({'height':inherit,});});}
if(typeof($.fn.knob)!='undefined'){$('.knob').each(function(){var $this=$(this),knobVal=$this.attr('data-rel');$this.knob({'draw':function(){$(this.i).val(this.cv+'%')}});$this.appear(function(){$({value:0}).animate({value:knobVal},{duration:2000,easing:'swing',step:function(){$this.val(Math.ceil(this.value)).trigger('change');}});},{accX:0,accY:-150,});});}
if($('.scroll-to-target').length){$(".scroll-to-target").on('click',function(){var target=$(this).attr('data-target');$('html, body').animate({scrollTop:$(target).offset().top},1000);});}
if($('.scroll-to-target-2').length){$(".scroll-to-target-2").on('click',function(){var target=$(this).attr('data-target');$('html, body').animate({scrollTop:$(target).offset().top},1000);});}
function smoothSctollTop(){$('.smooth a').on('click',function(event){var target=$(this.getAttribute('href'));if(target.length){event.preventDefault();$('html, body').stop().animate({scrollTop:target.offset().top-150},1000);}});}
smoothSctollTop();var wow=new WOW({mobile:true,});wow.init();var windowOn=$(window);windowOn.on('load',function(){$("#loading").fadeOut(500);});windowOn.on('scroll',function(){var scroll=windowOn.scrollTop();if(scroll<400){$("#header-sticky").removeClass("header-sticky");}else{$("#header-sticky").addClass("header-sticky");}});$(window).on('load',function(){$('#preloader').delay(350).fadeOut('slow');$('body').delay(350).css({'overflow':'visible'});})
$(".it-menu-bar").on("click",function(){$(".itoffcanvas").addClass("opened");$(".body-overlay").addClass("apply");});$(".close-btn").on("click",function(){$(".itoffcanvas").removeClass("opened");$(".body-overlay").removeClass("apply");});$(".body-overlay").on("click",function(){$(".itoffcanvas").removeClass("opened");$(".body-overlay").removeClass("apply");});if($('.it-menu-content').length&&$('.it-menu-mobile').length){let navContent=document.querySelector(".it-menu-content").outerHTML;let mobileNavContainer=document.querySelector(".it-menu-mobile");mobileNavContainer.innerHTML=navContent;let arrow=$(".it-menu-mobile .has-dropdown > a");arrow.each(function(){let self=$(this);let arrowBtn=document.createElement("BUTTON");arrowBtn.classList.add("dropdown-toggle-btn");arrowBtn.innerHTML="<i class='fal fa-angle-right'></i>";self.append(function(){return arrowBtn;});self.find("button").on("click",function(e){e.preventDefault();let self=$(this);self.toggleClass("dropdown-opened");self.parent().toggleClass("expanded");self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");self.parent().parent().children(".it-submenu").slideToggle();});});}
$(".popup-video").magnificPopup({type:"iframe",});$('.popup-image').magnificPopup({type:'image',gallery:{enabled:true}});$("[data-background").each(function(){$(this).css("background-image","url( "+$(this).attr("data-background")+"  )");});$("[data-width]").each(function(){$(this).css("width",$(this).attr("data-width"));});$("[data-bg-color]").each(function(){$(this).css("background-color",$(this).attr("data-bg-color"));});if($(".purecounter").length){new PureCounter({filesizing:true,selector:".filesizecount",pulse:2,});new PureCounter();}
function mediaSize(){if(window.matchMedia('(min-width: 768px)').matches){const panels=document.querySelectorAll('.col-custom')
panels.forEach(panel=>{panel.addEventListener('mouseenter',()=>{removeActiveClasses()
panel.classList.add('active')})})
function removeActiveClasses(){panels.forEach(panel=>{panel.classList.remove('active')})}}else{$(".col-custom ").addClass("active");}};mediaSize();window.addEventListener('resize',mediaSize,false);const sliderswiper=new Swiper('.it-slider-active',{speed:1000,slidesPerView:1,loop:true,autoplay:true,effect:'fade',breakpoints:{'1400':{slidesPerView:1,},'1200':{slidesPerView:1,},'992':{slidesPerView:1,},'768':{slidesPerView:1,},'576':{slidesPerView:1,},'0':{slidesPerView:1,},},});const slider3swiper=new Swiper('.it-slider-3-active',{speed:1000,slidesPerView:1,loop:true,autoplay:true,effect:'fade',breakpoints:{'1400':{slidesPerView:1,},'1200':{slidesPerView:1,},'992':{slidesPerView:1,},'768':{slidesPerView:1,},'576':{slidesPerView:1,},'0':{slidesPerView:1,},},navigation:{prevEl:'.slider-3-prev',nextEl:'.slider-3-next',},});const projectSwiper=new Swiper('.it-project-active',{speed:1000,loop:true,slidesPerView:5,spaceBetween:36,autoplay:true,breakpoints:{'1400':{slidesPerView:5,},'1200':{slidesPerView:4,},'992':{slidesPerView:3,},'768':{slidesPerView:2,},'576':{slidesPerView:1,},'0':{slidesPerView:1,},},navigation:{prevEl:'.project-prev',nextEl:'.project-next',},});const serviceswiper=new Swiper('.it-service-active',{speed:1000,loop:true,slidesPerView:4,spaceBetween:30,autoplay:true,roundLengths:true,breakpoints:{'1400':{slidesPerView:4,},'1200':{slidesPerView:4,},'992':{slidesPerView:4,},'768':{slidesPerView:3,},'576':{slidesPerView:2,},'0':{slidesPerView:2,},},});const service3swiper=new Swiper('.service-active-3',{speed:1000,loop:true,slidesPerView:3,spaceBetween:30,autoplay:true,roundLengths:true,breakpoints:{'1400':{slidesPerView:3,},'1200':{slidesPerView:3,},'992':{slidesPerView:3,},'768':{slidesPerView:2,},'576':{slidesPerView:1,},'0':{slidesPerView:1,},},navigation:{prevEl:'.service-prev',nextEl:'.service-next',},pagination:{el:".it-service-3-dots",clickable:true,},});const testiswiper=new Swiper('.it-testimonial-active',{speed:1000,loop:true,slidesPerView:1,spaceBetween:30,autoplay:true,centeredSlides:true,roundLengths:true,breakpoints:{'1400':{slidesPerView:1,},'1200':{slidesPerView:1,},'992':{slidesPerView:1,},'768':{slidesPerView:1,},'576':{slidesPerView:1,},'0':{slidesPerView:1,},},navigation:{prevEl:'.testimonial-prev',nextEl:'.testimonial-next',},});const testi2swiper=new Swiper('.it-testimonial-2-active',{speed:1000,loop:true,slidesPerView:1,spaceBetween:30,autoplay:true,centeredSlides:true,roundLengths:true,breakpoints:{'1400':{slidesPerView:1,},'1200':{slidesPerView:1,},'992':{slidesPerView:1,},'768':{slidesPerView:1,},'576':{slidesPerView:1,},'0':{slidesPerView:1,},},pagination:{el:".it-service-3-dots",clickable:true,},});const testi3swiper=new Swiper('.it-testimonial-3-active',{speed:1000,loop:true,slidesPerView:1,spaceBetween:30,autoplay:true,roundLengths:true,breakpoints:{'1400':{slidesPerView:1,},'1200':{slidesPerView:1,},'992':{slidesPerView:1,},'768':{slidesPerView:1,},'576':{slidesPerView:1,},'0':{slidesPerView:1,},},navigation:{prevEl:'.testi-prev',nextEl:'.testi-next',},});const testi4Swiper=new Swiper('.it-testi-4-active',{speed:1000,loop:true,slidesPerView:3,spaceBetween:30,autoplay:false,breakpoints:{'1400':{slidesPerView:3,},'1200':{slidesPerView:3,},'992':{slidesPerView:3,},'768':{slidesPerView:2,},'576':{slidesPerView:1,},'0':{slidesPerView:1,},},navigation:{prevEl:'.testi-prev',nextEl:'.testi-next',},});const team3swiper=new Swiper('.it-team-2-active',{speed:1000,loop:true,slidesPerView:4,spaceBetween:30,autoplay:true,roundLengths:true,breakpoints:{'1400':{slidesPerView:4,},'1200':{slidesPerView:3,},'992':{slidesPerView:3,},'768':{slidesPerView:2,},'576':{slidesPerView:1,},'0':{slidesPerView:1,},},});const brandswiper=new Swiper('.it-brand-active',{speed:1000,loop:true,slidesPerView:5,spaceBetween:30,centeredSlides:true,autoplay:false,breakpoints:{'1400':{slidesPerView:5,},'1200':{slidesPerView:5,},'992':{slidesPerView:4,},'768':{slidesPerView:3,},'576':{slidesPerView:2,},'0':{slidesPerView:1,},},});const postBoxswiper=new Swiper('.postbox-thumb-slider-active',{speed:1000,loop:true,slidesPerView:1,spaceBetween:30,autoplay:false,effect:'slide',breakpoints:{'1400':{slidesPerView:1,},'1200':{slidesPerView:1,},'992':{slidesPerView:1,},'768':{slidesPerView:1,},'576':{slidesPerView:1,},'0':{slidesPerView:1,},},navigation:{prevEl:'.postbox-arrow-prev',nextEl:'.postbox-arrow-next',},});$('.it-funtact-item').on('mouseenter',function(){$(this).addClass('active').parent().siblings().find('.it-funtact-item').removeClass('active');});$('.it-service-2-item').on('mouseenter',function(){$(this).addClass('active').parent().siblings().find('.it-service-2-item').removeClass('active');});$('.it-funfact-3-item-box').on('mouseenter',function(){$(this).addClass('active').parent().siblings().find('.it-funfact-3-item-box').removeClass('active');});$('.it-project-3-item-bg').on('mouseenter',function(){$(this).addClass('active').parent().siblings().find('.it-project-3-item-bg').removeClass('active');});$('.popup-image').magnificPopup({type:'image',gallery:{enabled:true}});$('#showlogin').on('click',function(){$('#checkout-login').slideToggle(900);});$('#showcoupon').on('click',function(){$('#checkout_coupon').slideToggle(900);});$('#cbox').on('click',function(){$('#cbox_info').slideToggle(900);});$('#ship-box').on('click',function(){$('#ship-box-info').slideToggle(1000);});$(".popup-video").magnificPopup({type:"iframe",});$('.grid').imagesLoaded(function(){var $grid=$('.grid').isotope({itemSelector:'.grid-item',percentPosition:true,masonry:{columnWidth:'.grid-item',},});$('.masonary-menu').on('click','button',function(){var filterValue=$(this).attr('data-filter');$grid.isotope({filter:filterValue,animationOptions:{duration:100,easing:"linear",queue:true}});});$('.masonary-menu button').on('click',function(event){$(this).siblings('.active').removeClass('active');$(this).addClass('active');event.preventDefault();});});$(".accordion-items").on("click",function(){$(".accordion-items").toggleClass("open");});$(".accordion-items").on("click",function(){$(".accordion-items").removeClass("open");});$('.cart-minus').on('click',function(){var $input=$(this).parent().find('input');var count=parseInt($input.val())-1;count=count<1?1:count;$input.val(count);$input.change();return false;});$('.cart-plus').on('click',function(){var $input=$(this).parent().find('input');$input.val(parseInt($input.val())+1);$input.change();return false;});if($('.jarallax').length>0){$('.jarallax').jarallax({speed:0.2,imgWidth:1366,imgHeight:768,});};if($('.it-main-menu-content').length&&$('.it-main-menu-mobile').length){let navContent=document.querySelector(".it-main-menu-content").outerHTML;let mobileNavContainer=document.querySelector(".it-main-menu-mobile");mobileNavContainer.innerHTML=navContent;let arrow=$(".it-main-menu-mobile .has-dropdown > a");arrow.each(function(){let self=$(this);let arrowBtn=document.createElement("BUTTON");arrowBtn.classList.add("dropdown-toggle-btn");arrowBtn.innerHTML="<i class='fal fa-angle-right'></i>";self.append(function(){return arrowBtn;});self.find("button").on("click",function(e){e.preventDefault();let self=$(this);self.toggleClass("dropdown-opened");self.parent().toggleClass("expanded");self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");self.parent().parent().children(".it-submenu").slideToggle();});});}})(jQuery);