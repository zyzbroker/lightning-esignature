({
  onScriptReady: function(cmp, evt, h) {
    h.init(cmp);
  },

  onCapture: function(cmp, evt, h) {
    h.capture(cmp);
  },

  handleTouchMove: function(cmp, evt, h) {
    evt.stopPropagation();
  },

  onClear: function(cmp, evt, h) {
    h.clear(cmp);
  }
})