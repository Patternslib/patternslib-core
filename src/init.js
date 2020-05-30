import jquery from "jquery";

// core
import base from './core/base.js';
import compat from './core/compat.js';
import i18n from './core/i18n.js';
import jquery_ext from './core/jquery-ext.js';
import logging from './core/logging.js';
import mockup_parser from './core/mockup-parser.js';
import parser from './core/parser.js';
import pluggable from './core/pluggable.js';
import push_kit from './core/push_kit.js';
import registry from './core/registry.js';
import remove from './core/remove.js';
import store from './core/store.js';
import url from './core/url.js';
import utils from './core/utils.js';

// lib
import depends_parse from './lib/depends_parse.js';
import dependshandler from './lib/dependshandler.js';
import htmlparser from './lib/htmlparser.js';
import input_change_events from './lib/input-change-events'


window.jQuery = jquery;
registry.init();

export {
    base,
    compat,
    i18n,
    jquery_ext,
    logging,
    mockup_parser,
    parser,
    pluggable,
    push_kit,
    registry,
    remove,
    store,
    url,
    utils,
    depends_parse,
    dependshandler,
    htmlparser,
    input_change_events
};
