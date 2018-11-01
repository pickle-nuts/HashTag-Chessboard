/*
- Create a var size to determine size of board
- Create a var board to create an empty string
- Create loops for the rows to loop 8 times
- Create an if statement in which the sum is divisable by 2, to leave a spacing
Otherwise, leave a hashtag.
- Print Board.
*/

var size = 8;
var board = "";

for(var i = 0; i < size; i++){
  for(var x = 0; x < size; x++){
    if((x + i)% 2 === 0){
      board += " ";
    }else{
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);