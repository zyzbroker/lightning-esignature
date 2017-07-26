({
  init: function(cmp) {
    var wrapper = document.getElementById('signatureWrapper'),
      canvas = wrapper.querySelector('canvas'),
      minWidth = parseFloat(cmp.get('v.minWidth')),
      maxWidth = parseFloat(cmp.get('v.maxWidth')),
      penColor = cmp.get('v.penColor');

    function resizeCanvas() {
      var ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext("2d").scale(ratio, ratio);
    }

    cmp.set('v.signaturePad', new SignaturePad(canvas, {
      minWidth: minWidth,
      maxWidth: maxWidth,
      penColor: penColor
    }));
    resizeCanvas();
  },

  capture: function(cmp) {
    var dataUrl, pad = cmp.get('v.signaturePad');
    pad.trimCanvas();
    dataUrl = pad.toDataURL();
    cmp.set('v.signatureData', dataUrl);
  },

  clear: function(cmp) {
    cmp.get('v.signaturePad').clear();
  },

  touch: function(cmp) {
    var e = document.querySelector('input.esignature-hide');
    e.focus();
  }
})
