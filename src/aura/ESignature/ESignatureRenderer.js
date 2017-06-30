({
  afterRender: function(cmp, h) {
    this.superAfterRender();
    h.afterRender(cmp);
  }
})