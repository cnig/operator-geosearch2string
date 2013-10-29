/*global MashupPlatform*/

(function () {

    "use strict";

    MashupPlatform.wiring.registerCallback("geoSearchText", function (georss) {
        if (typeof georss === "string") {
            georss = JSON.parse(georss);
        }
        if (georss instanceof Array && georss.length > 0) {
            MashupPlatform.wiring.pushEvent("searchText", georss[0]);
        }
    });

})();
