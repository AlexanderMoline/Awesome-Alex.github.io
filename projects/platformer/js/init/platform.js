(function(window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};

    let platform = window.opspark.platform;

    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the platform.create() method to create platforms for the level. 
     * 
     * platform.create() takes these arguments:
     *      
     *      platform.create(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */
    platform.init = function(game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        platform.create(0, game.world.height - 32, 3, 2);
        // example:
        platform.create(10, 600, .1, .1); // 1st platform
        platform.create(100, 520, .5, .3); // 2nd platform
        platform.create(250, 400, .8, .5); // 3rd platform
        platform.create(370, 300, .9, .7); // 4th platform
        platform.create(460, 200, .9, .9); // 5th platform
        platform.create(540, 100, .3, .1); // 7th platform
        platform.create(100, 110, .5, .3); // 6th platform
        platform.create(520, 580, .5, .1); // use platform to get on ascend
        platform.create(540, 50, .3, .1); // collectable platform
        platform.create(1100,370,.5,)



        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);
