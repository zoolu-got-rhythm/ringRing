/*
TODO: Minimum viable product: break problems into smallest solvable chunks
1. circle
2. animate circle
3. increment, decrement
4. many circle instances
5. add intervals, like a phone call.

make a branch and isolate when working on a new feature
*/

function RingCircle(container) {
  var canvas = document.createElement("canvas");
  canvas.className = "ring-circle";
  canvas.width = 50;
  canvas.height = 50;
  this.ctx = canvas.getContext("2d"); // store context
  container.appendChild(canvas);

  this.callInfo = document.createElement("span");
  container.appendChild(this.callInfo);

  this.diam = 0; // can change this on the fly.
  this.speed = 2;
  this.increment = true;
  this.interval = 0;
  this.ringTone = new Audio("telephone_bleep.mp3");
}

RingCircle.prototype = {
  loop: function() {
    if (this.diam === 0) {
      this.ringTone.play();
      console.log("ring ring");
      // sphere.ringTone.pause();
    }

    // parsed argument refer's to myCanvas
    this.ctx.clearRect(0, 0, 400, 400);
    this.draw();

    // recursion
    this.animate = requestAnimationFrame(this.loop.bind(this));

    // every 2 intervals clear animation but ignore first 0(that's divisible by 2)
    if (this.diam === 0 && this.interval % 2 === 0) {
      cancelAnimationFrame(this.animate);
      console.log(this.interval);
    }

    // after 10 rings hang up
    if (this.interval === 20) {
      clearInterval(this.ring);
      this.callInfo.innerHTML = "you have a missed call at " + new Date().getTime();
      console.log("you have a missed call at ", new Date());
    }
  },

  draw: function() {
    // draw a circle
    this.ctx.beginPath();
    this.ctx.arc(25, 25, this.diam, 0, 2 * Math.PI);

    if (this.increment === true) {
      // expand circle
      this.diam += this.speed;
      if (this.diam === 26) {
        this.increment = false;
      }
    }
    if (this.increment === false) {
      // contract circle
      this.diam -= this.speed;
      if (this.diam === 0) {
        this.increment = true;
        this.interval++;
      }
    }

    this.ctx.stroke();
  },

  ring: function() {
    // run loop every few millisecs
    var self = this;
    this.ring = setInterval(function() {
      self.callInfo.innerHTML = "You have a call..";
      self.loop();
    }, 2500);

  }
};

var container = document.createElement("div");
document.body.insertBefore(container, document.getElementsByTagName("button")[0]);


  var ringCircle = new RingCircle(container);
  ringCircle.ring();
