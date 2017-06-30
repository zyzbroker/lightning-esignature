({
  init: function(cmp) {
    var wrapper = document.getElementById('signatureWrapper'),
      canvas = wrapper.querySelector('canvas');

    function resizeCanvas() {
      var ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);
    }
    window.addEventListener('resize', resizeCanvas);
    cmp.set('v.signaturePad', new SignaturePad(canvas));
    resizeCanvas();
  },

  afterRender: function(cmp) {},

  capture: function(cmp) {
    var dataUrl, pad = cmp.get('v.signaturePad');
    pad.trimCanvas();
    dataUrl = pad.toDataURL();
    cmp.set('v.signatureData', dataUrl);
  },

  clear: function(cmp) {
    cmp.get('v.signaturePad').clear();
  }
})