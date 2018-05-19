
let Api = function (config) {
    this.root = config.root;
    this.suffix = config.suffix || '';
    this.fetch = (url, cfg) => fetch(this.root + url + this.suffix, cfg);
}

/* Loopers are used to easily setup auto-reloading data sources. */
let Looper = function (fn, args) {
    this.fn = fn;
    this.id = null;
    this.interval = null;
    this.args = args;
    this.count = 0;
}

Looper.stopAll = function (loops) {
    while (loops.length) {
        let l = loops.pop();
        l.stop();
    }
}

Looper.prototype.run = function (interval, wait) {
    this.interval = interval;
    let execLoop = () => {this.fn(this.args); this.count++};
    this.id = window.setInterval(execLoop, interval);
    if (!wait) execLoop();
    return this;
}

Looper.prototype.stop = function () {
    console.log('Stopping looper '+this.id+' after '+this.count+' cycles.');
    window.clearInterval(this.id);
    this.interval = null;
    return this;
}



export { Api, Looper }
