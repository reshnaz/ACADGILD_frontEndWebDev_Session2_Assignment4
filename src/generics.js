// Our Class with an array member that accepts elements of generic type T.
// It also has a constructor.
var sport = /** @class */ (function () {
    function sport() {
        this.sportDetails = [];
    }
    return sport;
}());
// Initializing values in our interfaces.
var sport1 = { teamName: "India", playerCount: 11 };
var sport2 = { playerName: "Sania Mirza", tournament: "Grand Slam" };
// Declaring objects of our generic type class
var batsmen = new sport();
var baseliners = new sport();
// Passing interface details into class objects
batsmen.sportDetails.push(sport1);
baseliners.sportDetails.push(sport2);
// Displaying values contained in the objects
console.log(batsmen.sportDetails);
console.log(baseliners.sportDetails);
