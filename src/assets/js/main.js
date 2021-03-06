/* DevianScript */

'use strict';

$(document).ready(function(){
	svgRender();
	popupInit();
	accordion();
	headerAnimation();
	menu();
	countdown();
	chartInit();
	initHomeAnim();
	initSelect();
	customFileUpload();
	scrollTop();
	toClipboard();
	productsSlider();
	roadMap();
	roadMapSlider();
	trustSlider();
	initLogoAnim();
	countrySelect();
	kycNav();
	closeThx();
	bDayMask();
	checkCheckbox();
	calculatorInit();
	fancyInit();
	preloaderReady();
	datepicker();
	langDropDown();
	inlineVideo();
	verificationTabs();
	promoCode();
	//validation
	editProfileValidation();
	activateVerificationValidation();
	loginVerification();
	changePassValidation();
	// youtubeEmbed();
	$(window).scroll(function(){
		headerAnimation();
		scrollAnchor();
		scrollAnim();
	})
});
$(window).resize(function(){
	bannerAnim();
	initHomeAnim();
	initLogoAnim();
	trustSlider();
	if ($(window).width()>1024){
		$('.mobile-menu').removeClass('active');
		$('html, body').css('overflow', 'auto');
	}
})

function preloaderReady(){
	setTimeout(function(){
		$('.preloader.active').removeClass('active');
		bannerAnim();
	}, 1500)
}

function menu(){
	$('.burger').click(function(){
		$('.mobile-menu').addClass('active');
		$('html, body').css('overflow', 'hidden');
	})
	$('.close-icon').click(function(){
		$('.mobile-menu').removeClass('active');
		$('html, body').css('overflow', 'auto');
	})
}

function chartInit(){
	if($('.current-ico-chart').length>0){
		$('.current-ico-chart').each(function(){
			var i = $(this),
					currVal = i.find('.current-crypto-value').attr('data-width'),
					softcap = i.find('.softcap-value').attr('data-width');
			i.find('.current-crypto-value').animate({
				'width': currVal
			},800);
			i.find('.softcap-value').animate({
				'width': softcap
			},800);
		})
	}
}

function menuNav(){
	$('.nav-menu a, .main-menu a').click(function(){
		var el = $(this);
		var hash = el.attr('href');
		var str = hash.replace('#', '');
		var section;
		if (undefined !== str && str.length > 0){
			section = $('.simple-section'+hash);
		}
		var headlineHeight = $('header').height();
		
		$('.nav-menu a').removeClass('active');
		el.addClass("active");

		if ( undefined !== section && section.length > 0 ){
			section = $(section).offset();
			$('html,body').animate({
				'scrollTop': (section.top - headlineHeight) + 'px',
			}, 600);
			$('.mobile-menu').removeClass('active');
			$('html, body').css('overflow', 'auto');
			return false;
		} else {
		}
	})
}

function scrollAnchor(){
	$(".anchor").each(function () {
			var scroll = $(window).scrollTop();
			var top = $(this).offset().top-1;
		if ($(this).is(':in-viewport')){
			var i = $(this)
			if ( i.attr('id') ) {
				var section = $(this).attr('id');
				if ( scroll > top-$('.header').height() ){
					$('.nav-menu a').removeClass('active');
					$(".nav-menu a[href='#"+section+"']").addClass('active');
				} else {
					$(".nav-menu a[href='#"+section+"']").removeClass('active');
				}
			}
		}
	});
}

function scrollAnim(){
	$('.animate:in-viewport').each(function(){
		if ($(this).hasClass('roadmap-container')){
			$(this).addClass('fadeInUp');
			blipAnim();
		} else {
			$(this).addClass('fadeInUp');
		}
	})
	$('.qubes-holder:in-viewport').each(function(){
		qubesAnim();
	})
	$('.service-item:in-viewport').each(function(){
		percentage();
	})
}

function svgRender(){
	$('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');
			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');
	});
}


function popupInit(){
	$('.blank-btn').click(function(){
		$('.popups-container').addClass('active');
		return false;
	})
	$('.single-popup .close-btn').click(function() {
		$('.popups-container').removeClass('active');
		return false
	});
	$('.popups-container').click(function(){
		$(this).removeClass('active');
	})
	$('.contact-form-popup').click(function(event){
		event.stopPropagation();
	})
}

function showTHX(){
	$('.thanks-popup').addClass('active');
	setTimeout(function(){
		$('.thanks-popup').removeClass('active');
	},2000)
}

function roadMapSlider(){
	if($('.roadmap-slider').length>0){
		$('.roadmap-slider').each(function(){
			$(this).owlCarousel({
				items: 5,
				dots: false,
				responsive : {
					0: {
						items: 1,
					},
					468: {
						items: 1,
					},
					768: {
						items: 2,
					},
					991: {
						items: 3
					}
				}
			})
		})
	}
}

function trustSlider(){
	var owl = $('.trust-container:not(.showed)');
	if($('.trust-container').length>0 && $(window).width()<992){
		owl.each(function(){
			var i = $(this);
			i.addClass('showed');
			i.owlCarousel({
				items: 1,
				dots: false,
				loop: true,
			});
		})
	} else {
		$('.trust-container.showed').each(function(){
			var i = $(this);
			i.removeClass('showed').trigger('destroy.owl.carousel');
		})
	}
}

function productsSlider(){
	if($('.products-slider').length>0){
		$('.products-slider').each(function(){
			console.log($(this));
			$(this).owlCarousel({
				items: 1,
				dots: false,
				loop: true,
			})
		})
	}
}

function accordion(){
	if($('.accordion').length>0){
		$('.accordion').each(function(){
			$(this).accordion({
				autoHeight: false,
				collapsible: true,
				active: false,
			});
		})
	}
}

function fancyInit(){
	$("[data-fancybox]").fancybox({
		loop: false,
		arrows: false,
		touch: false,
		beforeShow: function(instance, current, e){
			if ($(window).width() > 1024){
				var vid = $('.youtube-frame');
				vid.prettyEmbed({
					showInfo: false,
					showControls: true,
					loop: false,
				});
			} else {
				$('.youtube-frame').each(function(){
					var id = $(this).attr('data-pe-videoid');
					$(this).append('<iframe width="null" height="null" allowfullscreen="" style="border:none;" src="//www.youtube.com/embed/'+id+'?autoplay=1&amp;showinfo=0&amp;rel=0"></iframe>')
				})
			}
		},
		afterClose: function(instance, current, e){
			$('.youtube-frame').removeClass('play').find('iframe').remove();
		}
	});
}

function headerAnimation(){
	$('.header').each(function(){
		if($(window).scrollTop()>30){
			$('.header').addClass('sticky');
		} else {
			$('.header').removeClass('sticky');
		}
	})
}

function countdown(){
	if($('.countdown').length>0){
		$('.countdown').each(function(){
			var remainingTime = $(this).attr('data-time') * 1000;  //using data in miliseconds
			var endDate = new Date(Date.parse(new Date()) + parseInt(remainingTime) );
			var strings = [
				$(this).attr('data-day'), 
				$(this).attr('data-hr'), 
				$(this).attr('data-min'),
				$(this).attr('data-sec')]
			$(this).countdown(endDate).on('update.countdown', function(event) {
			  var $this = $(this).html(event.strftime(''
			    + '<div class="date-item"><span>%D</span>'+strings[0]+'</div>'
			    + '<div class="date-item"><span>%H</span>'+strings[1]+'</div>'
			    + '<div class="date-item"><span>%M</span>'+strings[2]+'</div>'
			    + '<div class="date-item"><span>%S</span>'+strings[3]+'</div>'));
			});
		})
	}
}

function initHomeAnim(){
	if($('.banner-hero .lottie').length>0 && $(window).width()>1023){
		$('.banner-hero .lottie:not(.showed)').each(function(){
			var i = $(this);
			i.addClass('showed');
			var anim = bodymovin.loadAnimation({
				container: document.getElementById('lottie'),
				path: 'assets/js/ftec.json',
				renderer: 'canvas',
				loop: true,
				autoplay: true,
				useSubFrames: false,
				rendererSettings: {
					clearCanvas: true,
				},
			})
			anim.addEventListener('loaded_images', function (e){
				setTimeout(function(){
					i.addClass('fadeInUp');
				},400)
			})
			$(window).scroll(function(){
				$('.banner-hero .lottie:not(:in-viewport)').each(function(){
					anim.stop();
				});
				$('.banner-hero .lottie:in-viewport').each(function(){
					anim.play();
				});
			})
		})
	}
}

function initLogoAnim(){
	if($('.ftec-anim .lottie').length>0){
		$('.ftec-anim .lottie:not(.showed)').each(function(){
			var i = $(this);
			i.addClass('showed');
			var anim = bodymovin.loadAnimation({
				container: document.getElementById('lottie-logo'),
				path: 'assets/js/ftec-logo.json',
				renderer: 'svg',
				loop: true,
				autoplay: true,
				useSubFrames: false,
				rendererSettings: {
					clearCanvas: true,
				}
			})
			$(window).scroll(function(){
				$('.ftec-anim .lottie:not(:in-viewport)').each(function(){
					anim.stop();
				});
				$('.ftec-anim .lottie:in-viewport').each(function(){
					anim.play();
				});
			})
		})
	}
}

function initSelect(){
	if ($('select.custom').length>0){
		$('select.custom').each(function(){
			$(this).selectmenu();
		})
	}
}

function customFileUpload(){
	$('.custom-attach input[type="file"]').bind('change', function(){
		var cont = $(this).parent(),
				fName = cont.find('input[type="file"]').val();
		if (/^\s*$/.test(fName)) {
			cont.removeCLass('active');
		} else {
			cont.addClass('active');
			cont.find('.file-name').text(fName.replace("C:\\fakepath\\", ""));
		}
	})
	$('.uploaded-file .close-btn').click(function(){
		$(this).parents('.custom-attach').find('input[type="file"]').val('');
		$(this).parents('.custom-attach').removeClass('active');
		return false;
	})
}

function scrollTop(){
	$('.scrolltop-btn').click(function(){
		$('html, body').animate({
			'scrollTop': 0
		}, 600);
		return false;
	})
}

function toClipboard() {
    $('.clipboard-btn').click(function(){
        var txt = $(this).parent().find('.referral-input');
        var hint = $(this).parent().find('.hint');
        txt.select();
        txt.get(0).setSelectionRange(0,9999);
        document.execCommand("Copy");
        hint.addClass('active');
        setTimeout(function(){
            hint.removeClass('active');
        },2000)
        return false;
    })
    $('.referral-input').click(function(){
        var txt = $(this).parent().find('.referral-input');
        var hint = $(this).parent().find('.hint');
        txt.select();
        txt.get(0).setSelectionRange(0,9999);
        document.execCommand("Copy");
        hint.addClass('active');
        setTimeout(function(){
            hint.removeClass('active');
        },2000)
    })
}

function roadMap(){
	if($('.roadmap-container').length>0){
		$('.roadmap-container').each(function(){
			var elem = $(this);
			var items = elem.find('.timeline-wrap .item').length;
			var increment = 0;
			var wrapClass;
			var linesCount = 0;
			//megic starts here:
			if (items > 15) {
				if (items % 10 < 5) {
					if (items % 10 == 0 ) {
						increment = 0;
					} else if (items % 10 <= 2 || items % 10 > 2 && items % 10 <= 4){
						increment = 1;
					} else {
						increment = 2;
					}
				} else {
					if (items % 5 == 0){
						increment = 1;
					} else {
						increment = 0;
					}
				}
				linesCount = 3 + Math.round(items/5) + increment;
			} else if ( items <= 15 && items > 10) {
				if ( items >= 13 ) {
					linesCount = 5;
				} else {
					linesCount = 4
				}
			} else if (items <= 10) {
				linesCount = 3;
			} else if (items <= 5) {
				linesCount = 1;
			}
			for (var i = 0; i < linesCount; i++){
				elem.find('.roadmap-snake').append('<div class="line"><div class="gradient"></div></div>')
			}
			if (items % 5 == 0){
				wrapClass = 'items-5';
			} else if ((items + 1) % 5 == 0 ){
				wrapClass = 'items-4';
			} else if ((items + 2) % 5 == 0){
				wrapClass = 'items-3';
			} else if ((items - 2) % 5 == 0){
				wrapClass = 'items-2';
			} else if (items % 1 == 0){
				wrapClass = 'items-1';
			}
			if (items % 10 <= 5 && items % 10 != 0){
				elem.addClass('right');
			} else {
				elem.addClass('left');
			}
			if (wrapClass.length > 0){
				elem.addClass(wrapClass);
			}
		})
	}
}

function qubesAnim(){
	if($('.qubes-holder').length > 0 && $(window).width() > 768){
		$('.qubes-holder:not(active)').each(function(){
			var cont = $(this);
			cont.addClass('active');
			var timer = 200;
			cont.find('.qube-item').each(function(){
				var i = $(this);
				var ind = $(this).index();
				setTimeout(function(){
						i.addClass('active');
				}, timer * ind);
			})
		})
	}
}

function blipAnim(){
	if($(window).width() > 1025){
		var timer = 500;
		$('.roadmap-container:not(.active)').each(function(){
			$(this).addClass('active');
			$('.roadmap-container.active .timeline-wrap .item.active').each(function(){
				var i = $(this);
				var ind = $(this).index();
				setTimeout(function(){
						i.addClass('blip');
				}, timer * ind);	
			});
		});
	}
}

function langDropDown(){
	$('.mobile-menu').click(function(e){
		var container = $('.lang-block.active');
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.removeClass('active');
		}
	})
	$('.mobile-menu .lang-block').click(function(){
		var i = $(this);
		i.toggleClass('active');
	})
}

function percentage(){
	if($('.service-item').length > 0){
		$('.service-item .progress-bar-holder .progress-bar:not(.active)').each(function(){
			var i = $(this);
			var val = i.attr('data-percentage');
			// i.find('.progress').width(i.width());
			if (val < 25){
				i.find('.progress').addClass('blue');
			} else if ( val >= 25 && val < 50){
				i.find('.progress').addClass('purple');
			} else if ( val >= 50 && val < 75 ){
				i.find('.progress').addClass('green');
			} else {
				i.find('.progress').addClass('light-green');
			}
			i.addClass('active').animate({
				'width': val + '%',
			}, 300);
			i.find('.progress-value').prop('Counter', 5).animate({
				Counter: val
			}, {
	        duration: 1000,
	        easing: 'swing',
	        step: function (now) {
	          i.find('.progress-value').text(Math.ceil(now) + '%');
	        }
	    }).text(val + '%');
		})
	}
}

function bannerAnim(){
	var timer = 200;
	$('.banner-hero .banner-anim').each(function(){
		var i = $(this);
		setTimeout(function(){
			i.addClass('fadeInUp');
		}, timer)	
		timer += 200;
	})
}

function datepicker(){
	if($('.bday').length>0){
		$('.bday').each(function(){
			var i = $(this);
			var trigger = 0;
			i.datepicker({
				dateFormat: "dd-mm-yy",
				show:function(){
			    i.parent().find('.calendar-holder').append($('.datepicker-container.datepicker-dropdown'));
			    trigger = 1;
			    // $('#ui-datepicker-div').hide();
			  },
			  hide:function(){
			  	i.blur();
			  }
			});
		})
	}
}

function countrySelect(){
	if($('.country').length > 0){
		// $('.country').each(function(){
		// 	$(this).select2();
		// })
		$('.country').each(function(){
			var i = $(this);
			i.select2({
				dropdownParent: i.parent()
			}).on("select2:open", function (e) {
				$('.select2-container.select2-container--default').addClass('select2-container--open')
				$(document).click(function(e){
					var container = $('.select2-container--open:not(.select2), .select2');
					if (!container.is(e.target) && container.has(e.target).length === 0) {
						i.select2('close');
					}
				})
			})
		})
	}
}

function kycNav(){
	if($('.kyc').length>0){
		$('.kyc-nav .btn').click(function(){
			var href = $(this).attr('id');
			if($(this).hasClass('less')){
				$('.over-trigger').hide();
			} else {
				$('.over-trigger').show();
			}
			$('.kyc-nav .btn').removeClass('active');
			$('.kyc-nav .btn.'+href).addClass('active');
		})
	}
}

function closeThx(){
	$('.close-popup').click(function(){
		$.fancybox.close();
	})
}

function bDayMask(){
	if($('input[type="text"].bday').length > 0){
		$('input[type="text"].bday').each(function(){
			var $phone = $(this);
			$(this).bind('focus click', function () {
				
				if ($phone.val().length !== 0) {
					var originalValue = $phone.val();
						$phone.val('');
						$phone.val(originalValue); // Ensure cursor remains at the end
				}
				
				// prevent tab selection text
				var len = $phone.val().length;
				window.setTimeout(function () {
					$phone[0].setSelectionRange(len, len);
				}, 0);
				return false;
				
			}).blur(function () {
				
				if ($phone.val() === '(') {
					$phone.val('');
				}
			})
			.mask('00-00-0000',{
				onChange: function(cep){
					var originalValue = $phone.val();
						$phone.val('');
						$phone.val(originalValue); // Ensure cursor remains at the end
				},
			});
		})
	}
}

function checkCheckbox(){
	$('.kyc-entry input[type="checkbox"]').change(function(){
		var checkCount = $('.kyc-entry input[type="checkbox"]:checked').length;
		if(checkCount == 4){
			$('.kyc-entry .submit-holder.inactive').removeClass('inactive');
		} else {
			$('.kyc-entry .submit-holder').addClass('inactive');
		}
		$('.kyc-entry .submit-holder .fill').css({
			'width': checkCount*25+'%'
		})
	})
}

function calculatorInit(){
	$('.calculator .currency-amount .left-currency').on('input', function(){
		var leftPrice = $(this).attr('data-price'),
				leftVal = $(this).val();
		$(this).parents('.currency-amount').find('.right-currency').val(leftVal*leftPrice);
	})
	$('.calculator .currency-amount .right-currency').on('input', function(){
		var leftPrice = $(this).parents('.currency-amount').find('.left-currency').attr('data-price'),
				rightVal = $(this).val();

		$(this).parents('.currency-amount').find('.left-currency').val(rightVal/leftPrice);
	})
}

function inlineVideo(){
	$('video').each(function () {
		enableInlineVideo(this);
	});
}

function verificationTabs(){
	$('.steps-container').each(function(){
		var i = $(this);
		i.tabs({
			event: ''
		});
		
		i.find('.second-step-submit').click(function(e){
			e.preventDefault();
			//this returns next tab page
			i.tabs( "option", "active", 2 );
			i.find('.ui-tabs-tab').eq(2).find('a').addClass('active');
		})
		i.find('.back-btn').click(function(e){
			e.preventDefault();
			var ind = $(this).parents('.ui-tabs-panel').attr('id')
			var indRep = ind.replace('tabs-', '') - 2;
			//this returns prev tab page
			i.tabs( "option", "active", indRep );
		})
		i.find('.close-popup').click(function(e){
			e.preventDefault();
			$.fancybox.close();
			setTimeout(function(){
				i.find('.ui-tabs-nav').removeClass('d-none')
			},800)
		})
	})
}

function editProfileValidation(){
	$('#profile-edit-form').submit(function(e){
		e.preventDefault();
	}).validate({
		rules: {
			email: {
	      required: true,
	      email: true,
	    },
	    wallet: {
	      required: true,
	      pattern: "((0x)[0-9A-Za-z]*)",
	      minlength: 42,
	      maxlength: 42
	    },
	    password: {
	    	required: true,
	    	minlength: 5
	    },
	    profile_password_repeat: {
		    equalTo: "#profile_password"
	    }
		}
	})
}

function activateVerificationValidation(){
	$('#google-auth-pass-form').submit(function(e){
		e.preventDefault();
	}).validate({
		rules: {
			activate_pass: {
				required: true,
				minlength: 10
			}
		},
		submitHandler: function(form, e){
			$('.steps-container').each(function(){
				var i = $(this);
				e.preventDefault();
				//this returns next tab page
				i.tabs( "option", "active", 1 );
				i.find('.ui-tabs-tab').eq(1).find('a').addClass('active');
			})
		}
	})
	$('#google-auth-submit-form').submit(function(e){
		e.preventDefault();
	}).validate({
		rules: {
			activate_key: {
				required: true,
				minlength: 10
			},
			account_pass: {
				required: true,
				minlength: 5
			}
		},
		submitHandler: function(form, e){
			$('.steps-container').each(function(){
				var i = $(this);
				e.preventDefault();
				//this returns next tab page
				i.tabs( "option", "active", 3 );
				i.find('.ui-tabs-nav').addClass('d-none')
				$('.verification-proceed').addClass('d-none');
				$('.verification-disable.d-none').removeClass('d-none');
			})
		}
	})
	$('#google-auth-disable-ver-form').submit(function(e){
		e.preventDefault();
	}).validate({
		rules: {
			activate_key: {
				required: true,
				minlength: 10
			},
			account_pass: {
				required: true,
				minlength: 5
			}
		},
		submitHandler: function(form, e){
			$('.steps-container').each(function(){
				var i = $(this);
				e.preventDefault();
				//this returns next tab page
				$('.verification-proceed').removeClass('d-none');
				$('.verification-disable').addClass('d-none');
			})
		}
	})
}

function loginVerification(){
	$('#login-form').submit(function(e){
		e.preventDefault();
	}).validate({
		rules: {
			email: {
	      required: true,
	      email: true,
	    },
	    password: {
	    	required: true,
	    	minlength: 5
	    }
		}
	})
}

function changePassValidation(){
	$('#change-password-form').submit(function(e){
		e.preventDefault();
	}).validate({
		rules: {
			current_password: {
	      required: true,
	      minlength: 5
	    },
	    new_password: {
	    	required: true,
	    	minlength: 5
	    },
	    confirm_password: {
		    equalTo: "#new_password"
	    }
		},
		submitHandler: function(form, e){
			$('#change-password-form').addClass('active')
			$('#change-password-form').find('.thx-msg').fadeIn()
		}
	})
}

function promoCode(){
	$('.promo-submit').click(function(e){
		e.preventDefault();
		$(this).parents('.promo-container').find('.generated-promocode').slideDown();
	})
}