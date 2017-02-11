(function(){
  'use strict';

  var comment = document.getElementById("comment");
  var label = document.getElementById("label");

  var LIMIT = 20;//定数は大文字
  var WARNING = 10;
  label.innerHTML = LIMIT;

  comment.addEventListener('keyup', function(){
    var remain = LIMIT - this.value.length;
    label.innerHTML = remain;
    if(remain < WARNING){
      label.className = 'warning';
    }
  });

})();
