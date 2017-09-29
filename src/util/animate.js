function Animate(el) {
    if (el.length) {
        this.el = [].slice.apply(el)
    }else{
	
	    this.el = el;
    }
    console.log(el);
}
Animate.prototype.init = function () {
    if (this.el.length) {
        this.el.forEach(function (ele) {
            ele.originState = ele.getBoundingClientRect();
        })
        return;
    }
    this.el.originState = this.el.getBoundingClientRect();
};
Animate.prototype.action = function (fn) {
    if (fn instanceof Function !== true) return;
    fn();
    setTimeout(()=>{
	
	    if (this.el.length) {
		    this.el.forEach(function (ele) {
		        ele.finalState = ele.getBoundingClientRect();
			    var finalState = ele.getBoundingClientRect();
			    ele.style.transform = `translate(${ele.originState.left - finalState.left},${ele.originState.top - finalState.top}px )`;
		    })
		    return;
	    }
	    var finalState = this.el.getBoundingClientRect();
	    this.el.style.transform = `translateY(${this.el.originState.left - finalState.left}, ${this.el.originState.top - finalState.top}px)`;
    }, 1000);
}
Animate.prototype.invert = function (time, callback) {
    var that = this;
    setTimeout(function () {
        if (that.el.length) {
            that.el.forEach(function (ele) {
                ele.style.transition = time + "s";
                ele.style.transform = '';
                ele.addEventListener("transitionend", function () {
                    ele.style.transition = '';
                });
            });
        } else {
            that.el.style.transition = time + "s";
            that.el.style.transform = '';
            that.el.addEventListener("transitionend", function () {
                that.el.style.transition = '';
            });
        }
        if (callback instanceof Function === true) {
           var delay = setTimeout(function(){
                callback();
                delay = null;
            }, time * 1000);
        }
    }, 0);
};

export default  function createAnimate(el, time, fn, callback) {
    var ani = new Animate(el);
    ani.init();
    setTimeout(function(){ani.action(fn)},10000)
    ani.invert(time, callback);
    // ani = null;

}