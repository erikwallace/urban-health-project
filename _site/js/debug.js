// -----------
// Debugger that reports the viewport size.
// -----------
function showViewportSize(display) {

  if(display) {

    var height = window.innerHeight;
    var width = window.innerWidth;

    document.body.insertAdjacentHTML('afterbegin', '<div id="jq-viewportsize" style="z-index:9999;position:fixed;inset-block-end:0px;inset-inline-start:0px;color:#fff;background:rgba(0,0,0,0.85);color:goldenrod;font-size:13px;letter-spacing:1px;padding:12px;">'+width+' x '+height+'</div>');

    window.addEventListener('resize', function() {
            height = window.innerHeight;
            width = window.innerWidth;
            document.getElementById('jq-viewportsize').innerHTML = ''+width+' x '+height;
    });
  }

}

document.addEventListener('click', function(e) {
  var el = document.getElementById('jq-viewportsize');
  if (el) el.style.display = 'none';
});

var viewportSizeEl = document.getElementById('jq-viewportsize');
if (viewportSizeEl) {
  viewportSizeEl.addEventListener('click', function(e) {
    e.stopPropagation();
  });
}

document.addEventListener('DOMContentLoaded', function(){
   showViewportSize(true);
});
