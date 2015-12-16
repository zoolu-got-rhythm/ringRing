/*
TODO: Minimum viable product: break problems into smallest solvable chunks
1. circle
2. animate circle
3. increment, decrement
4. many circle instances
5. add intervals, like a phone call.

make a branch and isolate when working on a new feature
*/

var x = window.width;
var y = window.height;


var sphere = {
  init: function(){
    this.diam = 0; // can change this on the fly.
    this.colour = "#555";
    this.speed = 2;
    this.increment = true;
    this.interval = 2;

    this.c = this.myCanvas(); // store context
    // console.log(this.c);

    var ring = window.setInterval(function(){
      sphere.run();
    }, 2000);

    // this.run();
  },

  myCanvas: function(){
    var c = document.getElementById("sphere");
    var ctx = c.getContext("2d");
    return ctx;
  },

  loop: function(){
    // parsed argument refer's to myCanvas
    sphere.wipe(sphere.c);
    sphere.draw(sphere.c);

    // recurssion
    var animate = window.requestAnimationFrame(sphere.loop);
  },

  draw: function(c){
    // draw a circle

    // console.log(c);
    c.beginPath();
    c.arc(25,25,this.diam,0,2*Math.PI);


    if(this.increment === true){
      // expand circle
      this.diam += this.speed;
      if(this.diam === 26) {
        this.increment = false;
        // this.wipe(c);
      }
    }
    if(this.increment === false){
      // contract circle
      this.diam -= this.speed;
      if(this.diam === 0) {
        this.increment = true;
        // this.interval++;
        // this.wipe(c);
      }
    }

    c.stroke();



  },

  wipe: function(c){
    c.clearRect(0, 0, 400, 400);
  },

  run: function(){
    // run loop every few millasecs
    this.loop();
  }
}

sphere.init();