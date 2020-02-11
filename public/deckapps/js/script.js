"use strict";
(function() {
    $(document).ready(init);
    function init(evt) {
        $('html').scroll(function(){
            console.log('coucou');
        });
    }
}());