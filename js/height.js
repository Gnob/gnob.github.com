(function($) {
   $.fn.height = function(options) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxHeight   : 9999,
         minHeight   : 1,
         widthRatio : 1,
         bodyMaxWidth : 767
      }, options),

// Do the magic math
// =================
      changes = function(el) {
         var $el = $(el),
            elw = $el.width(),
            width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
            height = width * settings.widthRatio;
         $el.css('height', height + 'px');
      };

      var $body = $('body');
// Make the magic visible
// ======================
      return this.each(function() {
      // Context for resize callback
         var that = this;
      // Make changes upon resize
         $(window).resize(function(){
             if ($body.width() < settings.bodyMaxWidth)
                changes(that);
         });
      // Set changes on load
         if ($body.width() < settings.bodyMaxWidth)
            changes(this);
      });
   };
}(jQuery));