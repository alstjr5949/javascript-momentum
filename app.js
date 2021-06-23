// JavaScript is very flexible
// flexible === dangerous
// added ECNAScript 5
'use strict';

// * Variable types
// primitive, single item: number, string, boolean, null, undefied, symbol
// object, box container
// function, first-class function

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // .description

// Object == {}
const playerName ="minseok"
const playerPoints = 12342;
const playerHandsome = false;
const playerFat = "nope"

const player = {
    name: "minseok",
    points: 12,
    fat: false,
};

console.log(player);
console.log(player.name);

// Change, Add Object
player.lastname ="Blah";
player.point = 19;
console.log(player);


