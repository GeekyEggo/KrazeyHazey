(function() {
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            addBatch('./imgs/crane_blue.png', 10);
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