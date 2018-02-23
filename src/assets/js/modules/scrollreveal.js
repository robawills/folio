require('waypoints/lib/noframework.waypoints.min.js')
require('waypoints/lib/shortcuts/inview.min.js')

/*  'use strict' enforces correct syntax.  */
'use strict';

const scroll = (($els = '.js-colourChange', settings = {}) => {

  Array.from(document.querySelectorAll($els)).map( ($el) => {

    const defaults = {
      element: $el,
      handler: ((direction) => {
        console.log(direction, $el);
        document.body.style.backgroundColor = $el.dataset.colorGroup;
      })
    };

    const config = {
      ...defaults,
      ...settings
    };

    const inview = new Waypoint(config);
  });
})();


