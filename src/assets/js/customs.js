$('form#kycform').on('submit', function (e) {
    e.preventDefault();
});
$('form#referral').on('submit', function (e) {
    e.preventDefault();
});
$('form#subscribe').on('submit', function (e) {
    e.preventDefault();
});
$('form#subscribe_middle').on('submit', function (e) {
    e.preventDefault();
});
$('form#subscribe_bottom').on('submit', function (e) {
    e.preventDefault();
});
$('form#whitelist').on('submit', function (e) {
    e.preventDefault();
});
$('#kycform').validate({
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
        f_name: {
            required: $("#over input[type='radio']:checked")
        },
        l_name: {
            required: $("#over input[type='radio']:checked")
        },
        birthday: {
            required: $("#over input[type='radio']:checked"),
        },
        city: {
            required: $("#over input[type='radio']:checked")
        },
        adress: {
            required: $("#over input[type='radio']:checked")
        },
        zip: {
            required: $("#over input[type='radio']:checked"),
            minlength: 4,
            maxlength: 12
        },
    },
    messages: {
        wallet: {
            pattern: 'Your wallet address is not valid'
        }
    },
    submitHandler: function (form) {
        var $form = $(form);
        $.ajax({
            type: $form.attr('method'),
            url: '/en/kyc',
            data: $form.serialize(),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (data, textStatus, jqXHR) {
                $.fancybox.close([
                    {
                        src: '#kyc'
                    }
                ]);

                $.fancybox.open([
                    {
                        src: '#kyc-2'
                    }
                ]);
                $.cookie('client', '1', {expires: 125});
                twttr.conversion.trackPid('nzecu', {tw_sale_amount: 0, tw_order_quantity: 0});
                dataLayer.push({'event': 'send_form', 'eventAction': 'send_form', 'event_category': 'KYC'});
                return false;
            },
            error: function (data) {
                var errors = data.responseJSON;
                $('#kycform').children('.input').removeClass('error').children('.error-label').empty();
                $('#kycform').children('.input').addClass('error').children('.error-label').append(errors);
            }
        })
        return false;
    }
});
$('#referral').validate({
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
        telegram: {
            pattern: "((@)[0-9A-Za-z]*)",
        },
        sum: {
            required: true,
            number: true,
            min: 0.1,
            max: 1000,
        }
    },
    messages: {
        wallet: {
            pattern: 'Your wallet address is not valid'
        }
    },
    submitHandler: function (form) {
        var $form = $(form);
        $.ajax({
            type: $form.attr('method'),
            url: '/referral_register',
            data: $form.serialize(),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (data, textStatus, jqXHR) {

                $.fancybox.open([
                    {
                        src: '#referral-thx'
                    }
                ]);

                return false;
            },
            error: function (data) {
                var errors = data.responseJSON;
                $('#referral').children('.input').removeClass('error').children('.error-label').empty();
                $('#referral').children('.input').addClass('error').children('.error-label').append(errors);
            }
        })
        return false;
    }
});
// $.ajax({
//     url: 'countries.json',
//     type: 'GET',
//     cache: false,
//     success: function (result) {
//         if (result) {
//             result.forEach(function (element) {
//                 $('select[name="country"]').append('<option value="' + element.code + '">' + element.name + '</option>')
//             });
//
//         }
//     },
//     error: function () {
//         console.log('Error in parse');
//     }
// });
$('#subscribe').validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
    },
    submitHandler: function (form) {
        var $form = $(form);
        $.ajax({
            type: $form.attr('method'),
            url: '/en/subscribes',
            data: $form.serialize(),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (data, textStatus, jqXHR) {
                $('.subscribe-container').addClass("active");
                setTimeout(function () {
                    $('.subscribe-container').removeClass('active');
                }, 4500);
                $.fancybox.open([
                    {
                        src: '#subscr-thx'
                    }
                ]);

                dataLayer.push({'event': 'send_form', 'eventAction': 'sent_form', 'event_category': 'subscribe_form'});
            },
            error: function (data) {
                var errors = data.responseJSON;
                $('.subscribe-container input').addClass('error');
                $('.subscribe-container .field').append('<label id="email-error" class="error" for="email">Please enter a unique email address.</label>');
                dataLayer.push({
                    'event': 'send_form',
                    'eventAction': 'mistake_form',
                    'event_category': 'subscribe_form'
                });
            }
        })
        return false;
    },
    invalidHandler: function (form, validator) {
        dataLayer.push({'event': 'send_form', 'eventAction': 'mistake_form', 'event_category': 'subscribe_form'});

    }
});
$('#subscribe_middle').validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
    },
    submitHandler: function (form) {
        var $form = $(form);
        $.ajax({
            type: $form.attr('method'),
            url: '/en/subscribes',
            data: $form.serialize(),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (data, textStatus, jqXHR) {
                $('.subscribe-container').addClass("active");
                setTimeout(function () {
                    $('.subscribe-container').removeClass('active');
                }, 4500);
                $.fancybox.open([
                    {
                        src: '#subscr-thx'
                    }
                ]);
                dataLayer.push({'event': 'send_form', 'eventAction': 'sent_form', 'event_category': 'subscribe_form'});
            },
            error: function (data) {
                var errors = data.responseJSON;
                $('.subscribe-container input').addClass('error');
                $('.subscribe-container .field').append('<label id="email-error" class="error" for="email">Please enter a unique email address.</label>');
                dataLayer.push({
                    'event': 'send_form',
                    'eventAction': 'mistake_form',
                    'event_category': 'subscribe_form'
                });
            }
        })
        return false;
    },
    invalidHandler: function (form, validator) {

        dataLayer.push({'event': 'send_form', 'eventAction': 'mistake_form', 'event_category': 'subscribe_form'});

    }
});

var now = new Date();
$('.item#roadmap-event').each(function () {
    var currentDate = now.getMonth() + 1 + '_' + now.getFullYear();

    var dataItem = $(this).attr('data-month');

    if (dataItem == currentDate) {
        $(this)
            .prevAll('.item#roadmap-event')
            .addClass('active')
    } else {
    }

});


$('form#whitelist').validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
        name: {
            required: true,
        },
        sum: {
            required: true,
        },
        us_citizen: {
            required: true,
        }
    },
    submitHandler: function (form) {
        var $form = $(form);
        $.ajax({
            type: $form.attr('method'),
            url: '/en/whitelist',
            data: $form.serialize(),
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (data, textStatus, jqXHR) {
                $.fancybox.close([
                    {
                        src: '#whitelist'
                    }
                ]);

                $.fancybox.open([
                    {
                        src: '#whitelist-thx'
                    }
                ]);
                dataLayer.push({'event': 'send_form', 'eventAction': 'sent_form', 'event_category': 'whitelist_form'});
                return false;
            },
            error: function (data) {
                var errors = data.responseJSON;
                $('#whitelist').children('.input').removeClass('error').children('.error-label').empty();
                $('#whitelist').children('.input').addClass('error').children('.error-label').append(errors);

                dataLayer.push({
                    'event': 'send_form',
                    'eventAction': 'mistake_form',
                    'event_category': 'whitelist_form'
                });
            }
        })
        return false;
    },

    invalidHandler: function (form, validator) {

        dataLayer.push({'event': 'send_form', 'eventAction': 'mistake_form', 'event_category': 'whitelist_form'});

    }
});

function promoCode() {
    $('.promo-submit').click(function (e) {
        e.preventDefault();
        $('.inputs-holder').hide();
        $(this).parents('.promo-container').find('.generated-promocode').slideDown();
        $.ajax({
            type: 'POST',
            url: '/promo-gen',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function (data, textStatus, jqXHR) {
                $('.promocode').append(data);
            },
            error: function (data) {
            }
        })
    })
}

$('a#open-kyc').click(function (e) {
    e.preventDefault();

    if ($.cookie('client') == 1) {

        $.fancybox.open([
            {
                src: '#kyc-2'
            }
        ]);
    } else {
        $.fancybox.open([
            {
                src: '#kyc'
            }
        ]);

    }
});

