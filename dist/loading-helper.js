(function ($) {
    var _loadingClass = 'loading-div-class-unique' ,
        settings = {
            "z-index": "99999",
            "background-color": "gray",
            "width": "100%",
            "height": "100%"
        };

    function removeLoader($container) {
        $container.find('.' + _loadingClass).remove();
    }

    function _generateStyleStr() {
        var styleStr = '';
        for (var variable in settings) {
            styleStr += variable + ":" + settings[variable] + ";";
        }

        return styleStr;
    }

    function setLoader($container) {

        var loadingDiv = $('<div />', {
            "class": _loadingClass,
            "style": _generateStyleStr()
        });

        loadingDiv.appendTo($container);
    }

    $.fn.loadingHelper = function (action, options) {


        switch (action) {
            case 'configure':
                settings = $.extend(settings, options);
                break;
            case 'remove':
                removeLoader(this);
                break;
            default:
                removeLoader(this);
                setLoader(this)
        }

    };

}(jQuery));
