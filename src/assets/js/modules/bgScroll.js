import 'intersection-observer';

/*--------------------------------------------------*\
    Background scroll - Change background colours
    on scroll using IntersectionObserver.

    MK1 @ Version 1.0
\*--------------------------------------------------*/

export default function(options) {

    // Private: Default settings object
    const _defaults = {
        els: '.js-colourChange',
        config: {}
    };

    // Private: Merge passed in object with defaults
    const _settings = {
        ..._defaults,
        ...options
    };

    // Public: Destroy module instance
    const destroy = () => {

        const $els =  document.querySelectorAll(_settings.els);

        $els.forEach($el => {
            observer.unobserve($el);
        });
    };

    // Public: Destroy module instance and run initialise again
    const reinit = () => {

        destroy();
        init();
    };

    // Public: Initialise module
    const init = (() => {

        const $els =  document.querySelectorAll(_settings.els);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
    
                if ( entry.intersectionRatio > 0 ) {
                    document.body.style.backgroundColor = entry.target.dataset.colorGroup;
                }
            });
        }, _settings.config);
    
        $els.forEach($el => {
            observer.observe($el);
        });
    })();

    // Return public methods
    return {
        destroy,
        reinit,
        init
    };
}





