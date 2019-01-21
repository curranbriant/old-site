var w = 500
var h = 600
var r = 700

function setup() {
  createCanvas(w, h)
  background(0)


  // textSize(40)
  // textAlign(CENTER)

  noStroke()
  fill(255,255,255)


  //noFill()
  strokeWeight(2)
}

var a = 0
var b = 0
var c = 0

var n = 0
var m = 0
var o = 0

var d = 0
var p = 0
var q = 0

function draw() {
  background(0)

  n = 10*Math.sin(a)
  m = 10*Math.sin(b)
  o = 10*Math.sin(c)

  p = 15*Math.cos(d/2)
  q = 15*Math.sin(d)

  blendMode(ADD)
    stroke(255,255,255)
   ellipse(w/2 + n + p, h/2 + m + q, r/2.5, r/2.5)
    stroke(255,255,255)
   ellipse(w/2.2 + m + p, h/2.2 + o + q, r/2, r/2)
    stroke(255,255,255)
   ellipse(w/2.2 + o + p, h/2.2 + n + q, r/2, r/2)
   stroke(255,255,255)
  ellipse(w/2.2 + n + p, h/2.2 + m + q, r/2, r/2)
   stroke(255,255,255)
  ellipse(w/2.2 + m + p, h/2.2 + o + q, r/2, r/2)
   stroke(255,255,255)
  ellipse(w/2 + o + p, h/2 + n + q, r/2, r/2)


  blendMode(BLEND)
    stroke(255,255,255)
   ellipse(w/2 + p, h/2 + q, r/2, r/2)


  a += 0.05
  b += 0.04
  c += 0.11
  d += 0.03
}
