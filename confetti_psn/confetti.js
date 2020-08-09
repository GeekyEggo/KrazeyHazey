var emoji = ['🌽', '🍇', '🍌', '🍒', '🍕', '🍷', '🍭', '💖', '💩', '🐷', '🐸', '🐳', '🎃', '🎾', '🌈', '🍦', '💁', '🔥', '😁', '😱', '🌴', '👏', '💃'];
var circles = [];

for (var i = 0; i < 15; i++) {
    add(i * 150, [10 + 0, 300], emoji[Math.floor(Math.random() * emoji.length)]);
    add(i * 150, [10 + 0, -300], emoji[Math.floor(Math.random() * emoji.length)]);
    add(i * 150, [10 - 200, -300], emoji[Math.floor(Math.random() * emoji.length)]);
    add(i * 150, [10 + 200, 300], emoji[Math.floor(Math.random() * emoji.length)]);
    add(i * 150, [10 - 400, -300], emoji[Math.floor(Math.random() * emoji.length)]);
    add(i * 150, [10 + 400, 300], emoji[Math.floor(Math.random() * emoji.length)]);
    add(i * 150, [10 - 600, -300], emoji[Math.floor(Math.random() * emoji.length)]);
    add(i * 150, [10 + 600, 300], emoji[Math.floor(Math.random() * emoji.length)]);
}

function add(delay, range) {
    setTimeout(function () {
        var c = new Raindrop(range[0] + Math.random() * range[1], 80 + Math.random() * 4, {
            x: -0.15 + Math.random() * 0.3,
            y: 1 + Math.random() * 1
        }, range);
        circles.push(c);
    }, delay);
}


class Raindrop {
    constructor(x, y, v, range) {
        // construct the visual element
        this.element = document.createElement('img');
        this.element.src = './imgs/gold.png';
        this.element.style.opacity = 0;
        this.element.style.position = 'absolute';
        document.body.appendChild(this.element);

        this.position = new Position(x, y);
        this.deviation = v;

        this.range = range;
    }

    update() {
        if (this.position.y > 800) {
            this.position.y = 80 + Math.random() * 4;
            this.position.x = this.range[0] + Math.random() * this.range[1];
        }

        this.position.add(this.deviation);
        
        this.element.style.opacity = 1;

        const translate3d = `translate3d(${this.position.x}px, ${this.position.y}px, 0px)`;
        this.element.style.transform = translate3d;
        this.element.style.webkitTransform = translate3d;
        this.element.style.mozTransform = translate3d;
    };
}

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

(function animate() {
    circles.forEach(c => c.update());
    requestAnimationFrame(animate);
})();