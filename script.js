
$(document).ready(function(){

  var whoseTurn = 0;
  var board = ["", "", "", "", "", "", "", "", ""];
  var boardNum;

  function checkForWins() {
    if  (board[0] + board[1] + board[2] === 3 ||
      board[3] + board[4] + board[5] === 3 ||
      board[6] + board[7] + board[8] === 3 ||
      board[0] + board[3] + board[6] === 3 ||
      board[1] + board[4] + board[7] === 3 ||
      board[2] + board[5] + board[8] === 3 ||
      board[0] + board[4] + board[8] === 3 ||
      board[2] + board[4] + board[6] === 3)
      {alert("X wins!");
      turnOff();

    } else if (
      board[0] + board[1] + board[2] === -3 ||
      board[3] + board[4] + board[5] === -3 ||
      board[6] + board[7] + board[8] === -3 ||
      board[0] + board[3] + board[6] === -3 ||
      board[1] + board[4] + board[7] === -3 ||
      board[2] + board[5] + board[8] === -3 ||
      board[0] + board[4] + board[8] === -3 ||
      board[2] + board[4] + board[6] === -3)
      {alert("O wins!");
      turnOff();
      }
    }

  function putNumInArray() {
    if( whoseTurn % 2 === 0) {
      board.splice(boardNum, 1, 1)
      console.log("X" + board);
    } else {
      board.splice(boardNum, 1, -1)
      console.log("O" + board);
    }
  }

  function turnOff() {
    $("td").off("click");
  }

    $("td").on("click", function(){
      if( whoseTurn % 2 === 0) {
        boardNum = $(this).text();
        putNumInArray();
        $(this).append('<img src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672366-x-128.png">');
        $(this).off("click");
        checkForWins();
      }
      // alert($(this).attr("id"));
      else {
        boardNum = $(this).text();
        putNumInArray();
        $(this).append('<img src="https://www.filtersfast.com/ProdImages/Pentek-241-O-Ring.jpg">');
        $(this).off("click")
        checkForWins();
      }
      whoseTurn++;
    });
  });
