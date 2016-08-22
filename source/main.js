/*
 |-----------------------------------------------------------------------------
 | Vendors
 |-----------------------------------------------------------------------------
 |
 | polyfills and other stuff
 |
 */
// require('whatwg-fetch');

/*
 |-----------------------------------------------------------------------------
 | Modules
 |-----------------------------------------------------------------------------
 |
 | Code that manages the page (like scroll and layout manager)
 | ex. var layoutManager = require('./modules/layout-manager.js');
 |
 */
// var layoutManager = require('./modules/layout-manager.js');
// var scrollManager = require('./modules/scroll-manager.js');
// var autoscroll = require('./modules/autoscroll.js');

/*
 |-----------------------------------------------------------------------------
 | Components
 |-----------------------------------------------------------------------------
 |
 | Code that the component depends
 |
 */

/*
 |-----------------------------------------------------------------------------
 | Layouts
 |-----------------------------------------------------------------------------
 |
 | Code that is globally accessed by a page
 |
 */

/*
 |-----------------------------------------------------------------------------
 | Initialize
 |-----------------------------------------------------------------------------
 |
 */ 
function init(event) {
    // remove console logs from production mode
    if (!document.documentElement.classList.contains('debug')) {
        console.log = console.warn = console.debug = console.error = function() {};
    }

    // Need to support promizes? (IE 10)
    // (don't forget to include Modernizr on the website)
    // if (!Modernizr.promizes) {
    //     window.Promise = require('promise-polyfill');
    // }

    // Initialize modules
    // layoutManager.initialize();
    // scrollManager.initialize();
    // autoscroll.initialize();

    // Initialize components and layouts
    // (your code here)

    // Force modules to update thier status
    // layoutManager.update();
    // scrollManager.update();

    // Need to run css animations wen pages load?
    // document.body.classList.add('loaded');

    // Need to force website to scroll top?
    // setTimeout(function() {
    //     window.scrollTo(0, 0);
    // }, 10);

}

window.addEventListener('load', init);
