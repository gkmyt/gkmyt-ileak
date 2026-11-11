/* ileak 共通の配色切り替え（トップと同じ保存キー ileak.theme）  Claude 2026-10-27 */
(function(){
 function set(t){document.documentElement.dataset.theme=t;try{localStorage.setItem('ileak.theme',t)}catch(e){}
  document.querySelectorAll('.themes button[data-t]').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.t===t))})}
 document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.themes button[data-t]').forEach(function(b){b.addEventListener('click',function(){set(b.dataset.t)})});
  set(document.documentElement.dataset.theme||'cyber')});
})();
