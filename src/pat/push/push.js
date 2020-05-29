import $ from "jquery";
import Base from "../../core/base";
import logging from "../../core/logging";
import Parser from "../../core/parser";

const logger = logging.getLogger("push");
const parser = new Parser("push");
parser.addArgument("url", null);
parser.addArgument("push-id", null);


export default Base.extend({
  name: "push",
  trigger: ".pat-push",

  init: function ($el, opts) {
    this.options = parser.parse($el, opts);
    $(document.body).on("push", function (e, data) {
      logger.debug('received push marker');
      if (data === this.options.pushId) {
        this.perform_inject();
      }
    }.bind(this));
  },

  perform_inject: function() {
    let el = this.$el[0];
    $.ajax({
      cache: false,
      dataType: "html",
      url: this.options.url,
    })
      .done((data) => {
        el.innerHTML = data;
      })
      .fail(() => {
        logger.error("Could not fetch from " + this.options.url + " on push-id " + this.options.pushId);
      });
  },

});
