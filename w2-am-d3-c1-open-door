// Open Door

// Function openDoor is passed an array of objects, each two properties: name (string) and hasCoffee (boolean).

// openDoor should only return true if, for at least one of the objects in the input array, name is Simon and hasCoffee is true. Otherwise return false.
function openDoor(input) {
  // Your code here
  // Google JS syntax ;)
  return (
    // make sure input is
    input && // not null or undefined and
    Array.isArray(input) && // an array and
    // check if at least one of the object satisfies following condition
    input.some(
      o => o && o.name && o.name.toLowerCase() === "simon" && o.hasCoffee
    )
  );
}
console.log(openDoor([{ name: "simon", hasCoffee: undefined }]));
console.log(openDoor([{ name: "simon", hasCoffee: true }]));
console.log(
  openDoor([
    { name: "simon", hasCoffee: undefined },
    { name: "simon", hasCoffee: true }
  ])
);
console.log(
  openDoor([
    { name: "simon", hasCoffee: undefined },
    { name: "simon", hasCoffee: false }
  ])
);
console.log(openDoor([]));
