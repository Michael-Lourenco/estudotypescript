var tupla = [
    ["url", 1515, 5432],
    ["port", 8080, 5454545]
];
function exibeTupla() {
    tupla.forEach(function (element) {
        console.log(element[1]);
    });
}
var Naipes;
(function (Naipes) {
    Naipes[Naipes["Clubs"] = 0] = "Clubs";
    Naipes[Naipes["Hearts"] = 1] = "Hearts";
    Naipes[Naipes["Spades"] = 2] = "Spades";
    Naipes[Naipes["Diamonds"] = 3] = "Diamonds";
})(Naipes || (Naipes = {}));
function verificaNaipe() {
    var x = 1;
    if (x === Naipes.Hearts) {
        console.log("Coração de leão");
    }
    else {
        console.log("Não é esse naipe");
    }
}
exibeTupla();
verificaNaipe();
