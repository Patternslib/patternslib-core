// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// need this for async/await in tests
import "core-js/stable";
import "regenerator-runtime/runtime";

import jquery from "jquery";
window.jQuery = jquery;
jQuery.expr.pseudos.visible = function( elem ) {
    // Fix jQuery ":visible" selector always returns false in JSDOM.
    // https://github.com/jsdom/jsdom/issues/1048#issuecomment-401599392
    return true;
};
