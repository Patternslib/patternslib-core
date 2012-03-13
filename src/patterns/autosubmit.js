define([
    'require',
    '../lib/jquery',
    '../lib/dist/underscore'
], function(require) {

    // can be called on a form or an element in a form
    var init = function($el) {
        var $form = $el.is('form') ? $form : $el.parents('form').first();
        var submit = function(event) {
            $form.submit();
        };
        var submit_debounced = _.debounce(submit, 400);

        // submit if a (specific) form element changed
        $el.on("change", submit);

        if ($el.hasClass('auto-submit-keyup')) {
            ($el.is('input') ? $el : $el.find('input'))
                .on("keyup", submit_debounced);
        }

        // XXX: test whether on webkit and enable only if supported
        // XXX: add code to check whether the click actually changed
        // something
        ($el.is('input[type=search]') ? $el : $el.find('input[type=search]'))
            .on("click", submit);

        // allow for chaining
        return $el;
    };

    var pattern = {
        markup_trigger: ".auto-submit, .auto-submit-keyup",
        initialised_class: "auto-submit",
        init: init
    };

    return pattern;
});
