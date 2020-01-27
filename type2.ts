const tupla = [
  ["url", 1515, 5432],
  ["port", 8080, 5454545]
];
function exibeTupla() {
  tupla.forEach(function (element) {
      console.log(element[1]);
  });
}

enum Naipes{
  Clubs, 
  Hearts, 
  Spades, 
  Diamonds
}
function verificaNaipe(){
  let x = 1;
  if(x=== Naipes.Hearts){
      console.log("Coração de leão");
  }else{
      console.log("Não é esse naipe");
  }
}
exibeTupla()
verificaNaipe()
