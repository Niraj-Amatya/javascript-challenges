// Object Constructors - Dogs
// Instructions:

// Create a Dog constructor function. 

// Each dog should have a name and a location.

// Add a speak method that logs "Woof! My name is {name}"

// Add a walk function that accepts two arguments: location (string) and distance in km (integer)

// Add a displayWalks method that console.logs all of the dog's walks:

// Spring Hill, 2km
// Parklands, 3km

// Add a totalDistance method that logs the total distance of all the walks:

// Spike has walked 5km

// Research: what's the difference between console.log and return? Make sure you have a solid understanding

// Your program should output:

// Dog name: Spike
// Dog location: Brisbane
// Woof! My name is Spike
// Spring Hill, 2km
// Parklands, 3km
// Spike has walked 5km
class Dog {
  constructor(name, location) {
	  this.name = name;
	  this.location = location;
	  this.walks = [];    
  }
	
	speak() {
		console.log(`Woof! My name is ${this.name}`);
	}
	
	walk(location, distance) {
		this.walks.push({location, distance});
	}
	
	displayWalks() {
		this.walks.forEach((walk) => console.log(`${walk.location}, ${walk.distance}km`));
	}
	
	totalDistance() {
		let totalWalkDistance = this.walks.map(walk => walk.distance).reduce((sum, distance) => sum + distance);
		console.log(`${this.name} has walked ${totalWalkDistance}km`);
	}
}

let spike = new Dog("Spike","Brisbane")
console.log("Dog name:",spike.name)
console.log("Dog location:",spike.location)
spike.speak()
spike.walk("Spring Hill", 2)
spike.walk("Parklands", 3)
spike.displayWalks()
spike.totalDistance()