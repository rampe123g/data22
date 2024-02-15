// Q 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// (Passes the if test):
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The version just failed.");
}
var alienColor = 'red';
if (alienColor === 'green') {
    console.log("The version failed because the alien's color is green. The player should have earned 10 points.");
}
else {
    console.log("The player just earned 10 points for shooting the alien.");
}
