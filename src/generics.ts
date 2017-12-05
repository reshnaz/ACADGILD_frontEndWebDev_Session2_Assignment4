// Interface-1
interface cricket {
    teamName: string;
    playerCount: number;
}

// Interface-2
interface tennis {
    playerName: string;
    tournament: string;
}

// Our Class with an array member that accepts elements of generic type T.
// It also has a constructor.
class sport<T> {
    sportDetails: T[];
    constructor() {
        this.sportDetails = [];
    }
}

// Initializing values in our interfaces.
let sport1 : cricket = { teamName: "India", playerCount: 11};
let sport2 : tennis = { playerName : "Sania Mirza", tournament: "Grand Slam"};

// Declaring objects of our generic type class
let batsmen: sport<cricket> = new sport<cricket>();
let baseliners: sport<tennis> = new sport<tennis>();

// Passing interface details into class objects
batsmen.sportDetails.push(sport1);
baseliners.sportDetails.push(sport2);

// Displaying values contained in the objects
console.log(batsmen.sportDetails);
console.log(baseliners.sportDetails);