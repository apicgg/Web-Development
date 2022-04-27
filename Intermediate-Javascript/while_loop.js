var numberOfBottles = 99;
while (numberOfBottles >= 1) {
  var bottleWord = "bottles";
  if (numberOfBottles === 1) {
    bottleWord = "bottle";
  }
  console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
  console.log(numberOfBottles + " " + bottleWord + " of beer,");
  console.log("Take one down, pass it around,");
  numberOfBottles--;
  if (numberOfBottles !== 0) {
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
  } else {
    console.log("No more bottles of beer on the wall.");
    console.log(
      "No more bottles of beer on the wall, no more bottles of beer."
    );
    console.log(
      "Go to the store and buy some more, 99 bottles of beer on the wall."
    );
  }
}
