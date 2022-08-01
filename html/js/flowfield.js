
// VARIABLES INICIALES

let particles = [];

// Noise increment
let inc = 0.01;	// MOD

let num_part = 4000;	// MOD

function setup() {
	createCanvas(2000, 2000);	// MOD

	for (let i = 0; i < num_part; i++) {
		particles[i] = new Particle();
	}
	// BACKGROUND COLOR
	background('#363635'); // MOD
}

function draw() {
	// BACKGROUND IS DRAWN IN EACH FRAME WITH AN ALPHA VALUE SO THE PARTICLES LEAVE A TRACE BEHIND
	background(54, 54, 53, 10);		// MOD

	for (let i = 0; i < particles.length; i++) {
		let angle = noise(particles[i].pos.x * inc, particles[i].pos.y * inc) * TAU;
		particles[i].follow(angle);
		particles[i].show();
	}

	// TEXT
	textSize(60);
	textFont('League Gothic');
	text('Westy', 1810, 1820);
	fill('#FBFBF2');
	textSize(44);
	textFont('League Gothic');
	text('Noise Field', 1780, 1880);
	fill('#FBFBF2');
}

// PARTICULAS
function Particle() {

	this.pos = createVector(random(width), random(height));
	this.prevPos = this.pos.copy();

	this.updatePrev = function() {
		this.prevPos = this.pos.copy();
	}

	this.follow = function(angle){
		this.pos.x += cos(angle);
		this.pos.y += sin(angle);
		// Edges update
		if (this.pos.x > width) {
			this.pos.x = 0;
			this.updatePrev();
		}
		if (this.pos.x < 0) {
			this.pos.x = width;
			this.updatePrev();
		}
		if (this.pos.x > height) {
			this.pos.y = 0;
			this.updatePrev();
		}
		if (this.pos.x < 0) {
			this.pos.y = height;
			this.updatePrev();
		}
	}

	this.show = function() {
		// PARTICLES COLOR
		stroke(161, 134, 158);	// MOD
		strokeWeight(5);		// MOD
		// point(this.pos.x, this.pos.y);
		line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
		this.updatePrev();
	}

}