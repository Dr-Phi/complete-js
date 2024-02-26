const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski","Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // Create one player array for each team
// const [players1, players2] = game.players
// console.log(players1);

// /*  For Bayern Munich  create one variable with the goalkeeper's name, and one array  with all the remaining 10 field players */
// const [gk, ...fieldPlayers] = players1
// console.log(gk, fieldPlayers);

// // Create an array containing all players of both teams
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers);

// /*  During the game, Bayern Munich used 3 substitute players. create a new array containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' */
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final);

// // Based on the game.odds object, create one variable for each odd
// const {team1, x: draw, team2} = game.odds
// console.log(team1, draw, team2);

// /*Write a function  that receives an arbitrary number of player
// names (not an array) and prints each of them, along with the
// number of goals that were scored in total */
// function printGoals(...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// printGoals(...game.scored)

// // The team with the lower odd is more likely to win, print it

// // team1 < team2 && console.log(game.team1);
// // team1 > team2 && console.log(game.team2);
// console.log(team1 < team2 && game.team1 || game.team2, 'is more likely to win');

// Challenge 2

// print each goal scored, along with the player name
for (const [i, player] of game.scored.entries()){
  console.log(`Goal ${i+1}: ${player}`);
}

// Use a loop to calculate the average odd
console.log(Object.values(game.odds));

console.log(Object.values(game.odds).reduce((acc, cv) => acc + cv, 0)/Object.values(game.odds).length);

// Print the 3 odds in a nice formatted way
console.log(Object.entries(game.odds));
for (const [k, v] of Object.entries(game.odds)){
  if(k == "x"){
    console.log("Odd of draw:", v);
  } else {
    console.log(`Odd of victory ${game[k]}:`, v);
  }
}

/* Create an object which contains the players who scored as properties,
 and the number of goals as the value */
 console.log(game.scored);

 const scorers = {}
 for (const player of game.scored){
  if (scorers[player] >= 1){
    scorers[player] += 1;
  } else {
    scorers[player] = 1
  }
 }

 console.log(scorers);

 // a better way
const scorers2 = new Map();

game.scored.forEach(player => {
    scorers2.set(player, (scorers2.get(player) || 0) + 1);
});

console.log(scorers2);
