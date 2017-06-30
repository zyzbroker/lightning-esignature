({
  onClear: function(cmp, evt, h) {
    cmp.find('signature').clear();
  },
  onReadOnly: function(cmp, evt, h) {
    var signature = cmp.find('signature');
    signature.capture();
    signature.set('v.readOnly', true);
  }
})