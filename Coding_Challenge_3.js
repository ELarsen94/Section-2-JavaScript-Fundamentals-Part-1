averageScoreDolphins = (Number(prompt("What did the Dolphins score in the first game?")) + Number(prompt("What did the Dolphins score in the second game?")) + Number(prompt("What did the Dolphins score in the third game?"))) / 3;

console.log(averageScoreDolphins);

averageScoreKoalas = (Number(prompt("What did the Koalas score in the first game?")) + Number(prompt("What did the Koalas score in the second game?")) + Number(prompt("What did the Koalas score in the third game?"))) / 3;

console.log(averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log("The Dolphins win!");
} else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
    console.log("The Koalas win!");
} else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100) {
    console.log("The Dolphins and the Koalas tie!");
} else console.log("Nobody wins!");