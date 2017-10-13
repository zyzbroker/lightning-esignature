({
  onClear: function(cmp, evt, h) {
    cmp.find('signature').clear();
  },
  onReadOnly: function(cmp, evt, h) {
    var signature = cmp.find('signature');
    signature.capture();
    signature.set('v.readOnly', true);
  },
  onClear1: function(cmp, evt, h) {
    cmp.find('signature1').clear();
  },
  onReadOnly1: function(cmp, evt, h) {
    var signature = cmp.find('signature1');
    signature.capture();
    signature.set('v.readOnly', true);
  },
  onClear2: function(cmp, evt, h) {
    cmp.find('signature2').clear();
  },
  onReadOnly2: function(cmp, evt, h) {
    var signature = cmp.find('signature2');
    signature.capture();
    signature.set('v.readOnly', true);
  }
})