import objectFit from "object-fit";


objectFit.polyfill({
    selector: 'img', // this can be any CSS selector
    fittype: 'cover', // either contain, cover, fill or none
    disableCrossDomain: 'true' // either 'true' or 'false' to not parse external CSS files.
});

