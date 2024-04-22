document.addEventListener('DOMContentLoaded', ()=> {
    headerComponent()
    introComponent()
    forecastSliderComponent()
    counterComponent()
    selectComponent()
    modalComponent()
    advantagesComponent()
    reviewsComponent()
    articlesComponent()
    contactsComponent()
    algorithmComponent()
})


function advantagesComponent() {
    const matchMedia = window.matchMedia('(max-width: 768px)')
    let swiper = null
    const swiperParams = {
        slidesPerView: 1.2,
        spaceBetween: 15,
        pagination: {
          el: '.swiper-pagination',
        },

        on: {
            init: function () {
             
            },
        }
    }

    const initSwiper = ()=> {
        if (matchMedia.matches && !swiper) {
            swiper = new Swiper('.js-advantages-swiper', swiperParams);
        } else if (swiper) {
            swiper.destroy(true, true);
        }
    }
    
    initSwiper()

    matchMedia.addEventListener('change', initSwiper)
}
function algorithmComponent() {
    const $tab = $('.js-algorithm-tab')
    const $tabBack = $('.js-algorithm-back')

    $tabBack.on('click', function() {
        const that = $(this)
        that.parents('.js-algorithm-body').removeClass('is-show')
        $tab.removeClass('is-active is-mb-active')
    })

    $tab.on('click', '.algorithm__item[data-tab]', function() {
        const that = $(this)
        const { tab } = this.dataset
        
        that.addClass('is-active is-mb-active').siblings().removeClass('is-active is-mb-active')
        const content = $tab.next('.js-algorithm-body').addClass('is-show').find(`[data-tab="${tab}"]`)
        content.show().siblings().hide()
    })
}
function articlesComponent() {
    const $articles = $('.js-articles-swiper');

    $articles.each((_, slider) => {
        const swiperArticles = new Swiper(slider, {
            slidesPerView: 1.2,
			spaceBetween: 14,

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
				clickable: true,
            },

            breakpoints: {

                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                1340: {
                    slidesPerView: 3,
			        spaceBetween: 20,
                }
            }
        })
    })
}

function contactsComponent() {
    const $ymapsObj = $('.contacts');

    if(!$ymapsObj.length) return;
    let myMap = null;
    ymaps.ready(init);
    function init() {
        $('.contacts__map').each((_, el) => {
            myMap = new ymaps.Map(el, {
                center: [59.849993, 30.178992],
                zoom: 17,
                controls: []
            });

            const placeMark = new ymaps.Placemark([59.849993, 30.178992], { 
                ballonContent: 'ASB Прогнозы на спорт '
            })
            myMap.geoObjects.add(placeMark);
        })

    }
}

function counterComponent() {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});
    
        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;
    
        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);
    
            // update value by loops
            function updateTimer() {
                value += increment;
                loopCount++;
    
                // add decimal and change string to number
                var valueWithDecimal = value.toFixed(options.decimals),
                    valueAsNumber = Number.parseFloat(valueWithDecimal);
    
                // output frontend
                var valueAsLocaleNumber = valueAsNumber.toLocaleString().replace(/\s/g, '');
                //$(_this).html(valueAsLocaleNumber);
                $(_this).html(valueAsLocaleNumber.replace(/\,/g, $(_this)[0].dataset.separator));
    
                // custom functions on update
                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }
    
                // custom functions on complete
                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;
    
                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };
    
    // default options
    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };

  
    const $count = $('.js-counter-number');
        
    $count.each((_, el)=> {
        const that = $(el)
        const { decimals, to } = el.dataset

        that.countTo({
            from: 0,
            to: String(to),
            speed: 3000,
            refreshInterval: 50,
            decimals: String(decimals),
        });
    });

    
    const swiper = new Swiper('.js-counter-slider', {
        slidesPerView: 1,

        pagination: {
          el: '.swiper-pagination',
        },

        breakpoints: {  
            420: {
                slidesPerView: 2,
            },

            540: {
              slidesPerView: 3,
            },

            1024: {
              slidesPerView: 6,
              pagination: false,
            }
        },
    });
}

function forecastSliderComponent() {
    const swiper = new Swiper(".js-forecast-slider", {
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1340: {
                slidesPerView: 2,
            },
            1620: {
                slidesPerView: 3,
            }
        }
    });
}
function headerComponent() {
    const $headerMenuLink = $('.js-header-menu-link')
    const matchMedia = window.matchMedia('(max-width: 1024px)')

    $headerMenuLink.on('click', '.header__menu-link button', function(e) {
        if (!matchMedia.matches) return
        const that = $(this)
        const parent = that.parents('.js-header-menu-link')
        parent.find('.js-header-menu-sub').fadeToggle(0).parent().siblings().find('.js-header-menu-sub').fadeOut(0)
    })
    
    $headerMenuLink.on('mouseenter', function() {
        if (matchMedia.matches) return
        const that = $(this)
        that.siblings().find('.header__menu-link').removeClass('is-active')
        that.find('.header__menu-link').addClass('is-active')
        that.siblings().find('.js-header-menu-sub').fadeOut()
        that.find('.js-header-menu-sub').fadeIn()
    })

    $headerMenuLink.on('mouseleave', function() {
        if (matchMedia.matches) return
        const that = $(this)
        that.find('.header__menu-link').removeClass('is-active')
        if (!matchMedia.matches) that.find('.js-header-menu-sub').fadeOut(300)
    })

    const $headerBurger = $('.js-header-burger')

    $headerBurger.on('click', function() {
        const that = $(this)
        that.toggleClass('is-active')
        const svgPath = that.find('use')
        const xlinkHref = svgPath.attr('xlink:href').split('#')[0]
        const $headerMenu = $('.js-header-menu')

        if (that.hasClass('is-active')) {
            svgPath.attr('xlink:href', xlinkHref+'#burger-x')
            $headerMenu.fadeIn()
        } else {
            svgPath.attr('xlink:href', xlinkHref+'#burger')
            $headerMenu.fadeOut()
        }

        if (matchMedia.matches) {
            $('body').toggleClass('is-hidden')
        }
    })
}
function introComponent() {
    const $button = $('.js-button-prices')

    const setPostPrice = (postPrice, e)=> {
        postPrice.text(
            (e.from >= 0 && e.from <= 500) ? 500 :
            (e.from >= 500 && e.from <= 1000) ? 1000 :
            (e.from >= 1000 && e.from <= 3000) ? 3000 : 5000
        )
    }

    const createPostPrice = (e)=> {
        const postPrice = $('<span class="irs-post-price"></span>')
            setPostPrice(postPrice, e)
            setTimeout(()=> {
                const position = $('.irs-single').attr('style').replace(/[^0-9,.-]/g, '')
                postPrice.css('left', `${position}%`)
            }, 0)
        $('.irs-single').after(postPrice)
    }

    const $slider = $(".js-range-slider").ionRangeSlider({
        min: 0,
        max: 10000,
        from: 5000,
        postfix: ' ₽',
        onStart: createPostPrice,
        onChange: (e)=> {
            const postPrice = $('.irs-post-price')
            setPostPrice(postPrice, e)
            const position = $('.irs-single').attr('style').replace(/[^0-9,.-]/g, '')
            postPrice.css('left', `${position}%`)
        },
        onUpdate: createPostPrice 
    });

    const my_range = $slider.data("ionRangeSlider");

    $button.on('click', 'button', function() {
        const that = $(this)
        const price = that.data('price')
        that.addClass('is-active').siblings().removeClass('is-active')

        my_range.update({
            from: price
        })
    })
}
function modalComponent() {
    const $jsFancy = $('.js-fancy');

    $jsFancy.on('click', e=> {
        e.preventDefault();
        Fancybox.show([
            {
                src: e.currentTarget.dataset.src || e.currentTarget.getAttribute('data-src'),
                type: "inline",
            }
        ])
    })
}
function reviewsComponent() {
    const $reviews = $('.js-slider-reviews');
    $reviews.each((_, slider)=> {
        const nextNav = $(slider).next()
		const pagination = nextNav.find('.js-swiper-pagin')[0]

        const swiper = new Swiper(slider, {
            slidesPerView: 1,
			spaceBetween: 14,
    
            navigation: {
                nextEl: nextNav.find('.js-swiper-next')[0],
				prevEl: nextNav.find('.js-swiper-prev')[0],
            },
            on: {
                init: ()=> {
                    setTimeout(()=> {
                        $('.swiper-slide-next').next().addClass('swiper-slide-next')
                    }, 50)
                },
                slideNextTransitionStart: (swiper) => {
                    $('.swiper-slide-next').prev().removeClass('swiper-slide-next')
                    $('.swiper-slide-next').next().addClass('swiper-slide-next')
                },
                slidePrevTransitionStart: (swiper) => {
                    $('.swiper-slide-next').next().addClass('swiper-slide-next').next().removeClass('swiper-slide-next')
                }
            },
            pagination: {
                el: pagination,
                type: 'bullets',
				clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },

                1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                1240: {
                    slidesPerView: 3,
			        spaceBetween: 20,
                }
            }
        })

    })
}

function selectComponent() {
    const $select = $('.js-select');
    if (!$select.length) return;

    $select.each((_, select) => {
        const $that = $(select);
        const { placeholder } =$that.data()

        $that.select2({
            placeholder: placeholder,
            width: null,
        })
    })
}