// -----------
// Debugger that reports the viewport size.
// -----------
function showViewportSize(display) {
  
  if(display) {
    
    var height = window.innerHeight;
    var width = window.innerWidth;
    
    jQuery('body').prepend('<div id="jq-viewportsize" style="z-index:9999;position:fixed;bottom:0px;left:0px;color:#fff;background:rgba(0,0,0,0.85);color:goldenrod;font-size:13px;letter-spacing:1px;padding:12px;">'+width+' x '+height+'</div>');
    
    jQuery(window).resize(function() {
            height = window.innerHeight;
            width = window.innerWidth;
            jQuery('#jq-viewportsize').html(''+width+' x '+height);
    });
  }

}

$(document).click(function(e) {
  $('#jq-viewportsize').hide();
});

$('#jq-viewportsize').click(function(e) {
  e.stopPropagation();
});

$(document).ready(function(){
   showViewportSize(true);
});