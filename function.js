WhatAnimation("fadescroll");
WhatAnimation("moveleft");

$(window).scroll(function() {
    WhatAnimation("fadescroll");
    WhatAnimation("moveleft");
});

function WhatAnimation(name) {
    $("." + name).each(function() {
        switch (name) {
            case "fadescroll":
                AddClass(this, "fade");
                break;
            case "moveleft":
                AddClass(this, "left");
                break;
        }
    });
}

function AddClass(object, name) {
    if (IsVisible(object)) {
        $(object).addClass(name);
    } else {
        $(object).removeClass(name);
    }
}

function IsVisible(object) {
    var viewport = $(window).scrollTop() + $(window).height();
    var rand = $(object).offset();
    rand.bottom = rand.top + $(object).outerHeight();
    return !(
        viewport < rand.top + 250 || $(window).scrollTop() > rand.bottom - 250
    );
}
