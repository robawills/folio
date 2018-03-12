import 'intersection-observer';

/*--------------------------------------------------*\
    Background scroll - Change background colours
    on scroll using IntersectionObserver.

    MK1 @ Version 1.0
\*--------------------------------------------------*/

export default function(options) {

    // Private: Default settings object
    const _defaults = {
        els: '[data-color-group]',
        config: {
        }
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

        // Get all elements
        const $els =  document.querySelectorAll(_settings.els);

        // Create an empty array we can push to later
        let classBackLog = []

        // Observer setup
        const observSetup = (entries) => {

            entries.forEach(entry => {
    
                // Check the section is in view
                if ( entry.intersectionRatio > 0 ) {

                    // Get the data attribute containing the class to add to the body
                    const value = entry.target.dataset.colorGroup;

                    // If our classBackLog array doesn't include the class, then add it
                    if ( !classBackLog.includes(value) ) {
                        
                        classBackLog.push(value);

                    }

                    // Remove all of the classes we've previously observed from our classBackLog array
                    document.body.classList.remove(...classBackLog);

                    // Add the class from our data attribute
                    document.body.classList.add(value);
                }
            });
        }
        // Setup the observer
        let observer = new IntersectionObserver(observSetup, _settings.config);
    
        // Attach the observer to every element instance
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





