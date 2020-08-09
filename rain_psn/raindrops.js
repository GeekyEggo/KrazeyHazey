/**
 * Assigns a the global variable `rain` to the window
 */
(function () {
    class Position {
        /**
         * Initializes a new instance of a position.
         * @param {number} x The x coordinate.
         * @param {number} y The y coordinate.
         */
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        /**
         * Adds the other poition, to this instance.
         * @param {Position} other The other position coordinates to add.
         */
        add(other) {
            this.x += other.x;
            this.y += other.y;
        }
    }

    class Range {
        /**
         * Initializes a new instance of a range.
         * @param {number} min The minimum value.
         * @param {number} max The maximum value.
         */
        constructor(min, max) {
            this.min = min;
            this.max = max;
        }

        /**
         * Gets a random number between the minimum and maxium.
         * @returns A random number between min and max.
         */
        getRandom() {
            return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        }
    }

    const INITIAL_Y_POSITION = -30;
    class Raindrop {
        /**
         * Initializes a new instance of a raindrop.
         * @param {string} imgSource The image source of the raindrop.
         */
        constructor(imgSource) {
            this.xRange = new Range(0, window.outerWidth);
            this.position = new Position(this.xRange.getRandom(), INITIAL_Y_POSITION);
            this.deviation = new Position(
                -0.15 + Math.random() * 0.3,
                1 + Math.random() * 1);

            this.createElement(imgSource);
            document.body.appendChild(this.element);
        }

        /**
         * Creates the element that the raindrop represents.
         * @param {string} imgSource The image source of the element.
         */
        createElement(imgSource) {
            // construct the visual element
            this.element = document.createElement('img');
            this.element.src = imgSource;
            this.element.style.opacity = 0;
            this.element.style.position = 'absolute';
        }

        /**
         * Updates the position of the raindrop.
         */
        update() {
            if (this.position.y > window.innerHeight) {
                // reset the position to the top
                this.position.x = this.xRange.getRandom();
                this.position.y = INITIAL_Y_POSITION;
            } else {
                // increment the position based on the deviation
                this.position.add(this.deviation);
            }

            // set the style
            this.element.style.opacity = 1;
            const translate3d = `translate3d(${this.position.x}px, ${this.position.y}px, 0px)`;
            this.element.style.transform = translate3d;
            this.element.style.webkitTransform = translate3d;
            this.element.style.mozTransform = translate3d;
        };
    }

    class Raindrops {
        /**
         * Initializes a new instance of raindrops.
         */
        constructor() {
            this.drops = [];
        }

        /**
         * Begins the animation of raindrops.
         */
        animate() {
            this.drops.forEach(c => c.update());
            requestAnimationFrame(() => this.animate());
        }

        /**
         * Pushes a raindrop on to the array of drops.
         * @param {string} imgSource The image source of the rain drop.
         */
        push(imgSource) {
            this.drops.push(new Raindrop(imgSource));
        }
    }

    this.window.__rain = new Raindrops();
})();
