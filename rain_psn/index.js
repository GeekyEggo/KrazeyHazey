(function() {
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            addBatch('./imgs/platinum.png', 10);
            addBatch('./imgs/gold.png', 6);
            addBatch('./imgs/silver.png', 4);
            addBatch('./imgs/bronze.png', 2);
        }, i * 750);
    }

    function addBatch(imgSource, count) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                this.window.__rain.push(imgSource);
            }, i * 150);
        }
    }
    
    this.window.__rain.animate();
})();